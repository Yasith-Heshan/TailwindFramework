import React from "react";
import Section from "./Section";

export type TableData = {
  name: string;
  age: number;
  phoneNumber: number;
  address: string;
};

const page = () => {
  return (
    <div className="h-[calc(100vh-64px)] ">
      <Section />
    </div>
  );
};

export default page;
