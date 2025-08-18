import { Image } from "@imagekit/next";
import MoreInfo from "./MoreInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils/imageKit";
import { Video } from "@imagekit/next";
import { MoreInfoItem } from "./MoreInfo";
import NotInterestedIcon from "public/icons/notinterested.svg";
import FollowIcon from "public/icons/follow.svg";
import SubscribeIcon from "public/icons/subscribe.svg";
import BlockIcon from "public/icons/block.svg";
import ReportIcon from "public/icons/report.svg";

interface fileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMeta?: {
    sensitive: boolean;
  };
}

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

const Post = async () => {
  const getFileDetails = async (fileId: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as fileDetailsResponse);
        }
      });
    });
  };

  const fileDetails = await getFileDetails("689de5255c7cd75eb8f77da9");

  // console.log(fileDetails);

  return (
    <div className="p-4 pb-1 border-y-[1px] border-border-gray">
      {/* POST TYPE */}
      {/* <div className="flex items-center gap-2 text-sm text-text-gray mb-2 font-bold">
        icon
        <span>William13 reposted</span>
      </div> */}
      {/* POST CONTENT */}
      <div className="flex gap-2">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base font-bold">William Haudrey</h1>
              <span className="text-text-gray">@William13</span>
              <span className="text-text-gray">1 day ago</span>
            </div>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>
          {/* Text and media */}
          <p className="mt-2">Here are some random texts in X post</p>
          {/* <Image
            src="general/post.jpeg"
            alt="post"
            width={600}
            height={600}
            className="rounded-xl"
          /> */}
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              src={fileDetails.filePath}
              alt="post"
              width={fileDetails.width}
              height={fileDetails.height}
              // className={
              //   fileDetails.customMeta?.sensitive
              //     ? "rounded-xl blur-lg"
              //     : "rounded-xl"
              // }
              className="rounded-xl"
              quality={80}
            />
          ) : (
            <Video
              src={fileDetails.filePath}
              controls
              transformation={[{}]}
              className={`rounded-xl ${
                fileDetails.customMeta?.sensitive ? "blur-lg" : ""
              }`}
            />
          )}

          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
