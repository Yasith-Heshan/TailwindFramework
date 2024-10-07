"use client";
import React from "react";
import Button from "../Button/Button";
import Model from "./Model";
import CenterBox from "../CenterBox/CenterBox";

const ModelProvider = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <CenterBox>
        <Model
          showModal={showModal}
          setShowModal={setShowModal}
          actionButtons={[
            <Button key="1" onClick={() => setShowModal(false)}>
              Save
            </Button>,
            <Button
              key="2"
              buttonStyle="alterNative"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>,
          ]}
        >
          <div>
            <h1 className="text-2xl font-bold">Model Content</h1>
            <p className="text-gray-600">
              This is a model content. You can add any content here.
            </p>
          </div>
        </Model>
      </CenterBox>
    </div>
  );
};

export default ModelProvider;
