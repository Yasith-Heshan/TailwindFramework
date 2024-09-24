"use client";
import React from "react";
import PaginationProvider from "../components/complexComponents/Pagination/PaginationProvider";
import Container from "../components/basicComponents/Container/Container";
import CenterBox from "../components/basicComponents/CenterBox/CenterBox";
import TableComponent from "./TableComponent";
import { sampleData } from "./sampledata";

const Section = () => {
  const [start, setStart] = React.useState(0);
  const entriesPerPage = 10;
  console.log("start", start);

  return (
    <div className="h-full">
      <PaginationProvider
        entriesPerPage={entriesPerPage}
        start={start}
        setStart={setStart}
        maximum={sampleData.length}
      >
        <Container className="">
          <CenterBox>
            <TableComponent
              data={sampleData.slice(start, start + entriesPerPage)}
              entriesPerPage={entriesPerPage}
            />
          </CenterBox>
        </Container>
      </PaginationProvider>
    </div>
  );
};

export default Section;
