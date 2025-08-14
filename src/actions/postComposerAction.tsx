"use server";

import { imagekit } from "@/utils/imageKit";
export const postComposerAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("media") as File | null;

  // Validate the file
  if (!file || file.size === 0) {
    console.error("No valid file provided in formData.");
    return {
      error: "No valid file provided. Please select an image to upload.",
    };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure the buffer is not empty
    if (buffer.length === 0) {
      console.error("File buffer is empty.");
      return {
        error: "File buffer is empty. Please select a valid image.",
      };
    }

    const transformation = `w-600${
      settings.type === "square"
        ? ",ar-1-1"
        : settings.type === "wide"
        ? ",ar-16-9"
        : ""
    }`;

    // Perform the upload
    const result = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    });
    console.log(result);

    return {
      success: true,
      result: {
        fileId: result.fileId,
        name: result.name,
        size: result.size,
        filePath: result.filePath,
        url: result.url,
        fileType: result.fileType,
        height: result.height,
        width: result.width,
        thumbnailUrl: result.thumbnailUrl,
      },
    };
  } catch (error) {
    console.error("ImageKit upload error:", error);
    return {
      error: "Failed to upload image. Please try again.",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
