import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 text-center px-6">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >

          Build Your <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Career With AI
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.5 }}
          className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto"
        >

          Generate roadmaps, optimize resumes, prepare for interviews, and grow your career using intelligent AI tools.

        </motion.p>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1 }}
          className="mt-10 flex gap-6 justify-center flex-wrap"
        >

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition text-lg font-semibold">
            Start Free
          </button>

          <button className="px-8 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400/10 transition text-lg">
            Watch Demo
          </button>

        </motion.div>

      </div>

    </section>

  );

}