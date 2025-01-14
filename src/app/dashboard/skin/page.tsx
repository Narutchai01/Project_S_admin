"use client";

import React, { useState, useEffect } from "react";
import { Iskin } from "@/interface/skin";
import { fetchSkin } from "@/serverAction/skin";
import SkinTable from "@/components/skin/skinTable";

const Skinpage = () => {
  const [skins, setSkins] = useState<Iskin[]>([]);

  useEffect(() => {
    const fetchSkinData = async () => {
      const response = await fetchSkin();
      setSkins(response.data);
    };
    fetchSkinData();
  }, []);

  return (
    <div>
      <SkinTable skins={skins} />
    </div>
  );
};

export default Skinpage;