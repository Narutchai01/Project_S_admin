"use client";
import React, { useEffect, useState, useContext } from "react";
import { fectchAcneById } from "@/serverAction/acne";
import AcneDetail from "@/components/acne/acneDetail";
import { DashBoardContext } from "@/app/dashboard/layout";

const AcneByIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string>("");
  const context = useContext(DashBoardContext);
  const { setItemName, acneItem, setAcneItem } = context!;

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const id = String(resolvedParams.id);
      console.log("Fetched ID from params:", id);
      setId(id);

      if (id) {
        try {
          const response = await fectchAcneById(id);
          if (response?.data) {
            console.log("Fetched acne data:", response.data);
            if (setAcneItem) {
              setAcneItem(response.data);
            }
            setItemName(response.data.name || "");
          } else {
            console.warn("No acne data found for ID:", id);
          }
        } catch (error) {
          console.error("Error fetching acne by ID:", error);
        }
      }
    };

    fetchData();
  }, [params, setItemName, setAcneItem]);

  return (
    <div className="flex flex-col items-center w-full gap-6 p-6">
      <div className="flex flex-col justify-center items-center w-full">
        {acneItem ? (
          <AcneDetail acneItem={acneItem} readOnly={true} />
        ) : id ? (
          <div className="text-center">
            <h1 className="text-titleCrad text-black mt-4">Acne Not Found</h1>
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

export default AcneByIdPage;
