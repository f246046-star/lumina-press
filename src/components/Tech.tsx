import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Zap, Code2, Cloud } from "lucide-react";

const items = [
  { icon: Cpu, title: "AI-assisted editor", text: "Smart suggestions that respect your voice." },
  { icon: Globe, title: "Built for the web", text: "Beautifully fast on every device, everywhere." },
  { icon: Shield, title: "Owned by you", text: "Your content, your data, exportable any time." },
  { icon: Zap, title: "Instant publish", text: "From draft to live in under a second." },
  { icon: Code2, title: "Developer friendly", text: "API and embeds for your own stack." },
  { icon: Cloud, title: "Reliable hosting", text: "99.99% uptime on a global edge network." },
];

export const Tech = () => {
  return (
    <section id="tech" className="relative py-28 md:py-36 bg-secondary/40">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Blog Tech</span>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl">
            The tech that makes it feel <span className="text-gradient-accent">effortless</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Modern foundations so you can focus on the words.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-accent/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow mb-5 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                  <it.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">{it.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
