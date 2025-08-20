"use client";

import { MoreInfoItem } from "./MoreInfo";
import NotInterestedIcon from "public/icons/notinterested.svg";
import MoreInfo from "./MoreInfo";
import { cn } from "@/utils/cn";

const MoreInfoList: MoreInfoItem[] = [
  {
    icon: NotInterestedIcon,
    text: "The associated content is not relevant",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is spam",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is abusive or harmful",
  },
  {
    icon: NotInterestedIcon,
    text: "Not interested in this",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is harmful or spammy",
  },
];

// Static trending data to avoid recreation on each render
const TRENDING_ITEMS = [
  {
    id: 1,
    category: "Only on X - Trending",
    hashtag: "#riyadh",
    posts: "526K posts",
  },
  {
    id: 2,
    category: "Only on X - Trending",
    hashtag: "#riyadh",
    posts: "526K posts",
  },
  {
    id: 3,
    category: "Only on X - Trending",
    hashtag: "#riyadh",
    posts: "526K posts",
  },
  {
    id: 4,
    category: "Only on X - Trending",
    hashtag: "#riyadh",
    posts: "526K posts",
  },
] as const;

const Trending = () => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl p-4 border-[1px] border-border-gray"
      )}
    >
      <h1 className={cn("text-xl font-bold")}>What's happening</h1>

      <ul className={cn("flex flex-col gap-4")}>
        {TRENDING_ITEMS.map((item) => (
          <li key={item.id} className={cn("flex flex-col")}>
            <div className={cn("flex justify-between items-center")}>
              <span className={cn("text-text-gray text-sm")}>
                {item.category}
              </span>
              <MoreInfo moreInfoList={MoreInfoList} />
            </div>
            <div className={cn("font-bold text-normal-bold")}>
              {item.hashtag}
            </div>
            <span className={cn("text-text-gray text-sm")}>{item.posts}</span>
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

export default Trending;
