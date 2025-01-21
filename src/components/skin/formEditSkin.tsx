"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import { updateSkin } from "@/serverAction/skin";
import {
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { Iskin } from "@/interface/skin";
import AlertSuccess from "../alert/alertSuccess";

interface FormEditSkin {
  isOpen: boolean;
  onOpenChange: () => void;
  skin: Iskin;
}

const FormEditSkin: FC<FormEditSkin> = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpenChange, skin } = props;
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    try {
      await updateSkin(skin.id, formData);
      setSuccessModalOpen(true);
    } catch (error) {
      console.error("Error updating facial:", error);
    }
  };

  const handleSuccessClose = () => {
    setSuccessModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update {skin.name}
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
                            src={skin.image}
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
                        handleFormSubmit(formData)
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
                          skin
                        </h2>
                        <Textarea
                          className="max-w-full h-10 text-contentCrad mb-2"
                          placeholder="skin Name"
                          name="name"
                          defaultValue={skin.name}
                          readOnly={false}
                        />
                      </div>
                      <Button
                        id="add-skin"
                        type="submit"
                        className="bg-Bittersweet font-bold text-white mt-6"
                        onPress={onClose}
                      >
                        Update
                      </Button>
                    </form>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <AlertSuccess
        isOpen={isSuccessModalOpen}
        onOpenChange={() => setSuccessModalOpen(false)}
        onClose={handleSuccessClose}
      >
        <p>Updated successfully!</p>
      </AlertSuccess>
    </>
  );
};
export default FormEditSkin;
