"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import Link from "next/link";

const Skincarepage = () => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const data = Array.from({ length: 40 }, (_, index) => ({
    id: `00${index + 1}`,
    name: `Skincare Name ${index + 1}`,
  }));

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginatedData = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  return (
    <div className="p-4">
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-gray-200 shadow-md ">
        <Table
          aria-label="Skincare Table"
          className={"rounded-2xl bg-red-200"}
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>&nbsp;</TableColumn>
          </TableHeader>
          <TableBody items={paginatedData}>
            {(item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link
                    href={`/dashboard/skincare/${item.id}`}
                    className="text-black-500 hover:underline"
                  >
                    {item.id}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href={`/dashboard/skincare/${item.id}`}
                    className="text-black-500 hover:underline"
                  >
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <button className="text-red-500 border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50">
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          total={totalPages}
          page={page}
          onChange={(page) => setPage(page)}
          color="primary"
          isCompact
          showControls
          variant="flat"
          classNames={{
            item: "rounded-full text-black bg-white",
            cursor: "rounded-full bg-blue-500 text-white",
            next: "text-black-400 hover:text-white",
            prev: "text-black-400 hover:text-white",
          }}
        />
      </div>
    </div>
  );
};

export default Skincarepage;
