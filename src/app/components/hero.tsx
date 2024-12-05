"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section1 from "./herosections/section1"
import Section2 from "./herosections/section2";
import Section3 from "./herosections/section3";
import Section4 from "./herosections/section4";
import Section5 from "./herosections/section5";
import Section6 from "./herosections/section6";
import Section7 from "./herosections/section7";
import { motion } from "framer-motion";
import ScrollToTop from "./scrolltotop";
import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import Footer from "./footer";
// Data sets

export default function Hero() {
  const mainRef = useRef<HTMLElement | null>(null);
  
  const itemVariants = {
    hidden: { opacity: 0, x: 70 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };
  return (
    <main  ref={mainRef} className="w-full h-screen overflow-x-hidden">
      <Section1 />

      {/* Partners Section */}
      <Section2 />

      {/* Services section */}

      <Section3 />

      {/* famous places section */}
      <Section4 />

      {/* booking section */}
      <Section5 />

      {/* separatoe image section */}
      <section className="bg-gray-300 flex lg:h-[60%] h-[40%]">
        <div className="w-[100%] relative flex items-center lg:px-10 px-2">
          <Image
            src="/eu6.png"
            alt="explore europe"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute lg:text-5xl text-3xl flex flex-col items-center font-serif text-white lg:mx-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              {" "}
              Let’s make your next <br /> holiday amazing
            </motion.h1>

            <Image
              src="/zigzag.png"
              alt="zigzag"
              width={70}
              height={70}
              className="rotate-180 w-[14rem] h-3"
            />
          </div>
        </div>
      </section>

      {/* europe places section */}
      <Section6 />

      {/* separator 2 images section */}
      <section className="bg-gray-300 flex md:flex-row flex-col md:h-[50%] h-[70%] ">
        <div className="bg-red-500 p-1 h-full md:w-[50%] relative flex flex-col justify-center items-center">
          <Image
            src="/expnature.png"
            alt="explore nature"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/10 shadow-lg"></div>
          <div className="absolute text-center text-white">
            <p className="text-orange-500 lg:text-base text-sm">PROMOTION</p>
            <h1 className="font-bold font-serif lg:text-4xl text-xl lg:mb-6 mb-2">
              Explore Nature
            </h1>

            <Button
              variant="outline"
              className="relative overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 font-bold flex items-center gap-2">
                View Packages
              </h1>
            </Button>
          </div>
        </div>

        <div className="bg-red-500 p-1 md:w-[50%] h-full relative flex justify-center items-center">
          <Image
            src="/expcities.png"
            alt="explore cities"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 shadow-lg"></div>
          <div className="absolute text-center text-white">
            <p className="text-orange-500 lg:text-base text-sm">PROMOTION</p>
            <h1 className="font-bold font-serif lg:text-4xl text-xl lg:mb-6 mb-2">
              Explore Cities
            </h1>

            <Button
              variant="outline"
              className="relative overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 font-bold flex items-center gap-2">
                View Packages
              </h1>
            </Button>
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <Section7 />

      <ScrollToTop mainRef={mainRef}/>

      <Footer/>
    </main>
  );
}
