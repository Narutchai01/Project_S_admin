"use client";

import React, { FC } from "react";
import { IHeaderItems } from "@/interface/admin";
import { Button } from "@nextui-org/react";
import { FilePenLine } from "lucide-react";
import EditDetail from "./editDetail";

const HeaderItem: FC<IHeaderItems> = (props) => {
  const { itemName,setIsOpen } = props;
  return (
    <div className="flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className="text-heading text-Quartz">{itemName}</h1>
      <div>
        <Button
          className="bg-Bittersweet text-white items-center w-full"
          radius="full"
          onPress={() => setIsOpen(true)}
        >
          <FilePenLine />
        </Button>
      </div>
      <EditDetail />
    </div>
  );
};

export default HeaderItem;
