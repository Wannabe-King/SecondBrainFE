import { ReactElement } from "react";

type Variant = "primary" | "secondary";

export interface ButtonProps {
  variant: Variant;
  size: "sm" | "md" | "lg" | "full";
  text: String;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

const wSize = {
  sm: "w-32",
  md: "w-48",
  lg: "w-72",
  full: "w-full",
};

const variantStyle = {
  primary: "bg-purple-500 ",
  secondary: "bg-purple-100  text-purple-500",
};

const defalutStyles =
  "text-lg rounded-md h-12 justify-center flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${
        wSize[props.size]
      } ${defalutStyles} ${props.loading ? "opacity-30" : "cursor-pointer"} `}
      onClick={props.onClick}
      disabled={props.loading}
    >
      <div className="px-1">{props.startIcon}</div>
      <p className="px-1">{props.text}</p>
      {props.endIcon}
    </button>
  );
};
