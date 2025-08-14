"use client";

import { Image } from "@imagekit/next";
import NextImage from "next/image";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { postComposerAction } from "@/actions/postComposerAction";
import ImageEditor from "./ImageEditor";

const OptionList = () => {
  const options = [
    { src: "icons/image.svg", alt: "image" },
    { src: "icons/gif.svg", alt: "gif" },
    { src: "icons/poll.svg", alt: "poll" },
    { src: "icons/emoji.svg", alt: "emoji" },
    { src: "icons/schedule.svg", alt: "schedule" },
    { src: "icons/location.svg", alt: "location" },
  ];

  return (
    <div className="flex items-center gap-4">
      {options.map((option) => (
        <div
          key={option.alt}
          className={cn(
            "group relative cursor-pointer p-2 rounded-full",
            "transition-all duration-200"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-icon-blue",
              "opacity-0 group-hover:opacity-15",
              "transition-opacity duration-200"
            )}
          />

          {option.alt === "image" ? (
            <label
              htmlFor="media"
              className={cn("cursor-pointer block relative z-10")}
            >
              <Image src={option.src} alt={option.alt} width={20} height={20} />
            </label>
          ) : (
            <Image src={option.src} alt={option.alt} width={20} height={20} />
          )}
        </div>
      ))}
    </div>
  );
};

const PostComposer = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const [error, setError] = useState<string | null>(null);

  const previewURL = media ? URL.createObjectURL(media) : null;

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMedia(file);
      setError(null);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    if (!media) {
      setError("Please select an image to upload.");
      return;
    }

    const response = await postComposerAction(formData, settings);
    if (response.error) {
      setError(response.error);
    } else {
      setError(null);
      setMedia(null);
      setSettings({ type: "original", sensitive: false }); //
    }
  };

  return (
    <form className={cn("p-4 flex gap-4")} action={handleSubmit}>
      {/* Avatar */}
      <div className={cn("w-10 h-10 rounded-full overflow-hidden")}>
        <Image src="general/avatar.jpg" alt="avatar" width={40} height={40} />
      </div>

      {/* Content */}
      <div className={cn("flex-1 flex flex-col gap-3")}>
        {/* Input */}
        <input
          type="text"
          name="content"
          placeholder="What's happening?"
          className={cn(
            "py-2 text-xl bg-transparent outline-none",
            "placeholder:text-text-gray"
          )}
        />
        {
          // Preview selected media
          previewURL && media?.type.includes("image") && (
            <div className="relative overflow-hidden">
              <NextImage
                src={previewURL}
                alt="preview"
                width={600}
                height={600}
                className={cn(
                  `w-full ${
                    settings.type === "original"
                      ? "h-full object-contain"
                      : settings.type === "square"
                      ? "aspect-square object-cover"
                      : "aspect-video object-cover"
                  }`,
                  "object-cover w-full h-full rounded-2xl border border-border-gray"
                )}
              />
              <div
                className={cn(
                  "absolute top-2 left-2 py-1 px-4",
                  "text-sm font-semibold text-white",
                  "bg-black/50 rounded-full cursor-pointer",
                  "hover:bg-black/70 transition-colors duration-200"
                )}
                onClick={() => setIsEditorOpen(true)}
              >
                Edit
              </div>
            </div>
          )
        }
        {
          // Preview selected media
          previewURL && media?.type.includes("video") && (
            <div className="relative overflow-hidden">
              <video
                src={previewURL}
                controls
                className={cn(
                  "w-full h-full rounded-2xl border border-border-gray"
                )}
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm">
                X
              </div>
            </div>
          )
        }

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Editor */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        {/* Divider */}
        <div className={cn("h-px bg-border-gray")} />

        {/* Bottom Section */}
        <div className={cn("flex items-center justify-between")}>
          <input
            type="file"
            accept="image/*, video/*"
            onChange={handleMediaChange}
            className="hidden"
            id="media"
            name="media"
          />
          <OptionList />
          <button
            type="submit"
            className={cn(
              "bg-white text-black font-bold px-6 py-2 rounded-full",
              "shadow-sm hover:brightness-90",
              "transition-all duration-200 cursor-pointer"
            )}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostComposer;
