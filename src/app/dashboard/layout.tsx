"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React, { useState, ReactNode, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { fecthAdmin } from "@/serverAction/server_action";
import { Data } from "@/interface/admin";
import HeaderItem from "@/components/HeaderItem";
import HeaderAdd from "@/components/HeaderAdd";
import { useDisclosure } from "@nextui-org/react";

interface DashBoardContextType {
  setItemName: (name: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const DashBoardContext = createContext<DashBoardContextType | undefined>(
  undefined
);

const DashBoardlayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname().split("/");
  const category = pathname[2];
  const [dataAdmin, setDataAdmin] = useState<Data | undefined>(undefined);
  const [itemName, setItemName] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fecthAdmin().then((res) => {
      setDataAdmin(res);
    });
  }, []);

  return (
    <DashBoardContext.Provider
      value={{ setItemName, isOpen, onOpen, onOpenChange }}
    >
      <div className="jun-layout">
        <header className="jun-header jun-header-h-[3.5rem]">
          {pathname.length > 3 ? (
            pathname[3] != "add" ? (
              <HeaderItem itemName={itemName} onOpen={onOpen} />
            ) : (
              <HeaderAdd category={category} />
            )
          ) : (
            <Header category={category} />
          )}
        </header>
        <main className="jun-content bg-white-600">{children}</main>
        <aside className="jun-edgeSidebar">
          <div className="jun-edgeContent">
            <SideBar category={category} adminData={dataAdmin} />
          </div>
        </aside>
        <footer className="jun-footer">Footer</footer>
      </div>
    </DashBoardContext.Provider>
  );
};

export default DashBoardlayout;
