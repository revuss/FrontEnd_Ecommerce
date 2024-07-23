import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ItemsLayout {
  label: string;
}

const ItemsLayout: React.FC<ItemsLayout> = ({ label }) => {
  return (
    <>
      <div className="w-full justify-between flex my-10 px-20">
        <h1 className="text-2xl font-semibold p-2">{label}</h1>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Prize</SelectLabel>
              <SelectItem value="low_to_high">Low to high</SelectItem>
              <SelectItem value="high_to_low">High to low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ItemsLayout;
