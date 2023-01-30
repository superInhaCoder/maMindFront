import { Button } from "@mantine/core";
import React from "react";
import GoogleLoginComponent from "../components/GoogleLogin";

const LoginPage = () => {
  return (
    <>
      <GoogleLoginComponent />
      <p className="text-3xl font-bold underline">Hello world!</p>
    </>
  );
};

export default LoginPage;
