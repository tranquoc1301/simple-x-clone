"use client";

import { Image } from "@imagekit/next";
import { cn } from "@/utils/cn";

const FOLLOWING_SUGGESTIONS = [
  {
    id: "fromsoftware",
    src: "general/fromsoftware.jpg",
    name: "FROMSOFTWARE",
    handle: "@fromsoftware_pr",
  },
  {
    id: "elonmusk",
    src: "general/elonmusk.jpg",
    name: "Elon Musk",
    handle: "@elonmusk",
  },
  {
    id: "kojima",
    src: "general/hideokojima.jpg",
    name: "HIDEO_KOJIMA",
    handle: "@HIDEO_KOJIMA_EN",
  },
] as const;

const Following = () => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl p-4 border-[1px] border-border-gray"
      )}
    >
      <h1 className={cn("text-xl font-bold")}>Who to follow</h1>

      <ul className={cn("flex flex-col gap-4")}>
        {FOLLOWING_SUGGESTIONS.map((user) => (
          <li key={user.id} className={cn("flex items-center flex-1")}>
            <Image
              src={user.src}
              alt={`${user.name} avatar`}
              width={40}
              height={40}
              className={cn("rounded-full")}
            />
            <div className={cn("flex flex-col ml-2")}>
              <div className={cn("font-bold text-normal")}>{user.name}</div>
              <span className="text-text-gray text-normal">{user.handle}</span>
            </div>
            <button
              className={cn(
                "bg-white px-4 py-1.5 text-black text-sm font-bold rounded-full ml-auto",
                "transition-all duration-200 ease-out",
                "hover:bg-gray-100 hover:scale-105 active:scale-95",
                "cursor-pointer"
              )}
            >
              Follow
            </button>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "text-normal text-icon-blue text-left mt-2",
          "hover:underline hover:cursor-pointer"
        )}
      >
        Show more
      </button>
    </div>
  );
};

export default Following;
