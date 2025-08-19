// actions/postAction.tsx
"use server";

import { imagekit } from "@/utils/imageKit";
import { cache } from "react";

export interface FileDetailsResponse {
  width?: number;
  height?: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: {
    sensitive?: boolean;
  };
}

export const getFileDetails = cache(
  async (fileId: string): Promise<FileDetailsResponse> => {
    if (!fileId) throw new Error("Invalid fileId");

    const result = await new Promise<FileDetailsResponse>((resolve, reject) => {
      imagekit.getFileDetails(fileId, (error, result) => {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });

    if (!result.filePath || !result.url || !result.fileType) {
      throw new Error("Incomplete file details");
    }

    return {
      width: result.width,
      height: result.height,
      filePath: result.filePath,
      url: result.url,
      fileType: result.fileType,
      customMetadata: result.customMetadata
        ? { sensitive: !!result.customMetadata.sensitive }
        : undefined,
    };
  }
);
