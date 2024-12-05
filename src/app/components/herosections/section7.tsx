"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export default function Testimonial() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <section className="relative w-full md:h-[80%] h-full mt-10 md:mb-0 mb-24">
      <div className="absolute inset-0">
        <Image
          src="/bgtestimonial.png"
          alt="testimonialbackground"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute md:bottom-0 -bottom-24 left-0">
        <Image src="/testimonialimg.png" alt="image" width={200} height={200} />
      </div>

      <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-6 rounded-lg max-w-[90%] md:max-w-none text-center md:text-left flex flex-col justify-center items-center gap-3">
        <p className="text-orange-500">TESTIMONIAL</p>
        <h1 className="font-bold font-serif lg:text-3xl text-xl mb-6">
          See What Our Clients Say About Us
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-md rounded-lg shadow-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index + 1}>
                  <div className="p-6 flex flex-col justify-center items-center">
                    <Image
                      src="/client1.png"
                      alt="client"
                      width={100}
                      height={100}
                    />
                    <p className="text-xs font-bold">
                      Christine Beckam - Designer
                    </p>
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    <div>
                      <Image
                        src="/quote.png"
                        alt="quote"
                        width={50}
                        height={50}
                        className="absolute"
                      />
                      <p className="relative lg:text-sm text-xs text-center my-2 text-gray-500">
                        Et labore harum non nobis ipsum eum molestias mollitia
                        et corporis praesentium a laudantium internos. Non quis
                        eius quo eligendi corrupti et fugiat nulla qui soluta
                        recusandae in maxime quasi aut ducimus illum aut optio
                        quibusdam!
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
