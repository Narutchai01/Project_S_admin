"use client";

import React, { useEffect, useState } from "react";
import skincareData from "../skincareData";
import SkincareDetails from "./../../../../components/skincareDetails"
import { SkincareItem } from "../../../../interface/admin";

const SkincareByIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string | null>(null);
  const [skincareItem, setSkincareItem] = useState<SkincareItem | null>(null);

  useEffect(() => {
    async function fetchData() {
      const paramsData = await params;
      const fetchedId = paramsData.id;
      setId(fetchedId);

      const item = skincareData.find((item) => item.id === fetchedId);
      setSkincareItem(item || null);
    }

    fetchData();
  }, [params, skincareData]);

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
