import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, ...props }) => {
  return (
    <>
      <div className="flex flex-col space-y-1.5 ">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...props} />
      </div>
    </>
  );
};

export default InputField;
