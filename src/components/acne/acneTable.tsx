import React, { FC, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";
import { IacneProps } from "@/interface/acne";
import { deleteAcne } from "@/serverAction/acne";
import AlertDelete from "@/components/alert/alertDelete";
import AlertSuccess from "@/components/alert/alertSuccess";

const AcneTable: FC<IacneProps> = (props) => {
  const { acnes } = props;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedAcneId, setSelectedAcneId] = useState<number | null>(null);

  const sortAcnes = acnes.sort((a, b) => a.id - b.id);

  const handleDelete = async () => {
    try {
      if (selectedAcneId !== null) {
        await deleteAcne(selectedAcneId);
        setDeleteModalOpen(false);
        setSuccessModalOpen(true);
      }
    } catch (error) {
      console.error("Error deleting facial:", error);
      setDeleteModalOpen(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccessModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="p-6 font-Lexend">
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-gray-200 shadow-md">
        <Table
          aria-label="Skincare Table"
          removeWrapper
          className="rounded-2xl"
        >
          <TableHeader>
            <TableColumn className="text-titleTable">ID</TableColumn>
            <TableColumn className="text-titleTable">Name</TableColumn>
            <TableColumn className="text-titleTable">&nbsp;</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."} items={sortAcnes}>
            {(item) => (
              <TableRow key={item.id} className="border-b border-gray-200">
                <TableCell>
                  <Link href={`/dashboard/acne/${item.id}`}>{item.id}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/acne/${item.id}`}>{item.name}</Link>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <button
                      id={`edit-${item.id}`}
                      type="button"
                      className="text-Bittersweet text-contentTable border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
                      onClick={() => {
                        setSelectedAcneId(item.id);
                        setDeleteModalOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDelete
        isOpen={isDeleteModalOpen}
        onOpenChange={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      >
        <p>Are you sure?</p>
      </AlertDelete>

      <AlertSuccess
        isOpen={isSuccessModalOpen}
        onOpenChange={() => {}}
        onClose={handleSuccessClose}
      >
        <p>Deleted successfully!</p>
      </AlertSuccess>
    </div>
  );
};
export default AcneTable;
