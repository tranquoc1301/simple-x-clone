import Link from "next/link";
import Image from "next/image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
export default function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo menu buttons */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* Logo */}
        <Link href={""} className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="icons/logo.svg" alt={"logo"} width={30} height={30} />
        </Link>
        {/* Menu */}
        <ul className="flex flex-col gap-4">
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#181818] rounded-full"
              >
                <Image
                  src={`icons/${item.icon}`}
                  alt={item.name}
                  width={26}
                  height={26}
                />
                <span className="hidden text-xl xxl:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Post Button */}
        <Link
          href={""}
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="post" width={26} height={26} />
        </Link>
        {/* Post Button With Text */}
        <Link
          href={""}
          className="hidden xxl:block bg-white text-black rounded-full font-bold px-24 py-3 mt-2"
        >
          Post
        </Link>
      </div>
      {/* User profile */}
      <div className="mt-6">
        <div className="flex items-center justify-between cursor-pointer hover:bg-[#181818] rounded-full p-3">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 relative rounded-full overflow-hidden">
              <Image
                src="/general/avatar.jpg"
                alt="avatar"
                fill
                className="rounded-full"
              />
            </div>
            <div className="hidden xxl:flex flex-col ml-2">
              <span className="font-bold">William Haudrey</span>
              <span className="text-sm text-text-gray">@William13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
