import React ,{FC} from "react";
import { Button } from "@nextui-org/react";
import { FilePenLine } from "lucide-react";

interface IHeaderItemsProps {
  itemName: string;
}

const HeaderItem : FC<IHeaderItemsProps> = (props) => {

    const {itemName} = props

  return (
    <div className=" flex flex-row w-full justify-between items-center container mx-auto px-6">
      <h1 className=" text-heading text-Quartz">{itemName}</h1>

      <div className="">
        <Button
          className="bg-Bittersweet text-white items-center w-full"
          radius="full"
        >
          {/* Add {category} */}
          <FilePenLine />
        </Button>
      </div>
    </div>
  );
};

export default HeaderItem;
