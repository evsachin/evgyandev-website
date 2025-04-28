import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Gyandev Gupta
            </h3>
            <p className="mb-6">
              Helping entrepreneurs and marketers succeed in the digital world
              through practical, results-driven education.
            </p>
            <p>
              © {currentYear} Digital Marketing Mastery. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#course"
                  className="hover:text-white transition-colors"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-4 text-indigo-400" />
                <span>123 Marketing St, Digital City, India 110001</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-4 text-indigo-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-4 text-indigo-400" />
                <span>gyandev@digitalmastery.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p>Made with ❤️ for digital marketers and entrepreneurs</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
