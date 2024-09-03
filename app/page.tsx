"use client";
import Button from "./components/basicComponents/Button/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./components/basicComponents/TextInput/TextInput";

interface Inputs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
  church_name: string;
  church_address: string;
}

const schema = z
  .object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .refine((data) => {
        return /[A-Z]/.test(data);
      }, "Password must contain at least one uppercase letter.")
      .refine((data) => {
        return /[a-z]/.test(data);
      }, "Password must contain at least one lowercase letter.")
      .refine((data) => {
        return /\d/.test(data);
      }, "Password must contain at least one number.")
      .refine((data) => {
        return /[^A-Za-z0-9]/.test(data);
      }, "Password must contain at least one special character."),
    re_password: z.string().min(8),
    church_name: z.string().min(3),
    church_address: z.string().min(3),
  })
  .refine(
    (data) => {
      return data.password === data.re_password;
    },
    { message: "Passwords do not match.", path: ["re_password"] }
  );

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
      church_name: "",
      church_address: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, errors);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextInput
              label="First Name"
              errorMessage={errors.first_name?.message}
              success={isSubmitSuccessful}
              successMessage="Correct first name"
              placeholder="First Name"
              error={errors.first_name !== undefined}
              {...field}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Last Name"
              errorMessage={errors.last_name?.message}
              success={isSubmitSuccessful}
              successMessage="Correct last name"
              placeholder="Last Name"
              error={errors.last_name !== undefined}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Email"
              errorMessage={errors.email?.message}
              success={isSubmitSuccessful}
              successMessage="Correct email"
              placeholder="Email"
              error={errors.email !== undefined}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Password"
              placeholder="Password"
              errorMessage={errors.password?.message}
              successMessage="Valid password"
              error={errors.password !== undefined}
              success={isSubmitSuccessful}
              {...field}
            />
          )}
        />
        <Controller
          name="re_password"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Re-Password"
              placeholder="Re-Password"
              errorMessage={errors.re_password?.message}
              successMessage="Valid password"
              error={errors.re_password !== undefined}
              success={isSubmitSuccessful}
              {...field}
            />
          )}
        />
        <Controller
          name="church_name"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Church Name"
              placeholder="Church Name"
              errorMessage={errors.church_name?.message}
              successMessage="Correct church name"
              error={errors.church_name !== undefined}
              success={isSubmitSuccessful}
              {...field}
            />
          )}
        />
        <Controller
          name="church_address"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Church Address"
              placeholder="Church Address"
              errorMessage={errors.church_address?.message}
              successMessage="Correct church address"
              error={errors.church_address !== undefined}
              success={isSubmitSuccessful}
              {...field}
            />
          )}
        />
        <br />
        <Button className="w-36" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
