import React from "react";
import { motion } from "framer-motion";
import { data } from "../assets/data";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {data.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {data.hero.subtitle}
        </p>
        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
          >
            {data.hero.cta}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-all"
          >
            {data.hero.secondaryCta}
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-4xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
