"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React , { useState ,ReactNode}  from "react";
import { usePathname } from "next/navigation";


const DashBoardlayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {

  const pathname = usePathname().split("/");
  const category = pathname[2];
  const [itemName, setItemName] = useState<string>("");
  

  return (
    <div className="jun-layout">
      <header className="jun-header bg-red-600"><Header category={category}/></header>
      <main className="jun-content bg-white-600">{children}</main>
      <aside className="jun-edgeSidebar">
        <div className="jun-edgeContent"><SideBar category={category}/></div>
      </aside>
      <footer className="jun-footer">Footer</footer>
    </div>
  );
};

export default DashBoardlayout;
