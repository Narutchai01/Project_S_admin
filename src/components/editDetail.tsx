"use client";

import React, {useContext} from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { DashBoardContext } from "@/app/dashboard/layout";
import SkincareDetails from "./skincareDetails";
import { SkincareItem } from "@/interface/admin";


const EditDetail  = () => {

  const context = useContext(DashBoardContext);
  const { isOpen ,setIsOpen , skincareItem} = context!;


  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Modal size="full" isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader>Edit Skincare</ModalHeader>
          <form>
            <ModalBody>
              <SkincareDetails 
                skincareItem={skincareItem ?? {} as SkincareItem}
                readOnly={false}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleClose}>
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
