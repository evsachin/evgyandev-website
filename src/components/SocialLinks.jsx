import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaInstagram />,
    name: "Instagram",
    url: "#",
    color: "bg-gradient-to-br from-pink-500 to-purple-600",
  },
  { icon: <FaFacebook />, name: "Facebook", url: "#", color: "bg-blue-600" },
  { icon: <FaTwitter />, name: "Twitter", url: "#", color: "bg-blue-400" },
  { icon: <FaYoutube />, name: "YouTube", url: "#", color: "bg-red-600" },
  { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "bg-blue-700" },
  { icon: <FaWhatsapp />, name: "WhatsApp", url: "#", color: "bg-green-500" },
];

const SocialLinks = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Connect With Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${social.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg opacity-90"
        >
          Daily marketing tips, course updates, and exclusive content
        </motion.p>
      </div>
    </section>
  );
};

export default SocialLinks;
