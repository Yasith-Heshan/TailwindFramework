import Container from "@/app/components/basicComponents/Container/Container";
import Typography from "@/app/components/basicComponents/Typography/Typography";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-2">
      <Container>
        <Typography variant="h1">Test h1</Typography>
        <Typography variant="h2">Test h2</Typography>
        <Typography variant="h3">Test h3</Typography>
        <Typography variant="h4">Test h4</Typography>
        <Typography variant="h5">Test h5</Typography>
        <Typography variant="h6">Test h6</Typography>
        <Typography variant="subtitle1">Test subtitle1</Typography>
        <Typography variant="subtitle2">Test subtitle2</Typography>
        <Typography variant="body1">Test body1</Typography>
        <Typography variant="body2">Test body2</Typography>
      </Container>
      <Container className="dark bg-gray-600">
        <Typography variant="h1">Test h1</Typography>
        <Typography variant="h2">Test h2</Typography>
        <Typography variant="h3">Test h3</Typography>
        <Typography variant="h4">Test h4</Typography>
        <Typography variant="h5">Test h5</Typography>
        <Typography variant="h6">Test h6</Typography>
        <Typography variant="subtitle1">Test subtitle1</Typography>
        <Typography variant="subtitle2">Test subtitle2</Typography>
        <Typography variant="body1">Test body1</Typography>
        <Typography variant="body2">Test body2</Typography>
      </Container>
    </div>
  );
};

export default page;
