import { Article } from "../assets/article";
import { BrainLogo } from "../assets/brainLogo";
import { LinkIcon } from "../assets/linksIcon";
import { TagIcon } from "../assets/tagIcon";
import { TwitterIcon } from "../assets/twitter";
import { YoutubeIcon } from "../assets/youtube";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="left-0 top-0 border-gray-400 border md:w-100 h-screen m-0 ">
      <div className="my-5 mx-3 flex items-center text-3xl text-stone-300 font-bold">
        <BrainLogo />
        Second Brain
      </div>
      <SidebarItem icon={<TwitterIcon />} title="Tweets" />
      <SidebarItem icon={<YoutubeIcon />} title="Videos" />
      <SidebarItem icon={<Article />} title="Documents" />
      <SidebarItem icon={<LinkIcon />} title="Links" />
      <SidebarItem icon={<TagIcon />} title="Tags" />
    </div>
  );
};
