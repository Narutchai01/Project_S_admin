"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import {
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { Iskincare } from "@/interface/skincare";
import { updateSkincare } from "@/serverAction/skincare";

interface FormEditSkincare {
  isOpen: boolean;
  onOpenChange: () => void;
  skincare: Iskincare;
}

const FormEditSkincare: FC<FormEditSkincare> = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpenChange, skincare } = props;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Update {skincare.name}
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center items-center">
                <div className="max-w-6xl w-full rounded-xl">
                  <div className="flex justify-center mt-4">
                    <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
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
                        <Image
                          src={skincare.image}
                          alt="skincare"
                          width={350}
                          height={360}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <form
                    action={(formData: FormData) =>
                      updateSkincare(skincare.id, formData)
                    }
                    className="p-6 flex justify-center flex-col items-center"
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
                      <h2 className="text-titleCrad text-Quartz mb-2">
                        Skincare
                      </h2>
                      <Textarea
                        className="max-w-full h-10 text-contentCrad mb-2"
                        placeholder="Skincare Name"
                        name="name"
                        defaultValue={skincare.name}
                        readOnly={false}
                      />
                      <h2 className="text-titleCrad text-Quartz mb-4">
                        Description
                      </h2>
                      <Textarea
                        className="max-w-full text-contentCrad"
                        placeholder="Description"
                        name="description"
                        defaultValue={skincare.description}
                        readOnly={false}
                        rows={10}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-Bittersweet font-bold text-white mt-6"
                      onPress={() => {
                        onClose();
                        window.location.reload();
                      }}
                    >
                      Update Skincare
                    </Button>
                  </form>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FormEditSkincare;
