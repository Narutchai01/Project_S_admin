import React, { FC } from "react";

interface IHeaderAdd {
  category: string;
}

const HeaderAdd: FC<IHeaderAdd> = (props) => {
  const { category } = props;

  return (
    <div className=" flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className=" text-heading text-Quartz">Add {category}</h1>
    </div>
  );
};

export default HeaderAdd;
