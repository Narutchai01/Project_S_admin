"use client";

import React from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import { AcneItem } from "./../../interface/admin";

const SkincareDetails: React.FC<{
    acneItem: AcneItem;
  readOnly?: boolean;
  onChange?: (key: keyof AcneItem, value: string) => void;
}> = ({ acneItem, readOnly = true, onChange }) => {
  const handleChange = (key: keyof AcneItem, value: string) => {
    if (onChange) onChange(key, value);
  };

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl">
      <div className="flex justify-center mb-4 mt-4">
        <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
          {acneItem.image ? (
            <Image
              src={acneItem.image}
              alt={acneItem.name}
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
          value={acneItem.name || ""}
          readOnly={readOnly}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SkincareDetails;
