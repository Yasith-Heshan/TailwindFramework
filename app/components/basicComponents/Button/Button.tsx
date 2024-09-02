import React, { Children } from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  buttonStyle?:
    | "default"
    | "alterNative"
    | "dark"
    | "light"
    | "success"
    | "error"
    | "info"
    | "basic";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
};

const defaultClassNames =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
const alterNativeClassNames =
  "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

const darkClassNames =
  "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
const lightClassNames =
  "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
const successClassNames =
  "focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800";

const errorClassNames =
  "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

const infoClassNames =
  "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900";

const basicClassNames = "".split(" ");
const Button: React.FC<Props> = ({
  children,
  className,
  type,
  buttonStyle,
  onClick,
  disabled,
  loading,
  loadingText,
  loadingIcon,
}) => {
  let buttonClassNames =
    buttonStyle === "dark"
      ? darkClassNames
      : buttonStyle === "light"
      ? lightClassNames
      : buttonStyle === "alterNative"
      ? alterNativeClassNames
      : buttonStyle === "success"
      ? successClassNames
      : buttonStyle === "error"
      ? errorClassNames
      : buttonStyle === "info"
      ? infoClassNames
      : defaultClassNames;

  if (className) {
    // add to the front of the array so that the classNames passed in the props will override the default classNames
    buttonClassNames = className + " " + buttonClassNames;
  }

  return (
    <button
      type={type || "button"}
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled || loading || false}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        {loading ? (
          <>
            {loadingIcon ? loadingIcon : <Spinner />}
            {loadingText ? loadingText : "Loading..."}
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </button>
  );
};

export default Button;
