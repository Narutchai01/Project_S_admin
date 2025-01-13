"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { AcneResponse } from "@/interface/admin";
import { fectchAcnes } from "@/serverAction/acne";
import { deleteAcnes } from "@/serverAction/acne";
import Link from "next/link";

const Acnepage = () => {
  const [acnes, setAcnes] = useState<AcneResponse>();

  useEffect(() => {
    fectchAcnes().then((res) => {
      setAcnes(res);
    });
  }, []);

  const data = acnes?.data || [];

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
                    href={`/dashboard/acne/${item.id}`}
                    className="text-contentTable hover:underline"
                  >
                    {item.id.toString().padStart(2, "0")}
                  </Link>
                </TableCell>

                <TableCell>
                  <Link
                    href={`/dashboard/acne/${item.id}`}
                    className="text-contentTable hover:underline"
                  >
                    {item.name}
                  </Link>
                </TableCell>

                <TableCell className="text-right">
                  <button
                    className="text-Bittersweet text-contentTable border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
                    onClick={async () => {
                      await deleteAcnes(item.id);
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
      </div>
    </div>
  );
};
export default Acnepage;
