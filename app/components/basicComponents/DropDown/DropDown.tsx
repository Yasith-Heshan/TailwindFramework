import React, { forwardRef, InputHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}

type Props = {
  name: string;
  label: string;
  error?: boolean;
  success?: boolean;
  errorMessage?: string;
  successMessage?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const labelErrorClassName =
  "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";

const labelSuccessClassName =
  "block mb-2 text-sm font-medium text-green-700 dark:text-green-500";

const labelDefaultClassName =
  "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

const inputSuccessClassName =
  "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500";

const inputErrorClassName =
  "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

const inputDefaultClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const DropDown = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      label,
      error,
      success,
      errorMessage,
      successMessage,
      labelClassName,
      inputClassName,
      containerClassName,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    let inputBoxClassName = error
      ? inputErrorClassName
      : success
      ? inputSuccessClassName
      : inputDefaultClassName;

    let labelBoxClassName = error
      ? labelErrorClassName
      : success
      ? labelSuccessClassName
      : labelDefaultClassName;

    labelBoxClassName = labelClassName
      ? labelClassName + " " + labelBoxClassName
      : labelBoxClassName;
    inputBoxClassName = inputClassName
      ? inputClassName + " " + inputBoxClassName
      : inputBoxClassName;

    return (
      <div className={`${containerClassName} mb-6 h-24`}>
        <label htmlFor={name} className={labelBoxClassName}>
          Select an option
        </label>
        <select
          {...rest}
          id={name}
          className={inputBoxClassName}
          onChange={onChange}
          value={value}
        >
          {rest.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Error!</span> {errorMessage}
          </p>
        ) : (
          success && (
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Great!</span> {successMessage}
            </p>
          )
        )}
      </div>
    );
  }
);

DropDown.displayName = "DropDown";
export default DropDown;
