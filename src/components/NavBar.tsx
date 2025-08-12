import Link from "next/link";
import { cn } from "@/utils/cn";

const navItems = ["For you", "Following"];

const NavBar = () => {
  return (
    <nav
      className={cn(
        "flex justify-between text-white font-semibold",
        "border-b border-border-gray"
      )}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href="/"
          className={cn(
            "relative flex-1 px-6 py-4",
            "flex items-center justify-center text-base",
            "transition-colors duration-100 group",
            "hover:bg-nav-hover",
            index === 0 ? "text-white" : "text-gray-300 hover:text-white"
          )}
        >
          {item}
          <span
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2",
              "h-1 bg-[#1DA1F2] rounded-full",
              "hidden group-hover:block",
              item === "For you" ? "w-[50px]" : "w-[70px]"
            )}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
