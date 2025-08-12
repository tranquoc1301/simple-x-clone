import { Image } from "@imagekit/next";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
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
            <PostInfo />
          </div>
          {/* Text and media */}
          <p className="mt-2">Here are some random texts in X post</p>
          <Image
            src="general/post.jpeg"
            alt="post"
            width={600}
            height={600}
            className="rounded-xl"
          />
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
