import React, { useState, FC } from "react";
import Image from "next/image";
import {updateFacial } from "@/serverAction/facial";
import {
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import { Ifacial } from "@/interface/facial";
import AlertSuccess from "@/components/alert/alertSuccess";

interface FromEditFacial {
  isOpen: boolean;
  onOpenChange: () => void;
  facial: Ifacial;
}

const FromEditFacial: FC<FromEditFacial> = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpenChange, facial } = props;
   const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

   const handleFormSubmit = async (formData: FormData) => {
    try {
      await updateFacial(facial.id, formData);
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
              Update {facial.name}
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
                          src={facial.image}
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
                        Facial
                      </h2>
                      <Textarea
                        className="max-w-full h-10 text-contentCrad mb-2"
                        placeholder="Facial Name"
                        name="name"
                        defaultValue={facial.name}
                        readOnly={false}
                      />
                    </div>
                    <Button
                        id="update"
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
                  

export default FromEditFacial;
