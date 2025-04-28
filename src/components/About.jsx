import React from "react";
import { motion } from "framer-motion";
import { data } from "../assets/data";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-indigo-600">Gyandev Gupta</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {data.about.text}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {data.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center border border-gray-100"
                >
                  <p className="text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/gyandev-profile.jpg"
                alt="Gyandev Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
