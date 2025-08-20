// components/Post.tsx
"use client";

import { useState, useEffect } from "react";
import { Image } from "@imagekit/next";
import { Video } from "@imagekit/next";
import MoreInfo from "./MoreInfo";
import PostInteractions from "./PostInteractions";
import { getFileDetails } from "@/actions/postAction";
import { FileDetailsResponse } from "@/actions/postAction";
import { MoreInfoItem } from "./MoreInfo";
import NotInterestedIcon from "public/icons/notinterested.svg";
import FollowIcon from "public/icons/follow.svg";
import SubscribeIcon from "public/icons/subscribe.svg";
import BlockIcon from "public/icons/block.svg";
import ReportIcon from "public/icons/report.svg";

const MoreInfoList: MoreInfoItem[] = [
  {
    icon: NotInterestedIcon,
    text: "Not interested in this post",
  },
  {
    icon: FollowIcon,
    text: "Follow @william13",
  },
  {
    icon: SubscribeIcon,
    text: "Subscribe to @william13",
  },
  {
    icon: BlockIcon,
    text: "Block @william13",
  },
  {
    icon: ReportIcon,
    text: "Report post",
  },
];

const Post = () => {
  const [fileDetails, setFileDetails] = useState<FileDetailsResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        const data = await getFileDetails("689de5255c7cd75eb8f77da9");
        setFileDetails(data);
      } catch (err) {
        setError("Failed to load media");
      }
    };
    fetchFileDetails();
  }, []);

  return (
    <div className="p-4 pb-1 border-y-[1px] border-border-gray">
      <div className="flex gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base font-bold">William Haudrey</h1>
              <span className="text-text-gray">@William13</span>
              <span className="text-text-gray">1 day ago</span>
            </div>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>
          <p>Here are some random texts in X post</p>
          {error && <p className="text-red-500">{error}</p>}
          {fileDetails ? (
            fileDetails.fileType === "image" ? (
              <Image
                src={fileDetails.filePath}
                alt="post"
                width={fileDetails.width}
                height={fileDetails.height}
                className={`rounded-xl ${
                  fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                }`}
                quality={80}
              />
            ) : (
              <Video
                src={fileDetails.filePath}
                controls
                transformation={[{}]}
                className={`rounded-xl ${
                  fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                }`}
              />
            )
          ) : (
            <p>Loading media...</p>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
