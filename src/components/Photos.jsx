import React from "react";
import { motion } from "framer-motion";

const photos = [
  { id: 1, alt: "Workshop Session" },
  { id: 2, alt: "Client Meeting" },
  { id: 3, alt: "Award Ceremony" },
  { id: 4, alt: "Team Event" },
  { id: 5, alt: "Speaking Engagement" },
  { id: 6, alt: "Training Session" },
];

const Photos = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Behind The Scenes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in digital marketing through the years
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={`/assets/images/gallery-${photo.id}.jpg`}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
