import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const IntroVideo = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See What You'll Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch this quick intro to see if this course is right for you
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/assets/images/course-thumbnail.jpg"
              alt="Course Preview"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full p-6 shadow-lg"
              aria-label="Play video"
            >
              <FaPlay className="text-2xl" />
            </motion.button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <p className="font-medium">
              "How This Course Changed My Business" - 2:34 min
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroVideo;
