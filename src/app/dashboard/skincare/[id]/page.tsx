"use client";
import React, { FC, useEffect, useState, useContext } from "react";
import { Spinner, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { ISkincareByIDpageProps, Iskincare } from "@/interface/skincare";
import { DashBoardContext } from "../../layout";
import { fectchSkincareById } from "@/serverAction/skincare";
import FromEditSkincare from "@/components/skincare/formEditSkincare";

const SkincareByIdPage: FC<ISkincareByIDpageProps> = ({ params }) => {
  const context = useContext(DashBoardContext);
  const { setItemName, isOpen, onOpenChange } = context!;
  const [id, setId] = useState<string>("");
  const [skincare, setSkincare] = useState<Iskincare>();

  useEffect(() => {
    params.then((params) => {
      const id = String(params.id);
      setId(id);
    });
    fectchSkincareById(id)
      .then((response) => {
        const data = response.data;
        setSkincare(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    if (skincare?.name) {
      setItemName(skincare.name);
    }
  }, [skincare?.name, id, params, setItemName]);

  console.log("skincare", skincare);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl w-full rounded-xl">
        <div className="flex justify-center mb-6 mt-4">
          <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
            {skincare && skincare.image ? (
              <Image
                src={skincare.image}
                alt={skincare.name || "No name available"}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full bg-gray-200">
                <Spinner color="default" labelColor="foreground" size="lg" />
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h2 className="text-titleCrad text-Quartz mb-2">Skincare</h2>
          <Textarea
            className="max-w-full h-10 text-contentCrad mb-4"
            value={skincare?.name}
            readOnly={true}
          />
          <h2 className="text-titleCrad text-Quartz mb-2">Description</h2>
          <Textarea
            className="max-w-full h-10 text-contentCrad mb-2"
            value={skincare?.description}
            readOnly={true}
          />
        </div>
      </div>
      {skincare && (
        <FromEditSkincare
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          skincare={skincare}
        />
      )}
    </div>
  );
};

export default SkincareByIdPage;
