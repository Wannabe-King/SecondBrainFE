import { PlusIcon } from "../assets/plusIcon";
import { ShareIcon } from "../assets/shareIcon";
import { useContent } from "../hooks/useContent";
import { Button } from "./Button";
import { Card } from "./Card";
interface DashboardProps {
  onClick: () => void;
}

export const Dashboard = (onClick: DashboardProps) => {
  const contents = useContent();
  return (
    <div className="w-full p-5 bg-gray-200">
      <div className="flex gap-4 mb-4 justify-end">
        <Button
          variant="secondary"
          size="md"
          text="Share Brain"
          onClick={() => console.log("Button Clicked")}
          startIcon={<ShareIcon />}
        />
        <Button
          variant="primary"
          size="md"
          text="Add Content"
          onClick={onClick.onClick}
          startIcon={<PlusIcon />}
        />
      </div>

      <div className="flex flex-wrap items-start gap-4">
        {contents.map(({ title, link, type }) => (
          <Card title={title} type={type} contentLink={link} />
        ))}
      </div>
    </div>
  );
};
