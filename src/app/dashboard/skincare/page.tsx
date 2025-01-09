"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";

const Skincarepage = () => {
  const data = Array.from({ length: 60 }, (_, index) => ({
    id: `00${index + 1}`,
    name: `Skincare Name ${index + 1}`,
  }));

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
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.id} className="border-b border-gray-200">
                <TableCell>
                  <Link
                    href={`/dashboard/skincare/${item.id}`}
                    className="text-contentTable hover:underline"
                  >
                    {item.id}
                  </Link>
                </TableCell>

                <TableCell>
                  <Link
                    href={`/dashboard/skincare/${item.id}`}
                    className="text-contentTable hover:underline"
                  >
                    {item.name}
                  </Link>
                </TableCell>

                <TableCell className="text-right">
                  <button className="text-Bittersweet text-contentTable border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Skincarepage;
