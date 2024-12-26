"use client";

import { CheckCookie } from "@/serverAction/server_action";
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    CheckCookie();
  });

  return (
    <div className="jun-layout">
      <header className="jun-header">
        <div className="jun-headerContent">header</div>
      </header>
      <main className="jun-content">
        <div className="jun-edgeContent">item 1</div>
        <div className="jun-edgeContent">item 2</div>
        <div className="jun-edgeContent">item 3</div>
      </main>

      <aside className="jun-edgeSidebar bg-red-600">
        <div className="jun-edgeContent">item 1</div>
        <div className="jun-edgeContent">item 1</div>
        <div className="jun-edgeContent">item 1</div>
        <div className="jun-edgeContent">item 1</div>
      </aside>

      <footer className="jun-footer bg-red-600">footer</footer>
    </div>
  );
}

export default Dashboard;
