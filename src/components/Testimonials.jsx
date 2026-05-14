export default function Testimonials() {

  const reviews = [
    {
      name: "Sophia",
      text: "SkillForge AI completely changed my interview preparation journey."
    },
    {
      name: "Daniel",
      text: "The AI roadmap feature helped me become a frontend developer."
    },
    {
      name: "Aarav",
      text: "One of the best AI career platforms I’ve ever used."
    }
  ];

  return (

    <section className="py-24 px-8">

      <h1 className="text-5xl font-bold text-center mb-20">
        What Users Say
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition"
          >

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"></div>

            <p className="text-gray-300 leading-relaxed">
              "{review.text}"
            </p>

            <h3 className="mt-6 text-xl font-bold">
              {review.name}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );

}