import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Gyandev Gupta",
    role: "Lead Instructor",
    bio: "Digital marketing expert with 10+ years experience",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Course Producer",
    bio: "Ensures the highest quality learning experience",
  },
  {
    id: 3,
    name: "Rahul Patel",
    role: "Student Success",
    bio: "Helps students implement what they learn",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Community Manager",
    bio: "Keeps our student community engaged",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The experts who make this course exceptional
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={`/assets/images/team-member-${member.id}.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
