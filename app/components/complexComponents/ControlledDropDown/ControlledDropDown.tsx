import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import DropDown from "../../basicComponents/DropDown/DropDown";

interface ControlledDropDownProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: string;
  errorMessage?: string;
  successMessage?: string;
  rules?: any;
  options: Array<{ value: string; label: string }>;
  [x: string]: any; // To accept additional props for DropDown
}

const ControlledDropDown: FC<ControlledDropDownProps> = ({
  name,
  label,
  control,
  defaultValue = "",
  errorMessage,
  successMessage,
  rules,
  options,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error, isDirty } }) => (
        <DropDown
          {...field}
          label={label}
          error={!!error}
          success={isDirty && !error}
          errorMessage={error ? errorMessage : ""}
          successMessage={isDirty && !error ? successMessage : ""}
          options={options}
          {...rest}
        />
      )}
    />
  );
};

export default ControlledDropDown;
