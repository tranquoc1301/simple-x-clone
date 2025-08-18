import { Image } from "@imagekit/next";

const Search = () => {
  return (
    <div className="flex items-center gap-2 border-[2px] border-border-gray rounded-full mt-1 px-4 py-3 focus-within:border-icon-blue">
      <Image
        src="icons/explore.svg"
        alt="search"
        width={14}
        height={14}
        className="fill-text-gray"
      />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 text-sm outline-none placeholder:text-white/80"
      />
    </div>
  );
};

export default Search;
