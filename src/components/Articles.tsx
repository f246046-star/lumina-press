import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldAlert, BookOpen, Sparkles } from "lucide-react";
import cyberHero from "@/assets/article-cyber-hero.jpg";
import bookCover from "@/assets/book-self-witness.jpg";

export const Articles = () => {
  return (
    <section id="articles" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background grid + glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-20 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-[280px] w-[280px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="container-tight relative">
        {/* Editorial header — magazine masthead */}
        <div className="relative mb-10">
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-accent">Issue 04 · 2026</span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-display font-black text-center text-3xl md:text-5xl leading-[0.95] tracking-tight"
          >
            The <span className="italic font-light text-gradient-accent">Latest</span>{" "}
            <span className="relative inline-block">
              Dispatch
              <Sparkles className="absolute -top-1 -right-6 h-4 w-4 text-accent" />
            </span>
          </motion.h2>
          <p className="mt-3 text-center text-sm text-muted-foreground max-w-md mx-auto">
            One article. One book. Two perspectives on what it means to think clearly in a fractured age.
          </p>
        </div>

        {/* Asymmetric editorial split */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT — Article (8 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 group/article relative"
          >
            <Link to="/articles/cyber-threats-awareness" className="block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-card/40 backdrop-blur-sm transition-all duration-500 group-hover/article:border-accent/40">
                <div className="absolute top-4 left-4 z-20 font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                  № 01 — Article
                </div>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cyberHero}
                    alt="As Cyber Threats Accelerate"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover/article:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                <div className="relative p-5 md:p-7 -mt-16">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent text-accent-foreground px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">
                      <ShieldAlert className="h-3 w-3" /> Cybersecurity
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                      12 min · Apr 18
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl leading-[1.1] tracking-tight max-w-xl group-hover/article:text-accent transition-colors duration-500">
                    As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-lg line-clamp-2">
                    In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4 pt-4 border-t border-dashed border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-display font-bold text-[10px] text-accent-foreground">
                        MR
                      </div>
                      <span className="text-xs font-semibold">Muhammad Raza</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover/article:gap-2.5 transition-all">
                      Read <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* RIGHT — Book (4 cols) */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 group/book relative flex flex-col"
          >
            <Link to="/books/self-as-witness" className="block h-full">
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-card/60 via-card/30 to-card/60 backdrop-blur-sm p-5 md:p-6 transition-all duration-500 group-hover/book:border-purple-400/40">
                <div className="absolute right-2 top-6 bottom-6 flex items-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground rotate-180" style={{ writingMode: "vertical-rl" }}>
                    № 02 — Book
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-purple-300">
                    Non-Fiction
                  </span>
                </div>

                <div className="relative mx-auto w-[65%] aspect-[3/4] mb-4">
                  <div aria-hidden className="absolute inset-0 translate-y-4 scale-95 rounded-xl bg-purple-500/30 blur-2xl" />
                  <div className="relative h-full rounded-md overflow-hidden border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover/book:-translate-y-1.5 group-hover/book:rotate-[-2deg]">
                    <img
                      src={bookCover}
                      alt="The Self as Witness"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-display font-bold text-base md:text-lg leading-tight">
                    The Self as Witness
                  </h3>
                  <p className="mt-1 text-[10px] text-accent italic px-2">
                    Subject and suspect in its own gaze.
                  </p>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    By Raza
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center justify-center gap-1.5 w-full rounded-full border border-accent/40 bg-accent/10 text-accent px-4 py-2 text-xs font-semibold group-hover/book:bg-accent group-hover/book:text-accent-foreground transition-all">
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
