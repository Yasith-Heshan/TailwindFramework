import React, { ReactNode, Children, isValidElement, cloneElement } from "react";
import Button from "../../basicComponents/Button/Button";

type ButtonGroupProps = {
  children: React.ReactNode;
};

// Type guard to check if a React element is a Button component
const isButtonElement = (
  element: ReactNode
): element is React.ReactElement<typeof Button> => {
  return isValidElement(element) && element.type === Button;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  const totalChildren = Children.count(children);

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {Children.map(children, (child, index) => {
        if (isButtonElement(child)) {
          // Use ComponentProps to ensure proper typing of props passed to cloneElement
          return cloneElement(child, {
            grouped: true,
            first: index === 0,
            last: index === totalChildren - 1,
          } as React.Attributes & Partial<React.ComponentProps<typeof Button>>);
        }
        return child;
      })}
    </div>
  );
};

export default ButtonGroup;
