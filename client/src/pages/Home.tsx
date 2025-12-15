import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Widgets from "@/components/Widgets";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ScrollTopButton from "@/components/ScrollTopButton";

/**
 * Design Philosophy: Modern Corporate with Dynamism
 * - Typography: Poppins (headers) + Inter (body)
 * - Colors: Green #00D084 (action), Black #0A0A0A (structure), White #F8F8F8 (space)
 * - Layout: Asymmetric hero, 3-column grid for widgets, alternating sections
 * - Animations: Fade-in on scroll, hover lift, pulse badges, counter animations
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Widgets />
        <Plans />
        <FAQ />
      </main>
      <Footer />
      <Cart />
      <ScrollTopButton />
    </div>
  );
}
