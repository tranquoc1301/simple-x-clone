import { Image } from "@imagekit/next";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image src="icons/infoMore.svg" alt="info" width={20} height={20} />
    </div>
  );
};

export default PostInfo;
