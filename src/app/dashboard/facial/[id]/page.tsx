"use client";
import React, { FC, useState, useEffect, useContext } from "react";
import { IFacialByIDpageProps, Ifacial } from "@/interface/facial";
import { DashBoardContext } from "../../layout";
import { fecthFacialByID } from "@/serverAction/facial";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";
import FromEditFacial from "@/components/formedit/FromEditFacial";

const FacialByIDpage: FC<IFacialByIDpageProps> = ({ params }) => {
  const context = useContext(DashBoardContext);
  const { setItemName, isOpen, onOpenChange } = context!;
  const [id, setId] = useState<string>("");
  const [facial, setFacial] = useState<Ifacial>();

  useEffect(() => {
    params.then((params) => {
      const id = String(params.id);
      setId(id);
    });
    fecthFacialByID(id)
      .then((response) => {
        const data = response.data;
        setFacial(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    if (facial?.name) {
      setItemName(facial.name);
    }
  }, [facial?.name, id, params, setItemName]);

  console.log("facial", facial);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl w-full rounded-xl">
        <div className="flex justify-center mb-4 mt-4">
          <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
            {facial && facial.image && (
              <Image
                src={facial.image}
                alt={facial.name}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h2 className="text-titleCrad text-Quartz mb-2">Facial</h2>
          <Textarea
            className="max-w-full h-10 text-contentCrad mb-2"
            value={facial?.name}
            readOnly={true}
          />
        </div>
      </div>

      {facial && <FromEditFacial isOpen={isOpen} onOpenChange={onOpenChange} facial={facial}/>}
    </div>
  );
};

export default FacialByIDpage;
