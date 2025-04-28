import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const Course = () => {
  const features = [
    "30+ Video Modules",
    "Downloadable Resources",
    "Private Community Access",
    "Live Q&A Sessions",
    "Certificate of Completion",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Master Digital Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive course covering everything from SEO to paid ads
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <FaPlayCircle className="text-white text-6xl opacity-90" />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                Course Preview
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Premium Digital Marketing Mastery
              </h3>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-500">One-time payment</p>
                  <p className="text-3xl font-bold text-indigo-600">₹9,999</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full"
                >
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                What You'll Learn
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• SEO strategies that actually work in 2023</li>
                <li>• Facebook & Instagram ad mastery</li>
                <li>• Google Ads from beginner to expert</li>
                <li>• Content marketing that converts</li>
                <li>• Email marketing automation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-indigo-600 rounded-xl shadow-md text-white"
            >
              <h4 className="text-xl font-semibold mb-3">
                30-Day Money-Back Guarantee
              </h4>
              <p>
                If you're not satisfied with the course, get a full refund
                within 30 days. No questions asked.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
