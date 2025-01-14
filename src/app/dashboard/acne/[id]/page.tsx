"use client";
import React, { FC, useState, useEffect, useContext }from "react";
import { DashBoardContext } from "@/app/dashboard/layout";
import { IAcneByIDpageProps, AcneItem } from "@/interface/admin";
import { fectchAcneById } from "@/serverAction/acne";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import FormEditAcne from "@/components/acne/FormEditAcne";

const AcneByIdPage: FC<IAcneByIDpageProps> = ({ params }) => {
  const [id, setId] = useState<string>("");
  const context = useContext(DashBoardContext);
  const { setItemName, isOpen, onOpenChange } = context!;
  const [acne, setAcne] = useState<AcneItem>();

  useEffect(() => {
    params.then((params) => {
      const id = String(params.id);
      setId(id);
    });
    fectchAcneById(id)
      .then((response) => {
        const data = response.data;
        setAcne(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    
    if (acne?.name) {
      setItemName(acne.name);
    }
  }, [acne?.name, id, params, setItemName]);

  console.log("acne", acne);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl w-full rounded-xl">
        <div className="flex justify-center mb-4 mt-4">
          <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
            {acne && acne.image && (
              <Image
                src={acne.image}
                alt={acne.name}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h2 className="text-titleCrad text-Quartz mb-2">Acne</h2>
          <Textarea
            className="max-w-full h-10 text-contentCrad mb-2"
            value={acne?.name}
            readOnly={true}
          />
        </div>
      </div>
      {acne && (
        <FormEditAcne
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          acne={acne}
        />
      )}
    </div>
  );
};

export default AcneByIdPage;
