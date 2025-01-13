import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
// import Link from "next/link";

const FacialTable = () => {
  return (
    <Table aria-label="Skincare Table" removeWrapper className="rounded-2xl">
      <TableHeader>
        <TableColumn className="text-titleTable">ID</TableColumn>
        <TableColumn className="text-titleTable">Name</TableColumn>
        <TableColumn className="text-titleTable">&nbsp;</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FacialTable;
