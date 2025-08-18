"use client";

import { ReactElement, SVGProps, useState, useEffect, useRef } from "react";
import { Image } from "@imagekit/next";
import NextImage from "next/image";

export interface MoreInfoItem {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  text: string;
}

const MoreInfoMenu = ({ moreInfoList }: { moreInfoList: MoreInfoItem[] }) => {
  return (
    <div className="absolute top-0 right-0 bg-black popup-menu w-[250px] z-[100] overflow-hidden">
      {moreInfoList.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 py-3 px-4 cursor-pointer hover:bg-nav-hover"
        >
          <NextImage src={item.icon} alt="icon" width={20} height={20} />
          <span className="text-white text-normal font-bold">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

const MoreInfo = ({ moreInfoList }: { moreInfoList: MoreInfoItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="cursor-pointer w-4 h-4 relative" onClick={toggleMenu}>
        <Image src="icons/infoMore.svg" alt="info" width={20} height={20} />
      </div>
      {isMenuOpen && <MoreInfoMenu moreInfoList={moreInfoList} />}
    </div>
  );
};

export default MoreInfo;
