import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/partner1.png", alt: "partner1" },
  { src: "/partner2.png", alt: "partner2" },
  { src: "/partner3.png", alt: "partner3" },
  { src: "/partner4.png", alt: "partner4" },
  { src: "/partner5.png", alt: "partner5" },
];

export default function Partners() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="bg-gray-300 p-6">
      <div className="md:flex md:flex-row justify-center grid grid-cols-2 lg:gap-20 gap-10">
        {partners.map((i, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Image
              key={index}
              src={i.src}
              alt={i.alt}
              width={150}
              height={150}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
