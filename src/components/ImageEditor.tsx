"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useState } from "react";

const ImageEditor = ({
  onClose,
  previewURL,
  settings,
  setSettings,
}: {
  onClose: () => void;
  previewURL: string;
  settings: { type: "original" | "wide" | "square"; sensitive: boolean };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | "square";
      sensitive: boolean;
    }>
  >;
}) => {
  // Temporary state for settings in the editor
  const [tempSettings, setTempSettings] = useState(settings);

  const handleChangeSensitive = (sensitive: boolean) => {
    setTempSettings((prev) => ({ ...prev, sensitive }));
  };

  const handleChangeType = (type: "original" | "wide" | "square") => {
    setTempSettings((prev) => ({ ...prev, type }));
  };

  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-modal-overlay z-100 flex items-center justify-center">
      <div className="bg-black rounded-xl px-10 py-4 flex flex-col gap-4">
        {/* Top options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              onClick={onClose}
              className="cursor-pointer hover:border hover:bg-gray-100/10 rounded-full border-transparent transition-all duration-200"
            >
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl">Media Settings</h1>
          </div>
          <button
            className="px-5 py-2 bg-white rounded-full text-sm text-black font-bold cursor-pointer hover:brightness-90 transition-all duration-200"
            onClick={() => {
              setSettings(tempSettings);
              onClose();
            }}
          >
            Save
          </button>
        </div>

        {/* Image Center */}
        <div className="w-[600px] h-[600px] flex items-center">
          <Image
            src={previewURL}
            width={600}
            height={600}
            alt="preview"
            className={cn(
              `w-full ${
                tempSettings.type === "original"
                  ? "h-full object-contain"
                  : tempSettings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`
            )}
          />
        </div>
        {/* Bottom settings */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            {/* Original */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("original")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    tempSettings.type === "original"
                      ? "fill-icon-blue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              <span>Original</span>
            </div>
            {/* Wide */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("wide")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    tempSettings.type === "wide"
                      ? "fill-icon-blue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              <span>Wide</span>
            </div>
            {/* Square */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleChangeType("square")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <path
                  className={
                    tempSettings.type === "square"
                      ? "fill-icon-blue"
                      : "fill-[#e7e9ea]"
                  }
                  d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
                />
              </svg>
              <span>Square</span>
            </div>
          </div>
          <div
            className={`cursor-pointer py-1 px-4 font-bold rounded-full text-black ${
              tempSettings.sensitive ? "bg-red-500" : "bg-white"
            }`}
            onClick={() => handleChangeSensitive(!tempSettings.sensitive)}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
