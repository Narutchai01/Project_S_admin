"use client";

import React from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import { SkincareItem } from "./../interface/admin";

const SkincareDetails: React.FC<{
  skincareItem: SkincareItem;
  readOnly?: boolean;
  onChange?: (key: keyof SkincareItem, value: string) => void;
}> = ({ skincareItem, readOnly = true, onChange }) => {
  const handleChange = (key: keyof SkincareItem, value: string) => {
    if (onChange) onChange(key, value);
  };

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl">
      <div className="flex justify-center mb-4 mt-4">
        <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
          {skincareItem.image ? (
            <Image
              src={skincareItem.image}
              alt={skincareItem.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              No Image Available
            </div>
          )}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md border p-6">
        <h2 className="text-titleCrad text-Quartz mb-2">Skincare name</h2>
        <Textarea
          className="max-w-full h-10 text-contentCrad mb-2"
          value={skincareItem.name || ""}
          readOnly={readOnly}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <h2 className="text-titleCrad text-Quartz mb-2">Detail</h2>
        <Textarea
          className="max-w-full text-contentCrad"
          value={skincareItem.description || ""}
          readOnly={readOnly}
          rows={10}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SkincareDetails;
