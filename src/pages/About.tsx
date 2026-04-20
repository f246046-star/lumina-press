import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, BookOpen, Cpu, Sparkles } from "lucide-react";

const paragraphs = [
  "Twelve Lords is driven by a singular mission: to educate, inform, and elevate. We are committed to providing accurate, well-researched knowledge that empowers individuals with clarity, self-awareness, and a defined path toward personal and intellectual development.",
  "Our work spans across current affairs, history, philosophy, and technology, delivered through thoughtfully crafted articles, books, and video content. Whether through daily publications or long-form works, our goal is to translate complex ideas into accessible, practical insight that can be applied in everyday life.",
  "Beyond knowledge, Twelve Lords is also at the forefront of technological innovation. Our dedicated tech team is actively developing modern hardware solutions embedded with secure cybersecurity frameworks. We believe that security should not be an afterthought, but a fundamental component of every product.",
  "What sets us apart from contemporary industries is our unwavering emphasis on data protection and user safety, even in everyday technology. Through our products, we aim not only to provide functionality, but also to educate users on cybersecurity awareness, fostering a deeper understanding of digital risks and the importance of data integrity.",
  "At Twelve Lords, we do not simply create content or products—we build systems of knowledge and security designed to strengthen both the mind and the modern digital life.",
];

const pillars = [
  { icon: BookOpen, title: "Knowledge", desc: "Articles, books and video on history, philosophy & current affairs." },
  { icon: Cpu, title: "Technology", desc: "Modern hardware engineered with security at its core." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Data protection and user safety built into every product." },
  { icon: Sparkles, title: "Education", desc: "Translating complex ideas into practical, everyday insight." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-40 pb-24">
        <section className="container-tight">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
              Building systems of <span className="text-accent">knowledge</span> & <span className="text-accent">security</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {paragraphs[0]}
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              {paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 content-start">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
