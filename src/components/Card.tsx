import { ShareIcon } from "../assets/shareIcon";
import { Trash } from "../assets/trash";
import { Article } from "../assets/article";

type ContentType = "youtube" | "twitter" | "article";

export interface CardProps {
  title: string;
  contentLink: string;
  type: ContentType;
}

function extractYouTubeVideoID(url: string): string {
  const regex =
    /(?:youtube\.com\/(?:.*v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
}

export const Card = (props: CardProps) => {
  return (
    <div className="rounded-md bg-white text-black border border-slate-100 shadow-md p-3 w-80 min-h-50 max-h-180">
      <div className="flex justify-between  items-center mb-5">
        <div className="flex text-xl font-medium items-center">
          <Article />
          {props.title}
        </div>
        <div className="flex">
          <ShareIcon />
          <Trash />
        </div>
      </div>
      <div>
        {props.type === "youtube" && (
          <iframe
            className="w-full aspect-video my-3 rounded-md"
            src={`https://www.youtube.com/embed/${extractYouTubeVideoID(
              props.contentLink
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {props.type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a
              href={props.contentLink.replace("x.com", "twitter.com")}
              target="_blank"
            ></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
