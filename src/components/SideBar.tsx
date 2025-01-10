"use client";

import React , {FC} from "react";
import { User } from "@nextui-org/react";
import Link from "next/link";
import { Data} from "@/interface/admin";

const dataSideBar = [
  {
    title: "All Skincares",
    link: "/dashboard/skincare",
  },
  {
    title: "Skin Types",
    link: "/dashboard/skincare1",
  },
  {
    title: "Acne Types",
    link: "/dashboard/acne",
  },
  {
    title: "Skin Problems",
    link: "/contact",
  },
];

interface SideBarProps {
  category: string;
  adminData : Data | undefined;
}

const SideBar: FC<SideBarProps> = (props) => {
  const { category , adminData } = props;
  const inactiveStyle = "text-Quartz text-sideBar rounded-2xl block py-2 px-4 hover:bg-Bittersweet hover:text-white";
  const activeStyle = "rounded-2xl text-sideBar block py-2 px-4 bg-Bittersweet text-white";

 const { data } = adminData || { data: null };


  return (
    <>
      <div className="border-r-2 border-Snow h-full">
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
                <Link href={item.link} className={category === item.link.split("/")[2] ? activeStyle : inactiveStyle}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
