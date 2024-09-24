import React from "react";
import Pagination from "../components/ComplexComponents/Pagination/Pagination";
import Container from "../components/basicComponents/Container/Container";

const page = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] ">
      <div className="h-5/6 ">
        <Container>Content</Container>
      </div>
      <div className="h-1/6">
        <Pagination />
      </div>
    </div>
  );
};

export default page;
