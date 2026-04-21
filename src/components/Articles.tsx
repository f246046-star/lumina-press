import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldAlert, BookOpen, Sparkles } from "lucide-react";
import cyberHero from "@/assets/article-cyber-hero.jpg";
import bookCover from "@/assets/book-self-witness.jpg";

export const Articles = () => {
  return (
    <section id="articles" className="relative py-28 md:py-36 overflow-hidden">
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
        <div className="absolute -top-20 left-1/3 h-[480px] w-[480px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[140px]" />
      </div>

      <div className="container-tight relative">
        {/* Editorial header — magazine masthead */}
        <div className="relative mb-20">
          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-accent">Issue 04 · 2026</span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 font-display font-black text-center text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            The <span className="italic font-light text-gradient-accent">Latest</span>
            <br />
            <span className="relative inline-block">
              Dispatch
              <Sparkles className="absolute -top-2 -right-8 h-6 w-6 text-accent" />
            </span>
          </motion.h2>
          <p className="mt-6 text-center text-muted-foreground max-w-xl mx-auto">
            One article. One book. Two perspectives on what it means to think clearly in a fractured age.
          </p>
        </div>

        {/* Asymmetric editorial split */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          {/* LEFT — Article (8 cols, tall hero-style) */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 group/article relative"
          >
            <Link to="/articles/cyber-threats-awareness" className="block h-full">
              <div className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 bg-card/40 backdrop-blur-sm transition-all duration-500 group-hover/article:border-accent/40">
                {/* Number marker */}
                <div className="absolute top-6 left-6 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  № 01 — Article
                </div>

                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={cyberHero}
                    alt="As Cyber Threats Accelerate"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover/article:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-purple-500/10 mix-blend-overlay" />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10 -mt-20 md:-mt-28">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent text-accent-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
                      <ShieldAlert className="h-3 w-3" /> Cybersecurity
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      12 min read · Apr 18
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-2xl group-hover/article:text-accent transition-colors duration-500">
                    As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness
                  </h3>

                  <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-xl line-clamp-2">
                    In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-dashed border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-display font-bold text-xs text-accent-foreground">
                        MR
                      </div>
                      <span className="text-sm font-semibold">Muhammad Raza</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover/article:gap-3 transition-all">
                      Continue reading <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* RIGHT — Book (4 cols, vertical poster) */}
          <motion.aside
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 group/book relative flex flex-col"
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-card/60 via-card/30 to-card/60 backdrop-blur-sm p-7 md:p-8 transition-all duration-500 group-hover/book:border-purple-400/40">
              {/* Vertical spine label */}
              <div className="absolute right-3 top-8 bottom-8 flex items-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground rotate-180" style={{ writingMode: "vertical-rl" }}>
                  № 02 — Featured Book
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-300">
                  Non-Fiction
                </span>
              </div>

              {/* Book cover with floating shadow */}
              <div className="relative mx-auto w-[78%] aspect-[3/4] mb-6">
                <div aria-hidden className="absolute inset-0 translate-y-6 scale-95 rounded-xl bg-purple-500/30 blur-2xl" />
                <div className="relative h-full rounded-lg overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover/book:-translate-y-2 group-hover/book:rotate-[-2deg]">
                  <img
                    src={bookCover}
                    alt="The Self as Witness"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                  The Self as Witness
                </h3>
                <p className="mt-1.5 text-[11px] text-accent italic px-2">
                  Subject and suspect in its own gaze.
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  By Muhammad Raza
                </p>
              </div>

              {/* Benefits — minimal vertical list */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Recognize the inner adversary",
                  "Cultivate deep self-awareness",
                  "A framework for inner mastery",
                ].map((b, i) => (
                  <div key={b} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-accent font-bold mt-px">0{i + 1}</span>
                    <span className="text-muted-foreground leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center gap-2 w-full rounded-full border border-accent/40 bg-accent/10 text-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Get the Book <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
