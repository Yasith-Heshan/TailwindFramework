import React from "react";
import Button from "../components/basicComponents/Button/Button";
import Spinner from "../components/basicComponents/Spinner/Spinner";

const ButtonsAndSpinners = () => {
  return (
    <div className="flex flex-row">
      <div className="light w-1/2 p-5 flex flex-col">
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
        <Spinner />
        <Spinner color="black" size={4} />
        <Spinner color="green" size={6} />
        <Spinner color="red" size={8} />
        <Spinner color="yellow" size={10} />
        <Spinner color="pink" size={4} />
        <Spinner color="purple" size={6} />
      </div>
      <div className="dark w-1/2 bg-gray-600 p-5 flex flex-col">
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
        <Spinner />
        <Spinner color="black" size={4} />
        <Spinner color="green" size={6} />
        <Spinner color="red" size={8} />
        <Spinner color="yellow" size={10} />
        <Spinner color="pink" size={4} />
        <Spinner color="purple" size={6} />
      </div>
    </div>
  );
};

export default ButtonsAndSpinners;
