import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const CenterBox: React.FC<Props> = ({ children, className }) => {
  return <div className={`${className} flex justify-center items-center`}>{children}</div>;
};

export default CenterBox;
