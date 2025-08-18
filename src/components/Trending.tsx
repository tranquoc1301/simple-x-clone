import { MoreInfoItem } from "./MoreInfo";
import NotInterestedIcon from "public/icons/notinterested.svg";
import MoreInfo from "./MoreInfo";

const MoreInfoList: MoreInfoItem[] = [
  {
    icon: NotInterestedIcon,
    text: "The associated content is not relevant",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is spam",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is abusive or harmful",
  },
  {
    icon: NotInterestedIcon,
    text: "Not interested in this",
  },
  {
    icon: NotInterestedIcon,
    text: "This trend is harmful or spammy",
  },
];

const Trending = () => {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-4 border-[1px] border-border-gray">
      <h1 className="text-xl font-bold">What's happening</h1>
      {/* Trending */}
      <ul className="flex flex-col gap-4">
        <li className="flex flex-col">
          {/* Trending item Header */}
          <div className="flex justify-between items-center">
            <span className="text-text-gray text-sm">Only on X - Trending</span>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>
          <div className="font-bold text-normal-bold">#riyadh</div>
          <span className="text-text-gray text-sm">526K posts</span>
        </li>
        <li className="flex flex-col">
          {/* Trending item Header */}
          <div className="flex justify-between items-center">
            <span className="text-text-gray text-sm">Only on X - Trending</span>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>{" "}
          <div className="font-bold text-normal-bold">#riyadh</div>
          <span className="text-text-gray text-sm">526K posts</span>
        </li>
        <li className="flex flex-col">
          {/* Trending item Header */}
          <div className="flex justify-between items-center">
            <span className="text-text-gray text-sm">Only on X - Trending</span>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>{" "}
          <div className="font-bold text-normal-bold">#riyadh</div>
          <span className="text-text-gray text-sm">526K posts</span>
        </li>
        <li className="flex flex-col">
          {/* Trending item Header */}
          <div className="flex justify-between items-center">
            <span className="text-text-gray text-sm">Only on X - Trending</span>
            <MoreInfo moreInfoList={MoreInfoList} />
          </div>{" "}
          <div className="font-bold text-normal-bold">#riyadh</div>
          <span className="text-text-gray text-sm">526K posts</span>
        </li>
      </ul>
    </div>
  );
};

export default Trending;
