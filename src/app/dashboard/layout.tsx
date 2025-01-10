"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React, { useState, ReactNode, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { fecthAdmin } from "@/serverAction/server_action";
import { Data } from "@/interface/admin";

interface DashBoardContextType {
  setItemName: (name: string) => void;
}

export const DashBoardContext = createContext<DashBoardContextType | undefined>(
  undefined
);

const DashBoardlayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname().split("/");
  const [category] = useState<string>(pathname[2]);
  const [dataAdmin, setDataAdmin] = useState<Data | undefined>(undefined);
  const [itemName, setItemName] = useState<string>(
    pathname.length >= 3 ? pathname[2] : ""
  );

  useEffect(() => {
    fecthAdmin().then((res) => {
      setDataAdmin(res);
    });
  }, []);

  return (
    <DashBoardContext.Provider value={{ setItemName }}>
      <div className="jun-layout">
        <header className="jun-header jun-header-h-[3.5rem]">
          <Header category={category} itemName={itemName} leght={pathname.length} />
        </header>
        <main className="jun-content bg-white-600">{children}</main>
        <aside className="jun-edgeSidebar">
          <div className="jun-edgeContent">
            <SideBar category={itemName} adminData={dataAdmin} />
          </div>
        </aside>
        <footer className="jun-footer">Footer</footer>
      </div>
    </DashBoardContext.Provider>
  );
};

export default DashBoardlayout;
