import React from "react";

const SkincareByIdpage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <>
      <div>
        <h1>{id}</h1>
      </div>
    </>
  );
};

export default SkincareByIdpage;
