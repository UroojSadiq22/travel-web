import { Button } from "@/components/ui/button";
import { CarFront, MapPinCheck, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import {motion} from "framer-motion"

export default function Booking(){
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    return(
        <motion.section initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants} className="p-6 lg:py-0 py-24 lg:h-full flex md:flex-row flex-col-reverse items-center justify-center lg:gap-10">
        <motion.div variants={itemVariants} className="md:w-[30rem] bg-gray-200 md:p-6 p-4 rounded-lg">
          <p className="text-orange-500">FAST & EASY</p>
          <h1 className="font-bold font-serif md:text-3xl text-2xl mb-6">
            Get Your Favourite Resort Bookings
          </h1>
          <div className="flex flex-row justify-center items-center lg:gap-8 gap-2 mb-6">
            <div className="bg-yellow-500 w-20 lg:h-14 h-10 rounded-lg flex items-center justify-center">
              <MapPinCheck color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Choose Destination
              </h1>
              <p className="lg:text-sm text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center lg:gap-8 gap-2 mb-6">
            <div className="bg-orange-500 w-20 lg:h-14 h-10 rounded-lg flex items-center justify-center">
              <UserRoundCheck color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">
                Check Availability
              </h1>
              <p className="lg:text-sm text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center lg:gap-8 gap-2 mb-6">
            <div className="bg-blue-800 w-20 lg:h-14 h-10 rounded-lg flex items-center justify-center">
              <CarFront color="#ffffff" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Let's Go</h1>
              <p className="lg:text-sm text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="relative w-full overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
          >
            <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
            <h1 className="relative z-10 font-bold flex items-center gap-2">
              View Packages
            </h1>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute md:top-[-35%] top-[-10%] md:right-[-60%] right-[-35%] z-0 ">
            <Image
              src="/resortcoverbg.png"
              alt="resort"
              width={650}
              height={450}
            />
          </div>

          <div className="relative z-10 top-16">
            <Image
              src="/resortcover.png"
              alt="resort"
              width={370}
              height={150}
            />
          </div>
        </motion.div>
      </motion.section> 
    )
}