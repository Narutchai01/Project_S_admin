"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { addAcne } from "@/serverAction/acne";

function FormAddSkin() {
    const [image, setImage] = useState<File | null>(null);

    return (
        <div className="flex justify-center items-center">
            <div className="max-w-6xl w-full rounded-xl">
                <div className="flex justify-center mb-4 mt-4">
                    <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
                        {image ? (
                            <Image
                                src={URL.createObjectURL(image)}
                                alt="skincare"
                                width={350}
                                height={360}
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        ) : (
                            <div className="flex justify-center items-center h-full">
                                <ImagePlus size={100} color="#000" />
                            </div>
                        )}
                    </div>
                </div>
                <form
                    action={addAcne}
                    className="p-6 flex justify-center flex-col items-center"
                >
                    <Input
                        placeholder="upload image"
                        type="file"
                        name="file"
                        variant="bordered"
                        className="max-w-[220px]"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setImage(file);
                            }
                        }}
                    />
                    <div className="bg-white rounded-xl shadow-md border w-full p-6 flex flex-col">
                        <h2 className="text-titleCrad text-Quartz mb-2">Skin</h2>
                        <Textarea
                            className="max-w-full h-10 text-contentCrad mb-2"
                            placeholder="Skin Name"
                            name="name"
                            readOnly={false}
                        />
                    </div>
                    <Button type="submit" className="bg-Bittersweet font-bold text-white">
                        Add Skincare
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FormAddSkin;