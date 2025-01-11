import React, { FC, useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { FilePenLine } from "lucide-react";
import SkincareDetails from "@/components/skincareDetails";
import { SkincareItem } from "@/interface/admin";

interface IHeaderItemsProps {
  itemName: string;
  skincareItem: SkincareItem;
  onSave: (updatedItem: SkincareItem) => void;
}

const HeaderItem: FC<IHeaderItemsProps> = ({
  itemName,
  skincareItem,
  onSave,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableItem, setEditableItem] = useState<SkincareItem>(skincareItem);

  useEffect(() => {
    setEditableItem(skincareItem);
  }, [skincareItem]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditableItem(skincareItem);
  };

  const handleSave = () => {
    onSave(editableItem);
    handleModalClose();
  };

  return (
    <div className="flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className="text-heading text-Quartz">{itemName}</h1>
      <div>
        <Button
          className="bg-Bittersweet text-white items-center w-full"
          radius="full"
          onPress={() => setIsModalOpen(true)}
        >
          <FilePenLine />
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="full">
        <ModalContent>
          <ModalHeader>Edit Skincare</ModalHeader>
          <ModalBody>
            {editableItem ? (
              <SkincareDetails
                skincareItem={editableItem}
                readOnly={false}
                onChange={(key, value) =>
                  setEditableItem({ ...editableItem, [key]: value })
                }
              />
            ) : (
              <div>Loading...</div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleModalClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HeaderItem;
