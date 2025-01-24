"use client";

import React, { FC } from "react";
import { Button, User } from "@nextui-org/react";
import Link from "next/link";
import { Data } from "@/interface/admin";
import { handlerLogout } from "@/serverAction/server_action";

const dataSideBar = [
  {
    title: "All Skincares",
    link: "/dashboard/skincare",
  },
  {
    title: "Skin Types",
    link: "/dashboard/skin",
  },
  {
    title: "Acne Types",
    link: "/dashboard/acne",
  },
  {
    title: "Skin Problems",
    link: "/dashboard/facial",
  },
];

interface SideBarProps {
  category: string;
  adminData: Data | undefined;
}

const SideBar: FC<SideBarProps> = (props) => {
  const { category, adminData } = props;
  const inactiveStyle =
    "text-Quartz text-sideBar rounded-2xl block py-2 px-4 hover:bg-Bittersweet hover:text-white";
  const activeStyle =
    "rounded-2xl text-sideBar block py-2 px-4 bg-Bittersweet text-white";

  const { data } = adminData || { data: null };

  return (
    <>
      <div className="border-r-2 border-Snow h-full">
        <div className=" jun-layout">
          <div className="jun-content">
            <div className="container mx-auto py-4 px-6 gap-y-10">
              <User
                avatarProps={{
                  src: data?.image,
                }}
                name={data?.full_name}
              />
              <ul className="list-none flex flex-col justify-center items-center gap-y-4">
                {dataSideBar.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      id={item.title}
                      className={
                        category === item.link.split("/")[2]
                          ? activeStyle
                          : inactiveStyle
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" jun-footer">
            <div className="flex justify-center items-center gap-x-4 py-4">
              <Button
                className="bg-Bittersweet text-white font-semibold text-xl"
                onPress={() => {
                  handlerLogout();
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
