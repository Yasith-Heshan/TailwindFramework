"use client";
import React, { use } from "react";
import { TableData } from "./page";

type Props = {
  entriesPerPage: number;
  data: TableData[];
};

const TableComponent: React.FC<Props> = ({ data }) => {
  const entriesPerPage = 10;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.phoneNumber}</td>
              <td>{record.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
