import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`${className} py-5 px-10`}>{children}</div>;
};

export default Container;
