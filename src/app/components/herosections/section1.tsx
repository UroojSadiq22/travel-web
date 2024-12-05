import { Button } from "@/components/ui/button";
import ComboBox from "../combobox";
import Image from "next/image";
import { motion } from "framer-motion";

const options = {
    destinations: [
      { value: "newyork", label: "New York" },
      { value: "switzerland", label: "Switzerland" },
      { value: "london", label: "London" },
      { value: "turkey", label: "Turkey" },
      { value: "dubai", label: "Dubai" },
    ],
    travelTypes: [
      { value: "educational", label: "Educational" },
      { value: "conference", label: "Conference" },
      { value: "family", label: "Family" },
      { value: "friends", label: "Friends" },
    ],
    durations: [
      { value: "1day", label: "1 Day" },
      { value: "2days", label: "2 Days" },
      { value: "3days", label: "3 Days" },
      { value: "more", label: "More than 3 Days" },
    ],
  };

export default function Cover(){
    
      const itemVariants = {
        hidden: { opacity: 0, x: 70 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      };
    return(
              
      <section className="relative w-full lg:h-[85%] h-full">
      <div className="absolute inset-0">
        <Image
          src="/herobg.png"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-6 rounded-lg max-w-[90%] md:max-w-none text-center md:text-left flex flex-col gap-3">
        <div className="w-full md:w-[25rem] flex flex-col items-center md:items-start gap-2">
          <Image src="/zigzag.png" alt="zigzag" width={40} height={40} />
          <motion.h1 initial="hidden"
      animate="visible" variants={itemVariants} className="font-serif font-bold text-white text-2xl md:text-4xl leading-tight md:leading-normal">
            No matter where you’re going to, we’ll take you there
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row gap-2 p-2 md:p-4 backdrop-blur-2xl rounded-lg">
          <ComboBox label="Where to?" options={options.destinations} />
          <ComboBox label="Travel Type" options={options.travelTypes} />
          <ComboBox label="Duration" options={options.durations} />

          <Button
            variant="outline"
            className="relative overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
          >
            <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
            <h1 className="relative z-10 font-bold flex items-center gap-2">
              Submit Now
            </h1>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start text-center md:text-left">
          <Image src="/peoples.png" alt="peoples" width={80} height={80} />
          <p className="text-gray-400 text-xs md:text-sm">
            2,500 people booked Tomorrowland Event in the last 24 hours
          </p>
        </div>
      </div>
    </section>
    )
}