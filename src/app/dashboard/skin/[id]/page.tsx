"use client";
import React, { FC, useState, useEffect, useContext } from "react";
import {IskinByIDpageProps, IskinProps} from "@/interface/skin";
import {DashBoardContext} from "../../layout";
import {fetchSkinById} from "@/serverAction/skin";
import {Textarea} from "@nextui-org/react";
import Image from "next/image";
import FormEditSkin from "@/components/skin/formEditSkin";

const SkinByIDpage: FC<IskinByIDpageProps> = ({params}) => {
  const context = useContext(DashBoardContext);
  const {setItemName, isOpen, onOpenChange} = context!;
  const [id, setId] = useState<string>("");
  const [skin, setSkin] = useState<IskinProps>();

  useEffect(() => {
    params.then((params) => {
      const id = String(params.id);
      setId(id);
    });
    fetchSkinById(id)
      .then((response) => {
        const data = response.data;
        setSkin(data);
      })
        .catch((error) => {
            console.log("Error:", error);
        });

    if (skin?.name) {
        setItemName(skin.name);
        }
    }, [skin?.name, id, params, setItemName]);
    
    console.log("skin", skin);

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-6xl w-full rounded-xl">
                <div className="flex justify-center mb-4 mt-4">
                    <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
                        {skin && skin.image && (
                            <Image
                                src={skin.image}
                                alt={skin.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md border p-6">
                    <h2 className="text-titleCrad text-Quartz mb-2">Skin</h2>
                    <Textarea
                        className="max-w-full h-10 text-contentCrad mb-2"
                        value={skin?.name}
                        readOnly={true}
                    />
                </div>
            </div>
            {skin && (
                <FormEditSkin
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    skin={skin}
                />
            )}
        </div>
    );
}

export default SkinByIDpage;