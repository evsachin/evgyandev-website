import React from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaChartBar } from "react-icons/fa";

const earnings = [
  { month: "Jan", amount: 125000 },
  { month: "Feb", amount: 185000 },
  { month: "Mar", amount: 220000 },
  { month: "Apr", amount: 275000 },
  { month: "May", amount: 320000 },
  { month: "Jun", amount: 410000 },
];

const Earnings = () => {
  const maxAmount = Math.max(...earnings.map((e) => e.amount));

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sample earnings from implementing these strategies
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center mb-8">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FaChartBar className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Monthly Revenue Growth
              </h3>
              <p className="text-gray-600">
                From implementing these strategies
              </p>
            </div>
          </div>

          <div className="h-64 flex items-end space-x-4">
            {earnings.map((item, index) => {
              const height = (item.amount / maxAmount) * 100;
              return (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg relative group"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{item.amount.toLocaleString()}
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-600 font-medium">
                    {item.month}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <FaRupeeSign className="text-gray-400 mr-2" />
            <span className="text-3xl font-bold text-gray-800">
              ₹{earnings[earnings.length - 1].amount.toLocaleString()}
            </span>
            <span className="ml-2 text-green-500 font-medium">+62%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Earnings;
