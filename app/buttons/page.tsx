import React from "react";
import Button from "../components/basicComponents/Button/Button";
import Container from "../components/basicComponents/Container/Container";

const ButtonsAndSpinners = () => {
  return (
    <Container className="flex flex-row">
      <Container className="light w-1/2 p-5 flex flex-col">
        <Button>Defualt Button</Button>
        <Button buttonStyle="success">Success Button</Button>
        <Button buttonStyle="alterNative">Alternative</Button>
        <Button buttonStyle="dark">Dark</Button>
        <Button buttonStyle="light">Light</Button>
        <Button buttonStyle="error">Error</Button>
        <Button buttonStyle="info">Info</Button>
        <Button buttonStyle="light" loading={true} loadingText="Loading...">
          Loading Button
        </Button>
      </Container>
      <Container className="dark w-1/2 bg-gray-600 p-5 flex flex-col">
        <Button>Defualt Button</Button>
        <Button buttonStyle="success">Success Button</Button>
        <Button buttonStyle="alterNative">Alternative</Button>
        <Button buttonStyle="dark">Dark</Button>
        <Button buttonStyle="light">Light</Button>
        <Button buttonStyle="error">Error</Button>
        <Button buttonStyle="info">Info</Button>
        <Button buttonStyle="default" loading={true} loadingText="Loading...">
          Loading Button
        </Button>
      </Container>
    </Container>
  );
};

export default ButtonsAndSpinners;
