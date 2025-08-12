import { Image } from "@imagekit/next";

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
          className="group relative cursor-pointer p-2 rounded-full transition-all duration-200"
        >
          <div className="absolute inset-0 rounded-full bg-icon-blue opacity-0 group-hover:opacity-15 transition-opacity duration-200"></div>
          <Image
            src={option.src}
            alt={option.alt}
            width={20}
            height={20}
            className="relative z-10"
          />
        </div>
      ))}
    </div>
  );
};

const PostComposer = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src="general/avatar.jpg" alt="avatar" width={40} height={40} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Input */}
        <input
          type="text"
          placeholder="What's happening?"
          className="py-2 text-xl bg-transparent outline-none placeholder:text-text-gray"
        />

        {/* Divider */}
        <div className="h-px bg-border-gray"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <OptionList />
          <button className="bg-white text-black font-bold px-6 py-2 rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
