"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React, { useState, ReactNode, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { fecthAdmin } from "@/serverAction/server_action";
import { AcneItem, Data } from "@/interface/admin";
import HeaderItem from "@/components/HeaderItem";
import HeaderAdd from "@/components/HeaderAdd";
import { SkincareItem } from "@/interface/admin";

interface DashBoardContextType {
  setItemName: (name: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen?: boolean;
  skincareItem?: SkincareItem | null;
  setSkincareItem?: (skincareItem: SkincareItem | null) => void;
  acneItem?: AcneItem | null;
  setAcneItem?: (acneItem: AcneItem | null) => void;
}

export const DashBoardContext = createContext<DashBoardContextType | undefined>(
  undefined
);

const DashBoardlayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname().split("/");
  const category = pathname[2];
  const [dataAdmin, setDataAdmin] = useState<Data | undefined>(undefined);
  const [itemName, setItemName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [skincareItem, setSkincareItem] = useState<SkincareItem | null>(null);
  const [acneItem, setAcneItem] = useState<AcneItem | null>(null);

  useEffect(() => {
    fecthAdmin().then((res) => {
      setDataAdmin(res);
    });
  }, []);

  

  return (
    <DashBoardContext.Provider value={{ setItemName ,isOpen , setIsOpen, skincareItem, setSkincareItem, acneItem, setAcneItem }}>
      <div className="jun-layout">
        <header className="jun-header jun-header-h-[3.5rem]">
          {pathname.length > 3 ? (
            pathname[3] != "add" ? <HeaderItem itemName={itemName} setIsOpen={setIsOpen}/> : <HeaderAdd category={category} />
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
