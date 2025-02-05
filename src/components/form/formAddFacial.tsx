import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { addFacial } from "@/serverAction/facial";
import AlertAddItem from "@/components/alert/alertAddItem";

function FormAddFacial() {
  const [image, setImage] = useState<File | null>(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    try {
      await addFacial(formData);
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding facial:", error);
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
                  alt="facial"
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
              <h2 className="text-titleCrad text-Quartz mb-2">Facial</h2>
              <Textarea
                className="max-w-full h-10 text-contentCrad mb-2"
                placeholder="Facial Name"
                name="name"
                readOnly={false}
              />
            </div>
            <Button
              id="add-facial"
              type="submit"
              className="bg-Bittersweet font-bold text-white mt-6"
            >
              Add Skincare
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
}

export default FormAddFacial;
