import Container from "@/app/components/basicComponents/Container/Container";
import Spinner from "@/app/components/basicComponents/Spinner/Spinner";
import React from "react";

const page = () => {
  return (
    <Container className="flex flex-row">
      <Container className="light w-1/2 p-5 flex flex-col">
        <Spinner />
        <Spinner color="black" size={4} />
        <Spinner color="green" size={6} />
        <Spinner color="red" size={8} />
        <Spinner color="yellow" size={10} />
        <Spinner color="pink" size={4} />
        <Spinner color="purple" size={6} />
      </Container>
      <Container className="dark w-1/2 bg-gray-600 p-5 flex flex-col">
        <Spinner />
        <Spinner color="black" size={4} />
        <Spinner color="green" size={6} />
        <Spinner color="red" size={8} />
        <Spinner color="yellow" size={10} />
        <Spinner color="pink" size={4} />
        <Spinner color="purple" size={6} />
      </Container>
    </Container>
  );
};

export default page;
