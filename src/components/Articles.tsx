import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import cyberHero from "@/assets/article-cyber-hero.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";
import bookCover from "@/assets/book-self-witness.jpg";

const articles = [
  {
    img: cyberHero,
    cat: "Cybersecurity",
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    desc: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    author: "Muhammad Raza",
    date: "Apr 18, 2026",
    read: "12 min",
    href: "/articles/cyber-threats-awareness",
    featured: true,
  },
  {
    img: a2,
    cat: "Tech",
    title: "Why Edge Computing Will Reshape The Web",
    desc: "How moving compute closer to users is rewriting the rules of performance, privacy, and product design.",
    author: "Daniel Cho",
    date: "Apr 09, 2026",
    read: "9 min",
    href: "#articles",
  },
  {
    img: a3,
    cat: "Knowledge",
    title: "How Reading Slowly Changes Your Mind",
    desc: "The neuroscience of deep reading — and why slowing down may be the most radical productivity hack.",
    author: "Iris Bennett",
    date: "Apr 02, 2026",
    read: "5 min",
    href: "#articles",
  },
];

export const Articles = () => {
  return (
    <section id="articles" className="relative py-28 md:py-36">
      <div className="container-tight">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Featured
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-2xl"
            >
              Latest <span className="text-gradient-accent">Articles</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground max-w-xl"
            >
              Hand-picked stories from writers and thinkers across the web.
            </motion.p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors"
          >
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((a, i) => {
            const isInternal = a.href?.startsWith("/");
            const Wrapper: any = isInternal ? Link : "a";
            const wrapperProps = isInternal ? { to: a.href } : { href: a.href };
            return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
            >
              <Wrapper {...wrapperProps} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {a.cat}
                  </span>
                  {a.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-accent/40 text-accent text-[10px] font-semibold uppercase tracking-widest">
                      New
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl leading-snug group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {a.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{a.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.read}</span>
                    </div>
                  </div>
                </div>
              </Wrapper>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.article>
            );
          })}
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
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-card-hover">
                <img
                  src={bookCover}
                  alt="The Self as Witness by Raza — book cover"
                  loading="lazy"
                  width={960}
                  height={1280}
                  className="w-full h-full object-cover"
                />
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
