"use client";

import React from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import { SkincareItem } from "./../interface/admin";

const SkincareDetails: React.FC<{
  skincareItem: SkincareItem;
  readOnly?: boolean; 
}> = ({ skincareItem, readOnly = true }) => {
  return (
    <div className="max-w-6xl w-full bg-white rounded-xl">
      <div className="flex justify-center mb-4 mt-4">
        <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
          <Image
            src={skincareItem.image}
            alt={skincareItem.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md border p-6">
        <h2 className="text-titleCrad text-Quartz mb-2">Skincare name</h2>
        <Textarea
          className="max-w-full h-10 text-contentCrad mb-2"
          value={skincareItem.name}
          readOnly={readOnly} 
        />

        <h2 className="text-titleCrad text-Quartz mb-2">Detail</h2>
        <Textarea
          className="max-w-full text-contentCrad"
          value={skincareItem.detail}
          readOnly={readOnly}
          rows={10} 
          
        />
      </div>
    </div>
  );
};

export default SkincareDetails;
