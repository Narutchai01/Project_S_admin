"use client";

import React, { useState, useEffect } from "react";
import { Iskincare } from "@/interface/skincare";
import { fectchSkincares } from "@/serverAction/skincare";
import SkincareTable from "@/components/skincare/skincareTable";

const Skincarepage = () => {
  const [skincares, setSkincares] = useState<Iskincare[]>([]);

  useEffect(() => {
    const fetchSkincareData = async () => {
      const response = await fectchSkincares();
      setSkincares(response.data);
    };
    fetchSkincareData();
  }, []);

  return (
    <div>
      <SkincareTable skincares={skincares} />
    </div>
  );
}

export default Skincarepage;
