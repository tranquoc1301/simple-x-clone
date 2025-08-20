import Search from "./Search";
import Trending from "./Trending";
import Following from "./Following";
import Link from "next/link";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4 sticky top-0 h-screen">
      <Search />
      <Trending />
      <Following />
      <div className="text-text-gray text-xs flex flex-wrap gap-x-4 gap-y-2">
        <Link href="/" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:underline">
          Cookie Policy
        </Link>
        <Link href="/" className="hover:underline">
          Accessibility
        </Link>
        <Link href="/" className="hover:underline">
          Ads info
        </Link>
        <Link href="/" className="hover:underline">
          More...
        </Link>
        <span className="text-text-gray-light">© 2025 X Clone.</span>
      </div>
    </div>
  );
};

export default RightBar;
