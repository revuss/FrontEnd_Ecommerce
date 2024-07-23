import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface Titlevalues {
  title: string;
  description: string;
}

const CardHeadTitle: React.FC<Titlevalues> = ({ title, description }) => {
  return (
    <>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </>
  );
};

export default CardHeadTitle;
