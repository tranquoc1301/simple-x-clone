"use client";

import { ReactElement, SVGProps, useState, useEffect, useRef } from "react";
import { Image } from "@imagekit/next";
import { cn } from "@/utils/cn";

export interface MoreInfoItem {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  text: string;
}

const MoreInfoMenu = ({ moreInfoList }: { moreInfoList: MoreInfoItem[] }) => {
  return (
    <div
      className={cn(
        "absolute top-0 right-0 bg-black popup-menu",
        "min-w-[250px] max-w-[400px] z-[100] overflow-hidden"
      )}
    >
      {moreInfoList.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={cn(
              "flex items-center gap-2 py-3 px-4 cursor-pointer",
              "hover:bg-nav-hover"
            )}
          >
            <Icon width={20} height={20} />
            <span className="text-white text-normal font-bold text-nowrap">
              {item.text}
            </span>
          </div>
        );
      })}
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
      <div className="cursor-pointer w-4 h-4 " onClick={toggleMenu}>
        <Image
          src="icons/infoMore.svg"
          alt="info"
          width={20}
          height={20}
          className="hover:scale-120 transition-all duration-200"
        />
      </div>
      {isMenuOpen && <MoreInfoMenu moreInfoList={moreInfoList} />}
    </div>
  );
};

export default MoreInfo;
