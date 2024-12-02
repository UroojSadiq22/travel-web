// "use client"
// import Image from "next/image";
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { useState } from "react";

// type Option = {
//     value: string;
//     label: string;
//   };

// interface ComboBoxProps {
//     label: string;
//     options: Option[];
//   }

// // ComboBox Component
// export default function ComboBox({ label, options }:ComboBoxProps) {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("");

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value ? options.find(option => option.value === value)?.label : label}
//           <ChevronsUpDown className="opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
//           <CommandList>
//             <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
//             <CommandGroup>
//               {options.map(option => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {option.label}
//                   <Check
//                     className={cn(
//                       "ml-auto",
//                       value === option.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

"use client"
import Image from "next/image";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface ComboBoxProps {
  label: string;
  options: Option[];
}

// ComboBox Component
export default function ComboBox({ label, options }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[170px] justify-between bg-gray-300 text-black hover:bg-orange-500" // Set button width and background color
        >
          {value ? options.find(option => option.value === value)?.label : label}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[170px] bg-gray-300 text-black p-0"> {/* Set PopoverContent width and color */}
        <Command>
          <CommandInput
            placeholder={`Search ${label.toLowerCase()}...`}
            className="text-black placeholder-gray-400" // Customize placeholder color
          />
          <CommandList>
            <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="hover:bg-gray-700 text-black cursor-pointer" // Item hover and text color
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
