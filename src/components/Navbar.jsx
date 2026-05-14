import { motion } from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          SkillForge AI
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">

          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Features</a>
          <a href="#" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#" className="hover:text-cyan-400 transition">Testimonials</a>

        </div>

        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition">
          Get Started
        </button>

      </div>

    </motion.nav>

  );

}