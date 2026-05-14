import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import DashboardPreview from "../components/DashboardPreview";
export default function Home() {

  return (

    <div className="bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <Hero />
      <Stats />
      <Features />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <Footer />

    </div>

  );

}