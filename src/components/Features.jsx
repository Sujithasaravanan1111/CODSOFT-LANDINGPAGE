export default function Features() {

  const features = [
    "AI Resume Analysis",
    "Career Roadmaps",
    "Interview Preparation",
    "Certifications"
  ];

  return (

    <section className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-20">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {features.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:scale-105 transition backdrop-blur-xl"
          >

            <h3 className="text-2xl font-bold">
              {item}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );

}