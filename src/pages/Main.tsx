import { CreateContentModal } from "../components/createContentModal";
import { Sidebar } from "../components/Sidebar";
import { Dashboard } from "../components/Dashboard";
import { useState } from "react";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard onClick={() => setIsOpen(true)} />
      <CreateContentModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
};
