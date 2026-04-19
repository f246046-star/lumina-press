import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { Knowledge } from "@/components/Knowledge";
import { BecomeWriter } from "@/components/BecomeWriter";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Articles />
        <Knowledge />
        <BecomeWriter />
        <Testimonials />
        <Tech />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
