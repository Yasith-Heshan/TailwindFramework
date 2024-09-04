import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import TextInput from "../../basicComponents/TextInput/TextInput";

interface ControlledTextFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: string;
  errorMessage?: string;
  successMessage?: string;
  rules?: any;
  placeholder?: string;
  [x: string]: any; // To accept additional props for TextInput
}

const ControlledTextInput: FC<ControlledTextFieldProps> = ({
  name,
  label,
  control,
  defaultValue = "",
  errorMessage,
  successMessage,
  rules,
  placeholder,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error, isDirty } }) => (
        <TextInput
          {...field}
          label={label}
          error={!!error}
          success={isDirty && !error}
          errorMessage={error ? errorMessage : ""}
          successMessage={isDirty && !error ? successMessage : ""}
          placeholder={placeholder}
          {...rest}
        />
      )}
    />
  );
};

export default ControlledTextInput;
