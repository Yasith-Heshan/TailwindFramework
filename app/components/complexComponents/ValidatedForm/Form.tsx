import React, { FC, ReactNode } from "react";
import {
  useForm,
  SubmitHandler,
  DefaultValues,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodSchema } from "zod";

interface FormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
  defaultValues: DefaultValues<T>;
  children: (methods: any) => ReactNode;
}

export const ValidatedForm = <T extends Record<string, any>>({
  schema,
  onSubmit,
  defaultValues,
  children,
}: FormProps<T>) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({ control, errors, isSubmitSuccessful })}
    </form>
  );
};
