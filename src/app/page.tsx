import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AthletesSelected from "@/components/AthletesSelected";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <AthletesSelected />
      <CTA />
      <Footer />
    </main>
  );
}
