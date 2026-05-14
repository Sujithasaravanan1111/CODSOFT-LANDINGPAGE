import { motion } from "framer-motion";
import { FaChartLine, FaBrain, FaUserGraduate } from "react-icons/fa";

export default function DashboardPreview() {

  return (

    <section className="py-32 px-8 relative overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HEADING */}

      <div className="text-center mb-20 relative z-10">

        <motion.h1
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-6xl font-black"
        >

          AI Career Dashboard

        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg">
          Monitor your growth, interview progress, and career roadmap using intelligent AI analytics.
        </p>

      </div>

      {/* DASHBOARD */}

      <motion.div
        initial={{ opacity:0, scale:0.9 }}
        whileInView={{ opacity:1, scale:1 }}
        transition={{ duration:1 }}
        className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl relative z-10 shadow-2xl"
      >

        {/* TOP CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="bg-slate-900/60 border border-cyan-500/20 rounded-3xl p-8">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl">
                <FaChartLine />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  92%
                </h2>

                <p className="text-gray-400">
                  Resume Score
                </p>

              </div>

            </div>

            <div className="mt-8 w-full h-3 bg-slate-700 rounded-full overflow-hidden">

              <motion.div
                initial={{ width:0 }}
                whileInView={{ width:"92%" }}
                transition={{ duration:1.5 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

            </div>

          </div>

          {/* CARD 2 */}

          <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-8">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl">
                <FaBrain />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  145
                </h2>

                <p className="text-gray-400">
                  AI Interview Questions
                </p>

              </div>

            </div>

            <div className="mt-8 flex gap-2">

              <div className="w-12 h-12 rounded-full bg-purple-500/30"></div>
              <div className="w-12 h-12 rounded-full bg-purple-500/50"></div>
              <div className="w-12 h-12 rounded-full bg-purple-500/70"></div>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="bg-slate-900/60 border border-pink-500/20 rounded-3xl p-8">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-2xl">
                <FaUserGraduate />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  12
                </h2>

                <p className="text-gray-400">
                  Certifications Earned
                </p>

              </div>

            </div>

            <div className="mt-8 flex gap-3">

              <div className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                AI
              </div>

              <div className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                React
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM ANALYTICS */}

        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* ROADMAP */}

          <div className="bg-slate-900/60 rounded-3xl p-8 border border-white/10">

            <h2 className="text-2xl font-bold mb-8">
              Career Roadmap
            </h2>

            <div className="space-y-6">

              {[
                "Frontend Fundamentals",
                "React Mastery",
                "Backend APIs",
                "System Design"
              ].map((item, index) => (

                <div key={index} className="flex items-center gap-4">

                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

                  <p className="text-gray-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ANALYTICS */}

          <div className="bg-slate-900/60 rounded-3xl p-8 border border-white/10">

            <h2 className="text-2xl font-bold mb-8">
              Weekly Analytics
            </h2>

            <div className="flex items-end gap-4 h-56">

              {[40,70,55,90,65,85,100].map((height,index)=>(

                <motion.div
                  key={index}
                  initial={{ height:0 }}
                  whileInView={{ height:`${height}%` }}
                  transition={{ duration:1, delay:index*0.1 }}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-purple-500"
                />

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );

}