"use client";

import Link from "next/link";
import { Image } from "@imagekit/next";
import { useState } from "react";
import { cn } from "@/utils/cn";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={cn(
        "h-screen sticky top-0 flex flex-col justify-between",
        "pt-2 pb-8"
      )}
    >
      {/* Logo menu buttons */}
      <div
        className={cn(
          "flex flex-col gap-4 text-lg",
          "items-center xxl:items-start"
        )}
      >
        {/* Logo */}
        <Link
          href=""
          className={cn(
            "p-2 rounded-full",
            "hover:bg-[#181818] transition-colors duration-200"
          )}
        >
          <Image src="icons/logo.svg" alt="logo" width={30} height={30} />
        </Link>

        {/* Menu */}
        <ul className="flex flex-col gap-4">
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={cn(
                  "flex items-center gap-4",
                  "px-4 py-3 rounded-full",
                  "hover:bg-[#181818] transition-colors duration-200"
                )}
              >
                <Image
                  src={`icons/${item.icon}`}
                  alt={item.name}
                  width={26}
                  height={26}
                />
                <span className={cn("hidden xxl:inline", "text-xl")}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Post Button - Small */}
        <Link
          href=""
          className={cn(
            "bg-white text-black rounded-full",
            "w-12 h-12 flex items-center justify-center",
            "xxl:hidden",
            "hover:bg-gray-200 transition-colors duration-200"
          )}
        >
          <Image src="icons/post.svg" alt="post" width={26} height={26} />
        </Link>

        {/* Post Button - Large */}
        <Link
          href=""
          className={cn(
            "hidden xxl:block",
            "bg-white text-black rounded-full font-bold",
            "px-24 py-3 mt-2",
            "hover:bg-gray-200 transition-colors duration-200"
          )}
        >
          Post
        </Link>
      </div>

      {/* User profile */}
      <div className="mt-6">
        <div
          className={cn(
            "relative flex items-center justify-between cursor-pointer",
            "hover:bg-[#181818] rounded-full p-3",
            "transition-colors duration-200"
          )}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex items-center gap-2">
            <div
              className={cn("w-12 h-12 relative rounded-full overflow-hidden")}
            >
              <Image
                src="/general/avatar.jpg"
                alt="avatar"
                fill
                className="rounded-full"
              />
            </div>
            <div className={cn("hidden xxl:flex flex-col ml-2")}>
              <span className="font-bold">William Haudrey</span>
              <span className={cn("text-sm text-text-gray")}>@William13</span>
            </div>
          </div>

          <div
            className={cn(
              "absolute bottom-full py-3 mb-5",
              "left-1/2 -translate-x-1/2 w-[300px]",
              "bg-[#030303] border border-[#ffffff33]",
              "rounded-2xl shadow-lg backdrop-blur-sm",
              "transition-all duration-200 ease-in-out",
              showDropdown
                ? "block opacity-100 scale-100"
                : "hidden opacity-0 scale-95"
            )}
          >
            <ul className="py-2 font-bold text-base text-white">
              <li
                className={cn(
                  "px-4 py-2 cursor-pointer",
                  "hover:bg-[#2c2c2c] transition-colors duration-200"
                )}
              >
                Add an existing account
              </li>
              <li
                className={cn(
                  "px-4 py-2 cursor-pointer",
                  "hover:bg-[#2c2c2c] transition-colors duration-200"
                )}
              >
                Logout @William13
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
