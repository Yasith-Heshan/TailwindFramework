"use client";
import React from "react";
import Pagination from "./Pagination";

type Props = {
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  entriesPerPage: number;
  maximum: number;
  children: React.ReactNode;
};

const PaginationProvider: React.FC<Props> = ({
  start,
  setStart,
  entriesPerPage,
  children,
  maximum,
}) => {
  const handleNext = () => {
    if (start + entriesPerPage >= maximum) return;
    setStart((prev) => prev + entriesPerPage);
  };
  const handlePrev = () => {
    if (start <= 0) return;
    setStart((prev) => prev - entriesPerPage);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-5/6">{children}</div>
      <div className="h-1/6">
        <Pagination
          start={start + 1}
          end={start + entriesPerPage}
          maximum={maximum}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default PaginationProvider;
