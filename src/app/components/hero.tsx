"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ComboBox from "./combobox";
import { CarFront, MapPinCheck, Quote, UserRoundCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Data sets
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

const partners = [
  { src: "/partner1.png", alt: "partner1" },
  { src: "/partner2.png", alt: "partner2" },
  { src: "/partner3.png", alt: "partner3" },
  { src: "/partner4.png", alt: "partner4" },
  { src: "/partner5.png", alt: "partner5" },
];

const services = [
  {
    src: "/medservice1.png",
    alt: "medical insurance",
    title: "medical insurance",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    src: "/relgservice2.png",
    alt: "religious tours",
    title: "religious tours",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    src: "/guideservice3.png",
    alt: "guided tours",
    title: "guided tours",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
  {
    src: "/flightservice4.png",
    alt: "best flights options",
    title: "best flights options",
    description:
      "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
  },
];

export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <main className="relative w-full h-screen overflow-y-auto">
      {/* Hero Section */}
      <section className="relative w-full h-[85%]">
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
            <h1 className="font-serif font-bold text-white text-2xl md:text-4xl leading-tight md:leading-normal">
              No matter where you’re going to, we’ll take you there
            </h1>
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

      {/* Partners Section */}
      <section className="bg-gray-300 p-6">
        <div className="flex justify-center gap-20">
          {partners.map((i, index) => (
            <Image
              key={index}
              src={i.src}
              alt={i.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </section>

      {/* Placeholder for future sections */}
      <section className="bg-gray-200 p-6 h-[70%] flex flex-col items-center justify-center">
        <p className="text-orange-500">CATEGORY</p>
        <h1 className="font-bold font-serif text-3xl mb-12">
          We Offer Best Services
        </h1>
        <div className="flex justify-center gap-10 hover:cursor-pointer">
          {services.map((i, index) => (
            <div className="relative group transform transition-transform duration-300 hover:scale-110">
              <div className="bg-orange-500 w-14 h-14 rounded-lg absolute bottom-[-12px] left-[-14px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="shadow-2xl bg-white p-4 w-[14rem] rounded-xl flex flex-col items-center justify-center relative z-10">
                <Image
                  key={index}
                  src={i.src}
                  alt={i.alt}
                  width={50}
                  height={50}
                />
                <h1 className="text-orange-500 text-xl mt-6">{i.title}</h1>
                <p className="text-sm text-center mt-2 text-gray-500">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 p-6 h-[70%] flex items-center justify-around">
        <div className="relative w-[14rem] h-[14rem] bg-red-700 flex items-center justify-center">
          <div className="absolute bg-orange-500 w-64 h-96 rounded-t-full z-10"></div>

          {/* Vertical Typography */}
          <div className="absolute text-4xl font-bold text-gray-400 tracking-widest rotate-90 -right-44 top-2/3 -translate-y-1/2">
            Famous Places
          </div>

          <div className="absolute bg-blue-500 w-24 h-24 rounded-full z-20 left-[70%] top-[-34%]"></div>
          <div className="absolute bg-green-500 w-28 h-28 rounded-full z-30 left-[-30%] top-[4%]"></div>
          <div className="absolute bg-purple-500 w-20 h-20 rounded-full z-40 left-[-30%] top-[40%]"></div>
        </div>

        <div className="w-[30rem] bg-gray-300 p-4">
          <p className="text-orange-500">CATEGORY</p>
          <h1 className="font-bold font-serif text-3xl mb-6">
            We Offer Best Services
          </h1>
          <p className="text-sm text-center mt-2 text-gray-500">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
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
      </section>

      <section className="p-6 h-full flex items-center justify-center gap-10">
        <div className="w-[30rem] p-4">
          <p className="text-orange-500">FAST & EASY</p>
          <h1 className="font-bold font-serif text-3xl mb-6">
            Get Your Favourite Resort Bookings
          </h1>
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="bg-yellow-500 w-20 h-14 rounded-lg flex items-center justify-center">
              <MapPinCheck color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Choose Destination
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="bg-orange-500 w-20 h-14 rounded-lg flex items-center justify-center">
              <UserRoundCheck color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Check Availability
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="bg-blue-800 w-20 h-14 rounded-lg flex items-center justify-center">
              <CarFront color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Let's Go</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

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

        <div className="relative">
          <div className="absolute top-[-45%] right-[-60%] z-0">
            <Image
              src="/resortcoverbg.png"
              alt="resort"
              width={650}
              height={450}
            />
          </div>

          <div className="relative z-10 top-8">
            <Image
              src="/resortcover.png"
              alt="resort"
              width={370}
              height={150}
            />
          </div>
        </div>
      </section>

     

      <section className="bg-gray-300 flex h-[50%] my-10">
        <div className="bg-red-500 p-1 w-[100%] relative flex flex-col justify-center items-center">
          <Image
            src="/eu6.png"
            alt="explore europe"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute text-center text-white">
            hiiiiiiiiiiiii
          </div>
        </div>
        </section>
      <section className="bg-gray-200 p-6 h-[70%] flex items-center justify-around">
        <div className="w-[30rem] bg-gray-300 p-4">
          <p className="text-orange-500">PROMOTION</p>
          <h1 className="font-bold font-serif text-3xl mb-6">
            We Provide You Best Europe Sightseeing Tours
          </h1>
          <p className="text-sm my-2 text-gray-500">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
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

        <div className="relative w-[20rem] h-[14rem] bg-orange-500 flex items-center justify-center">
          <div className="absolute bg-gray-500 w-64 h-96 rounded-t-full z-10">
            <Image
              src="/eu1.png"
              alt="europe"
              width={656}
              height={450}
              className="w-64 h-96 rounded-t-full"
            />
          </div>

          

          {/* Vertical Typography */}
          <div className="absolute text-4xl font-bold text-gray-400 tracking-widest rotate-90 -right-40 top-2/3 -translate-y-1/2">
            Explore Europe
          </div>

          <div className="absolute bg-blue-500 w-28 h-28 z-20 rounded-lg left-[70%] top-[-34%]">
            <Image src="/eu2.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $700
            </Badge>
          </div>
          <div className="absolute bg-green-500 w-28 h-28 z-30 rounded-lg left-[-15%] top-[84%]">
            <Image src="/eu3.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $800
            </Badge>
          </div>
          <div className="absolute bg-purple-500 w-28 h-28 z-40 rounded-lg left-[-60%] top-[84%]">
            <Image src="/eu4.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $500
            </Badge>
          </div>
          <div className="absolute bg-purple-500 w-28 h-28 z-40 rounded-lg left-[-105%] top-[84%]">
            <Image src="/eu5.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $400
            </Badge>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 flex h-[50%] my-10">
        <div className="bg-red-500 p-1 w-[50%] relative flex flex-col justify-center items-center">
          <Image
            src="/expnature.png"
            alt="explore nature"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute text-center text-white">
            <p className="text-orange-500">PROMOTION</p>
            <h1 className="font-bold font-serif text-4xl mb-6">
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

        <div className="bg-red-500 p-1 w-[50%] relative flex justify-center items-center">
          <Image
            src="/expcities.png"
            alt="explore cities"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute text-center text-white">
            <p className="text-orange-500">PROMOTION</p>
            <h1 className="font-bold font-serif text-4xl mb-6">
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

      <section className="relative w-full h-[80%] my-10">
        <div className="absolute inset-0">
          <Image
            src="/bgtestimonial.png"
            alt="testimonialbackground"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        <div className="absolute bottom-0 left-0">
          <Image
            src="/testimonialimg.png"
            alt="image"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-6 rounded-lg max-w-[90%] md:max-w-none text-center md:text-left flex flex-col justify-center items-center gap-3">
          <p className="text-orange-500">TESTIMONIAL</p>
          <h1 className="font-bold font-serif text-3xl mb-6">
            See What Our Clients Say About Us
          </h1>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-lg shadow-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index+1}>
                  <div className="p-6 flex flex-col justify-center items-center">
                    <Image
                      src="/client1.png"
                      alt="client"
                      width={100}
                      height={100}
                    />
                     <p className="text-xs font-bold">Christine Beckam - Designer</p>
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    <div>
                    <Image
                      src="/quote.png"
                      alt="quote"
                      width={50}
                      height={50}
                      className="absolute"
                    />
                    <p className="relative text-sm text-center my-2 text-gray-500">
                      Et labore harum non nobis ipsum eum molestias mollitia et
                      corporis praesentium a laudantium internos. Non quis eius
                      quo eligendi corrupti et fugiat nulla qui soluta
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
        </div>

    
      </section>
    </main>
  );
}
