"use client";
import { addSkincare } from "@/serverAction/server_action";
import { Button, Input } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const FormAddSkincare = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl p-6">
      <form action={addSkincare}>
        <div className="flex justify-center mb-4">
          <div className="w-[350px] h-[360px] shadow-xl flex justify-center items-center rounded-xl overflow-hidden">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt="skincare"
                width={350}
                height={360}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <ImagePlus size={100} color="#000" />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <Input
            placeholder="upload image"
            type="file"
            name="file"
            variant="bordered"
            className="max-w-[220px]"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImage(file);
              }
            }}
          />
        </div>
        <div className="bg-white rounded-xl shadow-md border p-6 mt-4">
          <h2 className="text-titleCrad text-Quartz mb-2">
            Skincare name
          </h2>
          <Input name="name" />
          <h2 className="text-titleCrad text-Quartz mt-4 mb-2">Detail</h2>
          <Input name="description" />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" className="bg-Bittersweet font-bold text-white">
            Add Skincare
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddSkincare;
