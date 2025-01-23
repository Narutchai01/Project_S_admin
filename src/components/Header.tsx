"use client";
import React, { FC} from "react";
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  category: string;
  setSearch?: (search: string) => void;
}

const Header: FC<HeaderProps> = (props) => {
  const { category ,setSearch } = props;

  return (
    <>
      <div className=" flex flex-row w-full justify-between items-center container mx-auto px-6">
        <h1 className=" text-heading text-Quartz">{category}</h1>
        <div className=" w-full container mx-auto px-6">
          {category === "skincare" && (
            <Input
              labelPlacement="outside"
              placeholder="Search"
              radius="full"
              startContent={<Search />}
              type="text"
              onChange={ (e) => setSearch && setSearch(e.target.value)}
            />
          )}
        </div>
        <div className="">
          <Link id={`add-${category}`} href={`/dashboard/${category}/add`}>
            <Button
              className="bg-Bittersweet text-white items-center w-full"
              radius="full"
            >
              Add {category}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
