"use server";

import ImageKit from "imagekit";
export const UploadMedia = async (
  formData: FormData
  // settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT as string,
  });
  const file = formData.get("media") as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // const transformation = `w-600, ${
  //   settings.type === "square"
  //     ? "ar-1-1"
  //     : settings.type === "wide"
  //     ? "ar-16-9"
  //     : ""
  // }`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image") &&
        {
          // transformation: {
          //   pre: transformation,
          // },
        }),
      // customMetadata: {
      //   sensitive: settings.sensitive,
      // },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
