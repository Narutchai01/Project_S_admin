"use client";

import React, { FC, useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import SkincareDetails from "@/components/skincareDetails";
import { EditDetailProps, SkincareItem } from "@/interface/admin";
import { FilePenLine } from "lucide-react";


const EditDetail: FC<EditDetailProps> = ({ skincareItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<SkincareItem>({ ...skincareItem });

  const handleChange = (key: keyof SkincareItem, value: string) => {
    setEditData({
      ...editData,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Updated Data:", editData);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className="bg-Bittersweet text-white items-center w-full"
        radius="full"
        onPress={() => setIsModalOpen(true)}
      >
        <FilePenLine />
      </Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="full">
        <ModalContent>
          <ModalHeader>Edit Skincare</ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <SkincareDetails
                skincareItem={editData}
                readOnly={false}
                onChange={handleChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditDetail;
