import { motion } from "framer-motion";

export default function Stats() {

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "120+", label: "Career Paths" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" },
  ];

  return (

    <section className="py-24 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
          >

            <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {item.number}
            </h1>

            <p className="mt-4 text-gray-400">
              {item.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}