"use client";
import { addSkincare } from "@/serverAction/server_action";
import { Button, Input } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FormAddSkincare = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl">
      <div className="flex justify-center mb-4 mt-4">
        <div className="w-[350px] h-[360px] shadow-xl flex justify-center items-center rounded-xl">
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              alt="skincare"
              width={350}
              height={360}
            />
          ) : (
            <ImagePlus size={100} color="#000" />
          )}
        </div>
      </div>
      <div></div>
      <form action={addSkincare} className="bg-white rounded-xl shadow-md border p-6">
        <Input
          placeholder="upload image"
          type="file"
          name="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(file);
            }
          }}
        />
        <h2 className="text-titleCrad text-Quartz mb-2">Skincare name</h2>
        <Input name="name" />

        <h2 className="text-titleCrad text-Quartz mb-2">Detail</h2>
        <Input name="description" />

        <Button type="submit" className="bg-Bittersweet font-bold text-white">
            Add Skincare
        </Button>
      </form>
    </div>
  );
};

export default FormAddSkincare;
