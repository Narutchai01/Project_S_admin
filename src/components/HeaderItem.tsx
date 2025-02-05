"use client";

import React, { FC } from "react";
import { IHeaderItemsProps } from "@/interface/admin";
import { Button } from "@nextui-org/react";
import { FilePenLine } from "lucide-react";


const HeaderItem: FC<IHeaderItemsProps> = (props) => {
  const { itemName, onOpen } = props;
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className="text-heading text-Quartz">{itemName}</h1>
      <div>
        <Button
          className="bg-Bittersweet text-white items-center w-full"
          radius="full"
          onPress={onOpen}
        >
          <FilePenLine />
        </Button>
      </div>
    </div>
  );
};

export default HeaderItem;
