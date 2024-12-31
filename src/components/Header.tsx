"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().split("/");

  return (
    <>
      <div className=" container mx-auto px-14">{pathname.length}</div>
    </>
  );
};

export default Header;
