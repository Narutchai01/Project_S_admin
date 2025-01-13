import React, { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";
import { IfacialProps } from "@/interface/facial";
import { deleteFacial } from "@/serverAction/facial";

const FacialTable: FC<IfacialProps> = (props) => {
  const { facials } = props;

  const sortFacials = facials.sort((a, b) => a.id - b.id);

  return (
    <Table aria-label="Skincare Table" removeWrapper className="rounded-2xl">
      <TableHeader>
        <TableColumn className="text-titleTable">ID</TableColumn>
        <TableColumn className="text-titleTable">Name</TableColumn>
        <TableColumn className="text-titleTable">&nbsp;</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."} items={sortFacials}>
        {(item) => (
          <TableRow key={item.id} className="border-b border-gray-200">
            <TableCell><Link href={`/dashboard/facial/${item.id}`}>{item.id}</Link></TableCell>
            <TableCell><Link href={`/dashboard/facial/${item.id}`}>{item.name}</Link></TableCell>
            <TableCell>
              <button
                type="button"
                className="text-Bittersweet text-contentTable border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
                onClick={() => {
                  deleteFacial(item.id);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default FacialTable;
