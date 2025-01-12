"use client";

import React, { FC } from "react";
import { IHeaderItems } from "@/interface/admin";
import EditDetail from "@/components/editDetail";

const HeaderItem: FC<IHeaderItems> = ({ itemName, skincareItem }) => {
  console.log("HeaderItem Received SkincareItem:", skincareItem);

  return (
    <div className="flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className="text-heading text-Quartz">{itemName}</h1>
      <div>
        <EditDetail skincareItem={skincareItem} />
      </div>
    </div>
  );
};

export default HeaderItem;
