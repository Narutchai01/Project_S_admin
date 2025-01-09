"use client";
import React, { FC } from "react";
import { Input, Button } from "@nextui-org/react";
import { Search } from "lucide-react";

interface HeaderProps {
  category: string;
  itemName: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { category, itemName } = props;
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 w-full items-center">
        <h1 className=" text-heading text-Quartz">
          {itemName ? itemName : category}
        </h1>
        <div className="w-full">
          <Input
            labelPlacement="outside"
            placeholder="Search"
            radius="full"
            startContent={<Search />}
            type="text"
          />
        </div>
        <div className="flex justify-center">
          <Button
            className="bg-Bittersweet text-white w-1/3 items-center"
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
