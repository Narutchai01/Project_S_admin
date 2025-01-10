"use client";
import React, { useEffect, useState,useContext } from "react";
import { SkincareItem } from "@/interface/admin";
import { fectchSkincareById } from "@/serverAction/server_action";
import SkincareDetails from "@/components/skincareDetails";
import { DashBoardContext } from "../../layout";


const SkincareByIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string>("");
  const [skincareItem, setSkincareItem] = useState<SkincareItem | null>(null);
  const context = useContext(DashBoardContext);
  const { setItemName } = context!;


  useEffect(() => {
    params.then((params) => {
      const id = String(params.id);
      setId(id);
    });
    fectchSkincareById(id).then((response) => {
      setSkincareItem(response.data);
    });
    setItemName(skincareItem?.name || "");
  },[id, params , setItemName, skincareItem?.name]);


  

  return (
    <div className="flex justify-center items-center">
      {skincareItem ? (
        <SkincareDetails skincareItem={skincareItem} readOnly={true} />
      ) : id ? (
        <div className="text-center">
          <h1 className="text-titleCrad text-black mt-4">
            Skincare Not Found
          </h1>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-titleCrad text-black">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default SkincareByIdPage;
