"use client";
import Button from "./components/basicComponents/Button/Button";
import Spinner from "./components/basicComponents/Spinner/Spinner";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "./components/basicComponents/TextInput/TextInput";
import { error } from "console";

interface Inputs {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, errors);
  };

  // console.log("errors", errors);
  // console.log("isDirty", isDirty);
  // console.log("isValid", isValid);
  // console.log("isSubmitSuccessful", isSubmitSuccessful);
  // console.log("isSubmitting", isSubmitting);
  console.log(errors);

  return (
    // <div className="flex flex-row">
    //   <div className="light w-1/2 p-5 flex flex-col">
    //     <Button>Defualt Button</Button>
    //     <Button buttonStyle="success">Success Button</Button>
    //     <Button buttonStyle="alterNative">Alternative</Button>
    //     <Button buttonStyle="dark">Dark</Button>
    //     <Button buttonStyle="light">Light</Button>
    //     <Button buttonStyle="error">Error</Button>
    //     <Button buttonStyle="info">Info</Button>
    //     <Button loading={true} loadingText="Loading...">Loading Button</Button>
    //     <Spinner/>
    //     <Spinner color="black" size={4} />
    //     <Spinner color="green" size={6} />
    //     <Spinner color="red" size={8} />
    //     <Spinner color="yellow" size={10} />
    //     <Spinner color="pink" size={4} />
    //     <Spinner color="purple" size={6} />
    //   </div>
    //   <div className="dark w-1/2 bg-gray-600 p-5 flex flex-col">
    //     <Button>Defualt Button</Button>
    //     <Button buttonStyle="success">Success Button</Button>
    //     <Button buttonStyle="alterNative">Alternative</Button>
    //     <Button buttonStyle="dark">Dark</Button>
    //     <Button buttonStyle="light">Light</Button>
    //     <Button buttonStyle="error">Error</Button>
    //     <Button buttonStyle="info">Info</Button>
    //     <Button loading={true} loadingText="Loading...">Loading Button</Button>
    //     <Spinner/>
    //     <Spinner color="black" size={4} />
    //     <Spinner color="green" size={6} />
    //     <Spinner color="red" size={8} />
    //     <Spinner color="yellow" size={10} />
    //     <Spinner color="pink" size={4} />
    //     <Spinner color="purple" size={6} />

    //   </div>
    // </div>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Email"
              labelClassName="font-extrabold text-xl"
              inputClassName="font-extrabold h-16  w-48 text-3xl"
              containerClassName="bg-red-200 h-28"
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
              successMessage="Correct password"
              error={errors.password !== undefined}
              success={isSubmitSuccessful}
              {...field}
            />
          )}
        />
        <br />
        <Button className="w-56" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
