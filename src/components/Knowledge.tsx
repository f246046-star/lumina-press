import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Compass } from "lucide-react";
import knowledgeImg from "@/assets/knowledge.jpg";

const blocks = [
  { icon: BookOpen, title: "Read deeper", text: "Long-form essays curated by editors who care about ideas." },
  { icon: Lightbulb, title: "Think clearer", text: "Frameworks, mental models, and notes from working creators." },
  { icon: Compass, title: "Explore further", text: "Discover voices and topics you didn't know you'd love." },
];

export const Knowledge = () => {
  return (
    <section id="knowledge" className="relative py-28 md:py-36 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={knowledgeImg}
                alt="Knowledge"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-glass animate-float">
              <div className="text-3xl font-display font-bold text-accent">+240</div>
              <div className="text-xs text-muted-foreground mt-1">books reviewed</div>
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 shadow-glass animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs text-muted-foreground">Reading streak</div>
              <div className="font-display font-bold text-accent">21 days 🔥</div>
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Knowledge & Books
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display font-bold text-4xl md:text-5xl"
            >
              Learn something that <span className="text-gradient-accent">stays</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-muted-foreground max-w-lg"
            >
              We turn the best ideas from books, essays and people into compact insights you can apply this week.
            </motion.p>

            <div className="mt-10 space-y-4">
              {blocks.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex gap-5 p-5 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card-soft transition-all duration-500"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow group-hover:scale-110 transition-transform">
                    <b.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{b.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Book */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 md:mt-32"
        >
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Featured Book</span>
              <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl">
                Now reading from <span className="text-gradient-accent">Twelve Lords</span>
              </h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center glass rounded-3xl p-6 md:p-10 border border-white/10 shadow-card-soft">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/30 via-background to-secondary border border-white/10 shadow-card-hover">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Non-Fiction</span>
                  <h4 className="mt-6 font-display font-bold text-2xl md:text-3xl leading-tight">
                    THE SELF<br />AS WITNESS
                  </h4>
                  <p className="mt-4 text-xs text-muted-foreground italic max-w-[80%]">
                    Exploring how the self becomes both subject and suspect in its own gaze.
                  </p>
                  <div className="mt-auto pt-8 text-xs uppercase tracking-widest text-foreground/70">
                    by Raza
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Non-Fiction · By Raza
              </span>
              <h4 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">
                The Self as Witness
              </h4>
              <p className="mt-2 text-base text-accent italic">
                Exploring how the self becomes both subject and suspect in its own gaze.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                The Self as Witness explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework, transforming ancient insight into actionable discipline.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { n: "01", t: "Recognize the Inner Adversary", d: "Identify hidden patterns and impulses that undermine clarity." },
                  { n: "02", t: "Deep Self-Awareness", d: "Understand your thoughts, emotions, and behaviors at their root." },
                  { n: "03", t: "A Strategy for Mastery", d: "A disciplined framework to regulate and transcend inner limits." },
                ].map((b) => (
                  <div key={b.n} className="rounded-2xl bg-card border border-border p-5 hover:border-accent/50 transition-colors">
                    <div className="text-accent font-display font-bold text-sm">{b.n}</div>
                    <div className="mt-2 font-display font-semibold text-sm">{b.t}</div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold shadow-accent-glow hover:scale-105 transition-all"
                >
                  Get the Book
                </a>
                <a
                  href="#articles"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-all"
                >
                  Read Excerpt
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
