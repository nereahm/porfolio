import React from "react";
import principalPic from "../assets/principalPic.jpg";
import { HERO_CONTENT } from "../constants/index";
import {motion} from "framer-motion"

const containerVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100},
  visible: { opacity:1, x: 0, transition: {duration: 0.5}}
}
function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={principalPic}
              alt="Imagen inicial diseño web"
              className="border border-stone-900 rounded-3xl grayscale"
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay:1.5}}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-left lg:items-start mt-10">
            <motion.h2 variants={childVariants} className="pb-2 text-5xl tracking-tighter">
              Nerea Hebles Molina
            </motion.h2>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent">
              Diseño web y marketing digital
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
             variants={childVariants}
              href="/Curriculum Nerea Hebles Molina.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Descargar CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
