import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Eye, Compass, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import bookCover from "@/assets/book-self-witness.jpg";

const benefits = [
  {
    icon: Eye,
    title: "Recognition of the Inner Adversary",
    text: "Cultivate the ability to identify the “inner suspect”—the hidden patterns, impulses, and tendencies that undermine your discipline and clarity.",
  },
  {
    icon: Compass,
    title: "Deep Self-Awareness and Insight",
    text: "Develop a heightened awareness of your inner world, gaining knowledge of your thoughts, emotions, and behaviors at their root.",
  },
  {
    icon: Shield,
    title: "A Structured Strategy for Inner Mastery",
    text: "Formulate a disciplined and practical framework to confront, regulate, and ultimately transcend the limitations of your inner self.",
  },
];

const BookSelfWitness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-tight">
          <Link
            to="/#articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Dispatch
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Cover */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="relative">
                <div aria-hidden className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-purple-500/15 to-transparent blur-3xl rounded-[2rem]" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-card-hover bg-card">
                  <img src={bookCover} alt="The Self as Witness book cover" className="w-full h-auto" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-border p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Genre</p>
                  <p className="mt-1 text-sm font-semibold">Non-Fiction</p>
                </div>
                <div className="rounded-xl border border-border p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Author</p>
                  <p className="mt-1 text-sm font-semibold">Raza</p>
                </div>
                <div className="rounded-xl border border-border p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Pages</p>
                  <p className="mt-1 text-sm font-semibold">240</p>
                </div>
              </div>
            </aside>

            {/* Details */}
            <article className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 text-accent px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em]">
                <BookOpen className="h-3 w-3" /> Featured Book
              </div>
              <h1 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight">
                The Self <span className="italic font-light text-gradient-accent">as Witness</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground italic">
                Exploring how the self becomes both subject and suspect in its own gaze.
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                By Raza
              </p>

              <div className="mt-10 prose-lg max-w-none">
                <h2 className="font-display font-bold text-2xl mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <em>The Self as Witness</em> explores the timeless struggle for self-mastery—the internal battle that has defined the human condition across history. Drawing from the wisdom of great thinkers, it distills profound philosophies into a clear, practical framework. Rather than remaining abstract, this book transforms ancient insight into actionable discipline, guiding you to apply self-awareness and control in your everyday life.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="font-display font-bold text-2xl">3 Key Benefits</h2>
                <div className="mt-6 space-y-5">
                  {benefits.map((b, i) => (
                    <div
                      key={b.title}
                      className="group relative rounded-2xl border border-border bg-card/60 p-6 hover:border-accent/40 transition-all duration-500"
                    >
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow">
                          <b.icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                            0{i + 1} — Benefit
                          </p>
                          <h3 className="mt-1 font-display font-semibold text-lg">{b.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold shadow-accent-glow hover:scale-105 transition-transform"
                >
                  Get the Book
                </Link>
                <Link
                  to="/#articles"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  Back to Dispatch
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookSelfWitness;
