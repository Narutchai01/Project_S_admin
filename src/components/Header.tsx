"use client";
import React, { FC } from "react";
import { Input, Button } from "@nextui-org/react";
import { Search } from "lucide-react";

interface HeaderProps {
  category: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { category } = props;
  return (
    <>
      <div className=" flex flex-row w-full justify-between items-center container mx-auto px-6">
        <h1 className=" text-heading text-Quartz">{category}</h1>
        <div className=" w-full container mx-auto px-6">
          <Input
            labelPlacement="outside"
            placeholder="Search"
            radius="full"
            startContent={<Search />}
            type="text"
          />
        </div>
        <div className="">
          <Button
            className="bg-Bittersweet text-white items-center w-full"
            radius="full"
          >
            Add {category}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
