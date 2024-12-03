import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EuropePlaces() {
 
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section

      className="bg-gray-200 p-6 lg:h-[90%] py-20 flex lg:flex-row flex-col-reverse items-center justify-around"
    >
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
        className="md:w-[30rem] bg-gray-300 p-6 rounded-lg"
      >
        <p className="text-orange-500">PROMOTION</p>
        <h1 className="font-bold font-serif lg:text-3xl text-2xl mb-6">
          We Provide You Best Europe Sightseeing Tours
        </h1>
        <p className="text-sm my-2 text-gray-500">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
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

      <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} variants={itemVariants} className="relative w-[20rem] h-[14rem] bg-orange-500 flex items-center justify-center lg:my-0 my-28">
        <div className="absolute bg-gray-500 w-64 h-96 rounded-t-full z-10">
          <Image
            src="/eu1.png"
            alt="europe"
            width={656}
            height={450}
            className="w-64 h-96 rounded-t-full"
          />
        </div>

        <div className="absolute md:text-4xl text-3xl font-bold text-gray-400 tracking-widest rotate-90 md:-right-40 -right-28 md:top-2/3 top-3/4 -translate-y-1/2">
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

        <div className="absolute flex lg:flex-row flex-col gap-10 sm:right-[75%] right-[65%] lg:top-[84%] z-30">
          <div className=" bg-green-500 w-28 h-28  rounded-lg ">
            <Image src="/eu3.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $800
            </Badge>
          </div>
          <div className=" bg-purple-500 w-28 h-28 rounded-lg ">
            <Image src="/eu4.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $500
            </Badge>
          </div>
          <div className=" bg-purple-500 w-28 h-28  rounded-lg ">
            <Image src="/eu5.png" alt="europe" width={450} height={450} />
            <Badge
              variant="outline"
              className="absolute bg-orange-500 top-2 py-0 right-2 text-xs text-gray-700"
            >
              $400
            </Badge>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
