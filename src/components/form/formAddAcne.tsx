"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import { addAcne } from "@/serverAction/acne";
import AlertAddItem from "@/components/alert/alertAddItem";

const FormAddAcne = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    try {
      await addAcne(formData);
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding acne:", error);
    }
  };

  const handleSuccessClose = () => {
    setSuccessModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="max-w-6xl w-full rounded-xl">
          <div className="flex justify-center mb-4 mt-4">
            <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
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
                <div className="flex justify-center items-center h-full">
                  <ImagePlus size={100} color="#000" />
                </div>
              )}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleFormSubmit(formData);
            }}
            className="p-2 flex justify-center flex-col items-center"
          >
            <Input
              placeholder="upload image"
              type="file"
              name="file"
              variant="bordered"
              className="max-w-[220px] mb-6"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImage(file);
                }
              }}
            />
            <div className="bg-white rounded-xl shadow-md border w-full p-6 flex flex-col">
              <h2 className="text-titleCrad text-Quartz mb-2">Acne</h2>
              <Textarea
                className="max-w-full h-10 text-contentCrad mb-2"
                placeholder="Acne Name"
                name="name"
                readOnly={false}
              />
            </div>
            <Button id="add-acne" type="submit" className="bg-Bittersweet font-bold text-white mt-6">
              Add Acne
            </Button>
          </form>
        </div>
      </div>

      <AlertAddItem
        isOpen={isSuccessModalOpen}
        onOpenChange={() => setSuccessModalOpen(false)}
        onClose={handleSuccessClose}
      >
        <p>Added successfully!</p>
      </AlertAddItem>
    </>
  );
};

export default FormAddAcne;
