"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { addSkincare } from "@/serverAction/skincare";

function FormAddSkincare() {
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
                    action={addSkincare}
                    className="p-2 flex justify-center flex-col items-center"
                >
                    <Input
                        placeholder="upload image"
                        type="file"
                        name="file"
                        variant="bordered"
                        className="max-w-[220px] mb-6"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setImage(file);
                            }
                        }}
                    />
                    <div className="bg-white rounded-xl shadow-md border w-full p-6 flex flex-col">
                        <h2 className="text-titleCrad text-Quartz mb-2">Skincare</h2>
                        <Textarea
                            className="max-w-full h-10 text-contentCrad mb-2"
                            placeholder="Skincare Name"
                            name="name"
                            readOnly={false}
                        />
                        <h2 className="text-titleCrad text-Quartz mb-4">Description</h2>
                        <Textarea
                            className="max-w-full text-contentCrad"
                            placeholder="Description"
                            name="description"
                            readOnly={false}
                            rows={10}
                        />
                    </div>
                    <Button type="submit" className="bg-Bittersweet font-bold text-white mt-6">
                        Add Skincare
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FormAddSkincare;
