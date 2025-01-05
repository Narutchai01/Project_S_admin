"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";

const skincareData = [
  {
    id: "001",
    name: "Skincare Name 1",
    image:
      "https://s.isanook.com/wo/0/ud/38/194549/2.jpg?ip/resize/w728/q80/jpg",
    detail: `ใครที่มีปัญหาผิวหน้าและผิวกายแห้งมากควรรู้จักกับเซราวี มอยส์เจอไรซิ่งครีม Cerave moisturizing cream 
    ผลิตภัณฑ์บำรุงผิวหน้าและผิวกาย สูตรสำหรับผิวแห้งถึงแห้งมาก ซึ่งผิวที่มีปัญหาแห้ง แดง ไม่สบายผิว 
    คือผิวที่จำนวนเซราไมด์ลดลงมากกว่าปกติ อันเป็นสาเหตุของปราการผิวอ่อนแอลง Cerave moisturizing cream 
    จากเซราวีประกอบด้วยเซราไมด์ที่จำเป็นต่อผิว 3 ชนิด โดยสกัดจากพืชธรรมชาติ พร้อมผสานด้วยไฮยาลูรอนิกแอซิด 
    เพื่อช่วยชดเชยความชุ่มชื้น, เซราไมด์ที่ขาดหายไป และเสริมสร้างปราการปกป้องผิว 
    สัมผัสกับเทคโนโลยี MVE เพื่อผลลัพธ์ที่ยาวนาน MVE เป็นเทคโนโลยีลิขสิทธิ์เฉพาะของเซราวี 
    ที่จะนำพาเซราไมด์เข้าฟื้นบำรุงผิวอย่างยาวนานและล้ำลึก ผลลัพธ์ที่ได้คือ ปราการปกป้องผิวที่ดีขึ้น 
    เพื่อผิวที่เนียนนุ่ม ชุ่มชื้นยาวนานกว่า 24 ชั่วโมง โดย Cerave moisturizing cream รวมถึงผลิตภัณฑ์อื่นๆ 
    จากเซราวีเป็นผลิตภัณฑ์ที่อ่อนโยน สูตรปราศจากน้ำหอม สูตรไม่ก่อให้เกิดการอุดตัน (Non Comedogenic) 
    ไม่เหนียวเหนอะหนะ และเป็นสูตรไฮโปอัลเลอจีนิค 
    ผลิตภัณฑ์ผ่านการทดสอบบนผิวที่บอบบางระคายเคืองง่าย ภายใต้การควบคุมดูแลโดยแพทย์ผู้เชี่ยวชาญทางด้านผิวหนัง 
    และพัฒนาวิจัยค้นคว้าร่วมกับแพทย์ผิวหนัง บรรจุภัณฑ์ - บรรจุภัณฑ์สามารถนำไปรีไซเคิลได้`,
  },
  {
    id: "002",
    name: "Skincare Name 2",
    image:
      "https://s.isanook.com/wo/0/ud/38/194549/i.jpg?ip/crop/w670h402/q80/jpg",
    detail: `ใครที่มีปัญหาผิวหน้าแห้งและผิวกายแห้งมากควรรู้จักกับเซราวี มอยส์เจอไรซิ่งครีม CeraVe moisturizing cream
    สกินแคร์ที่บำรุงผิวหน้าและผิวกาย สูตรสำหรับผิวแห้งถึงแห้งมาก ซึ่งผิวที่มีปัญหาแห้ง แดง ไม่สบายผิว
    คือผิวที่ขาดเซราไมด์ โดยเฉพาะอย่างยิ่งในช่วงหน้าหนาวที่ผิวสูญเสียน้ำง่าย สูตรนี้มีส่วนผสมของไฮยาลูรอนิคแอซิด
    และไนอาซินาไมด์ ที่ช่วยกักเก็บความชุ่มชื้นอย่างยาวนานถึง 24 ชั่วโมง พร้อมปลอบประโลมผิวที่แห้งเสีย`,
  },
];

const SkincareByIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string | null>(null);
  const [skincareItem, setSkincareItem] = useState<{
    id: string;
    name: string;
    image: string;
    detail: string;
  } | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const item = skincareData.find((item) => item.id === id);
      setSkincareItem(item || null);
    }
  }, [id]);

  return (
    <div className="flex justify-center items-center ">
      {skincareItem ? (
        <div className="max-w-6xl w-full bg-white rounded-xl ">
          {/* <h1 className="text-3xl font-bold mb-6 text-start text-[#4A4A4A]">
            {skincareItem.name}
          </h1> */}

          <div className="flex justify-center mb-6">
            <div className="w-[350px] h-[360px] relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src={skincareItem.image}
                alt={skincareItem.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border p-6">
            <h2 className="text-lg font-semibold mb-2 text-[#4A4A4A]">
              Skincare name
            </h2>
            <Textarea
              className="max-w-full h-10 resize-none mb-4"
              value={skincareItem.name}
              readOnly
            />

            <h2 className="text-lg font-semibold mb-2 text-[#4A4A4A]">
              Detail
            </h2>
            <Textarea
              className="max-w-full"
              value={skincareItem.detail}
              readOnly
            />
          </div>
        </div>
      ) : id ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Skincare Not Found
          </h1>
          <p className="text-gray-600 mt-2">No skincare found with ID: {id}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-500">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default SkincareByIdPage;
