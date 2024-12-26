
import React from "react";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="flex justify-center items-center h-screen">
        {children}
    </div>
  );
}
