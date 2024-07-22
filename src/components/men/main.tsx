import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const MenSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      main
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value="{f}"
                  // onSelect={(currentValue) => {
                  //   setValue(currentValue === value ? "" : currentValue);
                  //   setOpen(false);
                  // }}
                >
                  "sample"
                  <CheckIcon className={cn("ml-auto h-4 w-4")} />
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default MenSection;
