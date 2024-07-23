import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-auto py-14 flex justify-center align-center">
        <Card className="w-[360px]">{children}</Card>
      </div>
    </>
  );
};

export default CardContainer;
