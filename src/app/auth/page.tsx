"use client";

import { handlerLogin } from "@/serverAction/server_action";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Logo from "../../../public/ucarelogo.svg";
import Image from "next/image";

const Authpage = () => {
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    try {
      const formElement = document.querySelector("form");
      const formData = new FormData(formElement as HTMLFormElement);
      const response = await handlerLogin(formData);
      console.log(response);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-5 h-screen min-w-96">
        <Image src={Logo} alt="logo" />
        <form
          // action={handlerLogin}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-y-10 w-full shadow-2xl rounded-3xl p-10"
        >
          <Input
            id="email"
            label="Email"
            type="text"
            name="email"
            radius="full"
            className="bg-inherit"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            name="password"
            radius="full"
          />
          <Button
            id="login"
            type="submit"
            radius="full"
            className=" bg-Bittersweet font-bold text-white"
            size="lg"
            variant="shadow"
          >
            Login
          </Button>
        </form>
        {isError && (
          <div className="text-red-500 font-bold">
            Invalid Email or Password
          </div>
        )}
      </div>
    </>
  );
};

export default Authpage;
