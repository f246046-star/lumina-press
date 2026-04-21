import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight, BookOpen, ShieldAlert } from "lucide-react";
import cyberHero from "@/assets/article-cyber-hero.jpg";
import bookCover from "@/assets/book-self-witness.jpg";

export const Articles = () => {
  return (
    <section id="articles" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/5 h-[360px] w-[360px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container-tight relative">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
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
              Latest <span className="text-gradient-accent">Content</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground max-w-xl"
            >
              An editorial showcase of our newest article and our featured book — layered for depth, built for the curious mind.
            </motion.p>
          </div>
          <Link
            to="/articles/cyber-threats-awareness"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors"
          >
            Read full article <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Layered Showcase */}
        <div className="relative mx-auto max-w-6xl min-h-[640px] md:min-h-[600px] lg:min-h-[560px]">
          {/* BOOK CARD — back-right, slightly rotated */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group/book absolute right-0 top-16 md:top-8 w-[88%] sm:w-[70%] md:w-[46%] lg:w-[44%] z-10 hover:z-30"
            style={{ transformOrigin: "center" }}
          >
            <div className="relative rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 md:p-7 shadow-[0_30px_80px_-20px_hsl(var(--accent)/0.35)] transition-all duration-500 ease-out group-hover/book:rotate-0 group-hover/book:-translate-y-3 group-hover/book:translate-x-0 group-hover/book:shadow-[0_40px_100px_-20px_hsl(var(--accent)/0.55)]">
              {/* Neon outline glow */}
              <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/30 via-purple-500/20 to-blue-500/20 opacity-60 blur-md -z-10" />

              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-purple-300">
                  <BookOpen className="h-3 w-3" /> Featured Book
                </span>
                <span className="rounded-full border border-border/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Non-Fiction
                </span>
              </div>

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-card-hover mb-5">
                <img
                  src={bookCover}
                  alt="The Self as Witness — book cover by Muhammad Raza"
                  loading="lazy"
                  width={960}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/book:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              <h3 className="font-display font-bold text-2xl md:text-[1.6rem] leading-tight">
                The Self as Witness
              </h3>
              <p className="mt-2 text-sm text-accent italic">
                Exploring how the self becomes both subject and suspect in its own gaze.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">By <span className="text-foreground font-medium">Muhammad Raza</span></p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { n: "01", t: "Inner Adversary" },
                  { n: "02", t: "Self-Awareness" },
                  { n: "03", t: "Inner Mastery" },
                ].map((b) => (
                  <div key={b.n} className="rounded-xl bg-secondary/40 border border-border/60 p-2.5 text-center">
                    <div className="text-accent font-display font-bold text-[10px]">{b.n}</div>
                    <div className="mt-0.5 font-display font-semibold text-[11px] leading-tight">{b.t}</div>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-accent-glow hover:scale-[1.02] transition-all"
              >
                Get the Book <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ARTICLE CARD — front, center-left, dominant */}
          <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group/article relative md:absolute md:left-0 md:top-0 w-full md:w-[62%] lg:w-[60%] z-20 hover:z-40 mt-[420px] md:mt-0"
          >
            <Link to="/articles/cyber-threats-awareness" className="block">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-xl shadow-[0_40px_120px_-30px_hsl(var(--accent)/0.5)] transition-all duration-500 ease-out group-hover/article:-translate-y-2 group-hover/article:shadow-[0_50px_140px_-25px_hsl(var(--accent)/0.7)]">
                {/* Outer neon ring */}
                <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/50 via-red-500/30 to-purple-500/30 opacity-70 blur-lg -z-10" />

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cyberHero}
                    alt="As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness"
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/article:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-accent-glow">
                      <ShieldAlert className="h-3.5 w-3.5" /> Cybersecurity
                    </span>
                    <span className="inline-flex items-center rounded-full bg-background/70 backdrop-blur border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-foreground">
                      Intelligence
                    </span>
                  </div>
                  <span className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-accent/40 text-accent text-[10px] font-semibold uppercase tracking-widest">
                    New
                  </span>
                </div>

                <div className="relative p-7 md:p-9">
                  <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-[2rem] leading-tight group-hover/article:text-accent transition-colors">
                    As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed to engineered manipulation and silent breaches.
                  </p>

                  <div className="mt-6 flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-display font-bold text-sm text-accent-foreground">
                        MR
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Muhammad Raza</div>
                        <div className="text-xs text-muted-foreground inline-flex items-center gap-3">
                          <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> Apr 18, 2026</span>
                          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> 12 min</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover/article:translate-x-1 group-hover/article:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
