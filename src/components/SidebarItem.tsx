import { ReactElement } from "react";

export interface SidebarInput {
  icon: ReactElement;
  title: string;
}

export const SidebarItem = (props: SidebarInput) => {
  return (
    <div className="flex text-stone-600  items-center my-3 mx-6 px-2 py-3 rounded-md hover:bg-gray-400 font-medium">
      <div className="w-10">{props.icon}</div>
      {props.title}
    </div>
  );
};
