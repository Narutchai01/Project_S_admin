"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import { addAcne } from "@/serverAction/acne";

const FormAddAcne = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="max-w-6xl w-full bg-white rounded-xl p-6">
      <form action={addAcne}>
        <div className="flex justify-center mb-4 mt-4">
          <div className="w-[350px] h-[360px] shadow-xl flex justify-center items-center rounded-xl overflow-hidden">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt="acne"
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
        <div className="flex justify-center mt-4">
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
            Acne name
          </h2>
          <Input name="name" />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" className="bg-Bittersweet font-bold text-white">
            Add Acne
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddAcne;