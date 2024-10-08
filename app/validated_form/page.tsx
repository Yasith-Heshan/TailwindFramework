"use client";
import React from "react";
import { z } from "zod";
import Button from "../components/basicComponents/Button/Button";
import CenterBox from "../components/basicComponents/CenterBox/CenterBox";
import Container from "../components/basicComponents/Container/Container";
import ControlledTextInput from "../components/complexComponents/ControlledTextField/ControlledTextInput";
import { ValidatedForm } from "../components/complexComponents/ValidatedForm/Form";
import ControlledDropDown from "../components/complexComponents/ControlledDropDown/ControlledDropDown";

interface Inputs {
  email: string;
  password: string;
  gender: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
});

export default function App() {
  const defaultValues: Inputs = {
    email: "",
    password: "",
    gender: "",
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <Container>
      <ValidatedForm<Inputs>
        schema={schema}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        {({ control, errors, isSubmitSuccessful }) => (
          <>
            <ControlledTextInput
              name="email"
              label="Email"
              control={control}
              errorMessage={errors.email?.message}
              successMessage="Correct email"
            />

            <ControlledTextInput
              name="password"
              label="Password"
              control={control}
              errorMessage={errors.password?.message}
              successMessage="Correct password"
            />

            <ControlledDropDown
              name="gender"
              label="Gender"
              control={control}
              errorMessage={errors.gender?.message}
              success={isSubmitSuccessful}
              options={[
                { value: "", label: "" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
            <CenterBox>
              <Button className="w-56" type="submit">
                Submit
              </Button>
            </CenterBox>
          </>
        )}
      </ValidatedForm>
    </Container>
  );
}
