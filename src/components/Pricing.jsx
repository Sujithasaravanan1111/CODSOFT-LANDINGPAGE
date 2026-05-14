export default function Pricing() {

  const plans = [
    {
      title: "Free",
      price: "$0",
      features: ["Basic AI Tools", "Resume Analysis"]
    },
    {
      title: "Pro",
      price: "$19",
      features: ["Advanced AI", "Unlimited Roadmaps"]
    },
    {
      title: "Enterprise",
      price: "$49",
      features: ["Team Access", "Priority Support"]
    }
  ];

  return (

    <section className="py-24 px-8">

      <h1 className="text-5xl font-bold text-center mb-20">
        Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:scale-105 transition"
          >

            <h2 className="text-3xl font-bold">
              {plan.title}
            </h2>

            <h1 className="text-6xl font-black mt-6">
              {plan.price}
            </h1>

            <div className="mt-8 flex flex-col gap-4">

              {plan.features.map((feature, i) => (
                <p key={i} className="text-gray-400">
                  ✓ {feature}
                </p>
              ))}

            </div>

            <button className="mt-10 w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
              Choose Plan
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}