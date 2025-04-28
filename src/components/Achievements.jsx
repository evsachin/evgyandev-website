import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-3xl" />,
    title: "Award Winner",
    description: "Digital Marketer of the Year 2022",
  },
  {
    icon: <FaCertificate className="text-3xl" />,
    title: "Certified Expert",
    description: "Google Ads & Meta Blueprint Certified",
  },
  {
    icon: <FaUserTie className="text-3xl" />,
    title: "10+ Years",
    description: "Industry Experience",
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "100M+",
    description: "Ad Spend Managed",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Credentials
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Trusted by thousands of students and businesses worldwide
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 text-center"
            >
              <div className="text-orange-300 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="opacity-80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
