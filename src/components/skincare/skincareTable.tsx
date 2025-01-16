"use client";

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
import { IskincareProps } from "@/interface/skincare";
import { deleteSkincare } from "@/serverAction/skincare";

const SkincareTable: FC<IskincareProps> = (props) => {
    const { skincares } = props;
    const sortSkincares = skincares.sort((a, b) => a.id - b.id);

    return(
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
                    <TableBody emptyContent={"No rows to display."} items={sortSkincares}>
                        {(item) => (
                            <TableRow key={item.id} className="border-b border-gray-200">
                                <TableCell>
                                    <Link href={`/dashboard/skincare/${item.id}`}>{item.id}</Link>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/dashboard/skincare/${item.id}`}>{item.name}</Link>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            className="text-Bittersweet text-contentTable border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
                                            onClick={() => {
                                                deleteSkincare(item.id);
                                                window.location.reload();
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
        </div>
    );
};

export default SkincareTable;

