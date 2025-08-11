import Link from "next/link";

const navItems = ["For you", "Following"];

const NavBar = () => {
  return (
    <nav className="flex justify-between text-white font-semibold border-b border-border-gray">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href="/"
          className={`relative flex-1 px-6 py-4 flex items-center justify-center text-base transition-colors duration-100 group ${
            index === 0 ? "text-white" : "text-gray-300 hover:text-white"
          } hover:bg-nav-hover`}
        >
          {item}
          <span
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#1DA1F2] rounded-full hidden group-hover:block ${
              item === "For you" ? "w-[50px]" : "w-[70px]"
            }`}
          ></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
