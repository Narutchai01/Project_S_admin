"use client";

import React, { useState, useEffect } from "react";
import { Iskincare } from "@/interface/skincare";
import { fectchSkincares } from "@/serverAction/skincare";
import SkincareTable from "@/components/skincare/skincareTable";
import { useContext } from "react";
import { DashBoardContext } from "@/app/dashboard/layout";

const Skincarepage = () => {
  const [skincares, setSkincares] = useState<Iskincare[]>([]);
  const [skincareFilter, setSkincareFilter] = useState<Iskincare[]>([]);
  const context = useContext(DashBoardContext);

  const { search } = context!;

  useEffect(() => {
    const fetchSkincareData = async () => {
      const response = await fectchSkincares();
      setSkincares(response.data);
    };

    const filterSkincare = (search: string) => {
      const filter = skincares.filter((skincare) =>
        skincare.name.toLowerCase().includes(search.toLowerCase())
      );
      setSkincareFilter(filter);
    };

    fetchSkincareData();
    filterSkincare(search);
  }, [search, skincares]);

  return (
    <div>
      <SkincareTable skincares={skincareFilter} />
    </div>
  );
};

export default Skincarepage;
