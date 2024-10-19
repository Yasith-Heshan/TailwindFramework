import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import TextArea from "../../basicComponents/TextInput/TextArea";

interface ControlledTextAreaProps {
  name: string;
  label: string;
  control: Control<any>;
  defaultValue?: string;
  errorMessage?: string;
  successMessage?: string;
  rules?: any;
  placeholder?: string;
  rows?: number;
  [x: string]: any; // To accept additional props for TextArea
}

const ControlledTextArea: FC<ControlledTextAreaProps> = ({
  name,
  label,
  control,
  defaultValue = "",
  errorMessage,
  successMessage,
  rules,
  placeholder,
  rows,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error, isDirty } }) => (
        <TextArea
          {...field}
          label={label}
          error={!!error}
          success={isDirty && !error}
          errorMessage={error ? errorMessage : ""}
          successMessage={isDirty && !error ? successMessage : ""}
          placeholder={placeholder}
          rows={rows}
          {...rest}
        />
      )}
    />
  );
};

export default ControlledTextArea;