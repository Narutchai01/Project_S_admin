'use client';
import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface AlertSuccessProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  children?: ReactNode;
}

const AlertSuccess: React.FC<AlertSuccessProps> = ({ 
  isOpen, 
  onOpenChange,
  onClose,
  children 
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      hideCloseButton
      isDismissable={false}
      className="max-w-sm" 
    >
      <ModalContent className="flex flex-col items-center justify-center h-[180px]">
        {() => (
          <>
            <ModalBody className="flex flex-col items-center justify-center text-center text-2xl font-semibold">
              {children}
            </ModalBody>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <ModalFooter>
              <Button 
                className="text-lg font-medium text-black hover:bg-opacity-90 w-32" 
                variant="light"
                onPress={onClose}
              >
                Done
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AlertSuccess;