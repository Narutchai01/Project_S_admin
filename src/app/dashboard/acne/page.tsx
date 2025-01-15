"use client";

import React, { useState, useEffect } from "react";
import AcneTable from "@/components/acne/acneTable";
import { fectchAcnes } from "@/serverAction/acne";
import {Iacne } from "@/interface/acne";


const Acnepage = () => {
  const [acnes, setAcnes] = useState<Iacne[]>([]);

  useEffect(() => {
    const fetchAcneData = async () => {
      const response = await fectchAcnes();
      setAcnes(response.data);
    };
    fetchAcneData();
  }, []);

  return (
    <div>
      <AcneTable acnes={acnes} />
    </div>
  );
};

export default Acnepage;