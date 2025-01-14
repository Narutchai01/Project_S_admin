"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import { updateAcne } from "@/serverAction/acne";
import {
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import {AcneItem} from "@/interface/admin";

interface FromEditAcne {
  isOpen: boolean;
  onOpenChange: () => void;
  acne: AcneItem;
}

const FormEditAcne: FC<FromEditAcne> = (props) => {
  const [image, setImage] = useState<File | null>(null);
  const { isOpen, onOpenChange, acne } = props;
  return (
     <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
       <ModalContent>
         {(onClose) => (
           <>
             <ModalHeader className="flex flex-col gap-1">
               Update {acne.name}
             </ModalHeader>
             <ModalBody>
               <div className="flex justify-center items-center">
                 <div className="max-w-6xl w-full rounded-xl">
                   <div className="flex justify-center mb-4 mt-4">
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
                           src={acne.image}
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
                     action={(formData: FormData) => updateAcne(acne.id, formData)}
                     className="p-6 flex justify-center flex-col items-center"
                   >
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
                     <div className="bg-white rounded-xl shadow-md border w-full p-6 flex flex-col">
                       <h2 className="text-titleCrad text-Quartz mb-2">
                         Acne
                       </h2>
                       <Textarea
                         className="max-w-full h-10 text-contentCrad mb-2"
                         placeholder="Facial Name"
                         name="name"
                         defaultValue={acne.name}
                         readOnly={false}
                       />
                     </div>
                     <Button
                       type="submit"
                       className="bg-Bittersweet font-bold text-white"
                       onPress={() => {
                         onClose();
                         window.location.reload();
                       }}
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
   );
 };
 
 export default FormEditAcne;
 