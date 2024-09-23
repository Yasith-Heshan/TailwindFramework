import React from "react";
import cn from "classnames";

type TypographyProps = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  color?: string; // Optional color prop
  children: React.ReactNode;
  className?: string; // Additional class names
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  color,
  children,
  className,
}) => {
  let baseClass = "";

  switch (variant) {
    case "h1":
      baseClass = "text-4xl font-bold dark:text-white";
      return <h1 className={cn(baseClass, className)}>{children}</h1>;
    case "h2":
      baseClass = "text-3xl font-semibold dark:text-white";
      return <h2 className={cn(baseClass, className)}>{children}</h2>;
    case "h3":
      baseClass = "text-2xl font-medium dark:text-white";
      return <h3 className={cn(baseClass, className)}>{children}</h3>;
    case "h4":
      baseClass = "text-xl font-normal dark:text-white";
      return <h4 className={cn(baseClass, className)}>{children}</h4>;
    case "h5":
      baseClass = "text-lg font-normal dark:text-white";
      return <h5 className={cn(baseClass, className)}>{children}</h5>;
    case "h6":
      baseClass = "text-base font-normal dark:text-white";
      return <h6 className={cn(baseClass, className)}>{children}</h6>;
    case "subtitle1":
      baseClass = "text-lg font-medium dark:text-gray-300";
      return <span className={cn(baseClass, className)}>{children}</span>;
    case "subtitle2":
      baseClass = "text-base font-normal dark:text-gray-300";
      return <span className={cn(baseClass, className)}>{children}</span>;
    case "body1":
      baseClass = "text-base dark:text-gray-300";
      return <span className={cn(baseClass, className)}>{children}</span>;
    case "body2":
      baseClass = "text-sm dark:text-gray-400";
      return <span className={cn(baseClass, className)}>{children}</span>;
    case "caption":
      baseClass = "text-xs text-gray-500 dark:text-gray-400";
      return <span className={cn(baseClass, className)}>{children}</span>;
    case "overline":
      baseClass =
        "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400";
      return <span className={cn(baseClass, className)}>{children}</span>;
    default:
      return <span>{children}</span>; // Handle unknown variants gracefully
  }
};

export default Typography;
