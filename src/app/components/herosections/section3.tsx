import Image from "next/image"
import { motion } from "framer-motion";


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

export default function Services(){
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    return(
        <section className="md:p-6 py-8 lg:h-[70%] flex flex-col items-center justify-center">
        <p className="text-orange-500">CATEGORY</p>
        <h1 className="font-bold font-serif md:text-3xl text-2xl mb-12">
          We Offer Best Services
        </h1>
        <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}  className="flex lg:flex-row flex-col justify-center gap-10 hover:cursor-pointer">
          {services.map((i, index) => (
            <div key={index} className="relative group transform transition-transform duration-300 hover:scale-110">
              <div className="bg-orange-500 w-14 h-14 rounded-lg absolute bottom-[-12px] left-[-14px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="shadow-2xl bg-white p-4 lg:w-[14rem] w-[18rem] rounded-xl flex flex-col items-center justify-center relative z-10">
                <Image
                 
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
        </motion.div>
      </section>
    )
}