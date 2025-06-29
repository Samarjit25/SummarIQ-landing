"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";

export default function Partners() {
  // svg icons provided by https://svgl.app/
  const icons = [
  {
    name: "NovaForge",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219775/Screenshot_2025-06-29_232206-removebg-preview_wgkhgu.png",
  },
  {
    name: "HyperCloud",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219965/3_nfcmyh.png",
  },
  {
    name: "Zenbyte",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219775/2_oppn3d.png",
  },
  {
    name: "BitFlow",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219775/5_o0etgt.png",
  },
  {
    name: "CloudMint",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219775/1_hf53sj.png",
  },
  {
    name: "VortexAI",
    img: "https://res.cloudinary.com/dz2mlxltd/image/upload/v1751219775/4_alspic.png",
  },
];


  return (
    <section className="max-w-screen-md w-full mx-auto px-4 py-24 gap-10 md:px-8 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold tracking-tighter sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Our Partners
        </h2>
      </motion.div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-6 grid-rows-3 sm:grid-rows-1 gap-5 place-items-center">
        {icons.map((icon, index) => (
          <Tooltip content={icon.name} key={icon.name}>
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: "spring",
                bounce: 0,
              }}
            >
              <img
  src={icon.img}
  alt={icon.name}
  className="w-12 h-12 object-contain"
/>
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
