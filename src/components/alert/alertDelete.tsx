'use client';
import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface AlertDeleteProps {
    isOpen: boolean;
    onOpenChange: () => void;
    children?: ReactNode;
    onDelete?: () => void;
  }

const AlertDelete: React.FC<AlertDeleteProps> = ({ 
  isOpen, 
  onOpenChange, 
  children,
  onDelete
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton className="max-w-sm" >
      <ModalContent className="flex flex-col items-center justify-center p-6"> 
        {(onClose) => (
          <>
            <ModalBody className="text-center text-2xl font-semibold mb-4">
              {children}
            </ModalBody>
            <ModalFooter className="flex justify-center gap-4">
              <Button className="bg-LightSilver text-lg font-medium text-black hover:bg-opacity-90 w-32"  onPress={onClose}>
                Close
              </Button>
              <Button 
                className="bg-LightSilver text-lg font-medium text-Bittersweet hover:bg-opacity-90 w-32"  
                onPress={() => {
                  if (onDelete) onDelete();
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AlertDelete;