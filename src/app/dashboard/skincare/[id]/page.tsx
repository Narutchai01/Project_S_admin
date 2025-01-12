"use client";
import React, { useEffect, useState, useContext } from "react";
import { fectchSkincareById } from "@/serverAction/server_action";
import SkincareDetails from "@/components/skincareDetails";
import { DashBoardContext } from "../../layout";

const SkincareByIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string>("");
  // const [skincareItem, setSkincareItem] = useState<SkincareItem | null>(null);
  const context = useContext(DashBoardContext);
  const { setItemName , skincareItem , setSkincareItem } = context!;

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const id = String(resolvedParams.id);
      console.log("Fetched ID from params:", id);
      setId(id);

      if (id) {
        try {
          const response = await fectchSkincareById(id);
          if (response?.data) {
            console.log("Fetched skincare data:", response.data);
            if (setSkincareItem) {
              setSkincareItem(response.data);
            }
            setItemName(response.data.name || "");
          } else {
            console.warn("No skincare data found for ID:", id);
          }
        } catch (error) {
          console.error("Error fetching skincare by ID:", error);
        }
      }
    };

    fetchData();
  }, [params, setItemName, setSkincareItem]);



  return (
    <div className="flex flex-col items-center w-full gap-6 p-6">
        <div className="flex flex-col justify-center items-center w-full">
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
    </div>
  );
};

export default SkincareByIdPage;
