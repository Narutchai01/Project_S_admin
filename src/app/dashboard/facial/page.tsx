"use client";
import FacialTable from "@/components/table/FacialTable";
import { fetchFacial } from "@/serverAction/facial";
import React, { useState, useEffect } from "react";
import { Ifacial } from "@/interface/facial";

const Facialpage = () => {
  const [facials, setFacials] = useState<Ifacial[]>([]);

  useEffect(() => {
    const fetchFacialData = async () => {
      const response = await fetchFacial();
      setFacials(response.data);
    };
    fetchFacialData();
  }, []);

  return (
    <div>
      <FacialTable facials={facials} />
    </div>
  );
};

export default Facialpage;
