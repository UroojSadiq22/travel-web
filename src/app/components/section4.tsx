import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function FamousPlaces(){
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
    //     <section className="bg-gray-200 p-6 md:h-[90%] flex md:flex-row flex-col items-center justify-around">
    //     <div className="relative w-[14rem] lg:h-[14rem] h-[30rem] flex items-center justify-center">
    //       <div className="absolute w-72 h-96 rounded-t-full z-10">
    //       <Image src="/service2.jpg" alt="service" width={450} height={450} className="shadow-2xl w-64 h-96 rounded-t-full" />
    //       </div>

          
    //       <div className="absolute text-4xl font-bold text-gray-400 tracking-widest rotate-90 -right-40 top-2/3 -translate-y-1/2">
    //         Famous Places
    //       </div>

    //       <div className="absolute z-20 left-[70%] lg:top-[-34%] top-[4%] bg-gray-500 rounded-full p-1">
    //       <Image src="/service1.jpg" alt="service" width={450} height={450} className="w-24 h-20 rounded-full" />
    //       </div>
          
    //       <div className="absolute z-30 left-[-30%] top-[4%]  bg-gray-500 rounded-full p-1">
    //       <Image src="/service4.jpg" alt="service" width={450} height={450} className="w-28 h-28 rounded-full" />
    //       </div>
    //       <div className="absolute z-40 left-[-30%] top-[40%] bg-gray-500 rounded-full p-1">
    //       <Image src="/service3.jpg" alt="service" width={450} height={450} className="w-20 h-20 rounded-full" />
    //       </div>
    //     </div>

    //     <div className="lg:w-[30rem] md:w-[20rem] w-full bg-gray-300 p-4">
    //       <p className="text-orange-500">CATEGORY</p>
    //       <h1 className="font-bold font-serif md:text-3xl text-2xl mb-6">
    //         We Offer Best Services
    //       </h1>
    //       <p className="text-sm text-center mt-2 text-gray-500">
    //         Et labore harum non nobis ipsum eum molestias mollitia et corporis
    //         praesentium a laudantium internos. Non quis eius quo eligendi
    //         corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
    //         ducimus illum aut optio quibusdam!
    //       </p>
    //       <Button
    //         variant="outline"
    //         className="relative overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
    //       >
    //         <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
    //         <h1 className="relative z-10 font-bold flex items-center gap-2">
    //           View Packages
    //         </h1>
    //       </Button>
    //     </div>
    //   </section>
   

    <motion.section
      className="bg-gray-200 p-6 md:h-[90%] flex md:flex-row flex-col items-center justify-around"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative w-[14rem] lg:h-[14rem] h-[30rem] flex items-center justify-center"
        variants={itemVariants}
      >
        <div className="absolute w-72 h-96 rounded-t-full z-10">
          <Image
            src="/service2.jpg"
            alt="service"
            width={450}
            height={450}
            className="shadow-2xl w-64 h-96 rounded-t-full"
          />
        </div>

        {/* Vertical Typography */}
        <div className="absolute text-4xl font-bold text-gray-400 tracking-widest rotate-90 -right-40 top-2/3 -translate-y-1/2">
          Famous Places
        </div>

        <motion.div
          className="absolute z-20 left-[70%] lg:top-[-34%] top-[4%] bg-gray-500 rounded-full p-1"
          variants={itemVariants}
        >
          <Image
            src="/service1.jpg"
            alt="service"
            width={450}
            height={450}
            className="w-24 h-20 rounded-full"
          />
        </motion.div>

        <motion.div
          className="absolute z-30 left-[-30%] top-[4%] bg-gray-500 rounded-full p-1"
          variants={itemVariants}
        >
          <Image
            src="/service4.jpg"
            alt="service"
            width={450}
            height={450}
            className="w-28 h-28 rounded-full"
          />
        </motion.div>

        <motion.div
          className="absolute z-40 left-[-30%] top-[40%] bg-gray-500 rounded-full p-1"
          variants={itemVariants}
        >
          <Image
            src="/service3.jpg"
            alt="service"
            width={450}
            height={450}
            className="w-20 h-20 rounded-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-[30rem] md:w-[20rem] w-full bg-gray-300 p-4"
        variants={itemVariants}
      >
        <p className="text-orange-500">CATEGORY</p>
        <h1 className="font-bold font-serif md:text-3xl text-2xl mb-6">
          We Offer Best Services
        </h1>
        <p className="text-sm text-center my-2 text-gray-500">
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
    </motion.section>
  

    )
}