"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const DashBoardlayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="jun-layout">
      <header className="jun-header bg-red-600 jun-header-clip"><Header/></header>
      <main className="jun-content bg-blue-600">{children}</main>
      <aside className="jun-edgeSidebar">
        <div className="jun-edgeContent"><SideBar/></div>
      </aside>
      <footer className="jun-footer">Footer</footer>
    </div>
  );
};

export default DashBoardlayout;
