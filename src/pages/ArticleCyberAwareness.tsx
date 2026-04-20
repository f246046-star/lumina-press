import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ShieldAlert, Eye, AlertTriangle, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import hero from "@/assets/article-cyber-hero.jpg";
import img1 from "@/assets/article-cyber-1.jpg";
import img2 from "@/assets/article-cyber-2.jpg";

const ArticleCyberAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-24">
        {/* Header */}
        <header className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest">
              Cybersecurity · Featured
            </span>

            <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              As Cyber Threats Accelerate, <span className="text-gradient-accent">Human Awareness</span> Remains the Critical Weakness
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl">
              In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-5">
              <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> <span className="font-medium text-foreground">Muhammad Raza</span></span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> Apr 18, 2026</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min read</span>
            </div>
          </motion.div>
        </header>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="container-tight mt-12"
        >
          <div className="max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden border border-border shadow-card-hover">
            <img src={hero} alt="Cyber threats and awareness" className="w-full h-full object-cover" width={1536} height={864} />
          </div>
        </motion.div>

        {/* Body */}
        <div className="container-tight mt-16">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <p className="text-lg leading-relaxed text-foreground/90">
              In the race to digitise modern life, convenience has become the defining principle. From children navigating smartphones before they can write, to transport networks and public infrastructure running on interconnected systems, technology is no longer simply a tool—it is the environment in which we live. Yet as this environment expands, so too does its exposure to risk. The unsettling reality is that while cyber threats are accelerating, human awareness is not evolving alongside them.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Recent figures from the National Cyber Security Centre illustrate the scale of the challenge. In 2025, the UK experienced <span className="text-accent font-semibold">204 nationally significant cyber attacks</span>—more than double the 89 recorded the previous year. Government data further indicates that nearly 43% of businesses identified breaches or attacks, with around one in five experiencing cyber crime directly. Globally, the trajectory is similarly concerning: thousands of breaches occur annually, while more than 30,000 new vulnerabilities were identified in 2024 alone.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Cyber attacks are becoming more frequent, more sophisticated, and more deeply embedded in everyday systems. But the most persistent vulnerability is not technical—it is human.
            </p>

            {/* Stats strip */}
            <div className="not-prose my-12 grid sm:grid-cols-3 gap-4">
              {[
                { n: "88%", t: "of breaches involve human error", i: Users },
                { n: "93%", t: "of UK cyber crimes are phishing", i: AlertTriangle },
                { n: "181d", t: "avg. time to detect a breach", i: Eye },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl border border-white/10 p-6"
                >
                  <s.i className="h-6 w-6 text-accent" />
                  <div className="mt-3 font-display font-bold text-3xl text-gradient-accent">{s.n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.t}</div>
                </motion.div>
              ))}
            </div>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">The easiest system to breach</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Despite continuous investment in advanced security technologies, human behaviour remains central to the majority of cyber incidents. Research suggests that up to 88% of breaches involve some form of human error. This is not simply carelessness; it reflects a broader culture of passive interaction with technology.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Social engineering has become the dominant method of attack. Rather than attempting to break through hardened systems, attackers target individuals directly—exploiting trust, urgency, and routine behaviour. Phishing alone accounts for approximately 93% of UK cyber crimes, increasingly enhanced by AI-generated messages and deepfake impersonations that are difficult to distinguish from legitimate communication.
            </p>

            <figure className="not-prose my-12">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <img src={img1} alt="Phishing attack visualization" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">The user has become the most accessible entry point into modern systems.</figcaption>
            </figure>

            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              In this landscape, the user is no longer just a participant in the system, but its most accessible entry point. A reused password, a clicked link, or a hastily granted permission can bypass even the most sophisticated defences. Credential theft remains a leading cause of breaches, while email-based attacks continue to serve as a primary infection vector.
            </p>

            <blockquote className="not-prose my-10 border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-2xl md:text-3xl leading-snug">
                "Awareness, in theory, exists. In practice, it rarely translates into consistent behaviour."
              </p>
            </blockquote>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">When breaches go unnoticed</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              If human vulnerability enables attacks, delayed detection allows them to flourish. On average, organisations take 181 days to identify a breach, followed by an additional 60 days to contain it—an eight-month window in which attackers can operate largely undetected.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              During this period, attackers are not idle. They move through systems, escalate privileges, and extract sensitive data, often without triggering immediate alarms. By the time a breach is identified, the damage is not only complete but amplified. According to IBM, the global average cost of a data breach has reached approximately <span className="text-accent font-semibold">$4.44 million</span>, rising further when detection is delayed.
            </p>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">The quiet erosion of privacy</h2>
            <figure className="not-prose my-8">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                <img src={img2} alt="Digital surveillance and privacy erosion" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
              </div>
            </figure>
            <p className="text-lg leading-relaxed text-foreground/90">
              Every breach carries a longer-term consequence: the gradual erosion of personal privacy. Cyber attacks are responsible for around 80% of data breaches, exposing sensitive information such as personal identifiers, login credentials, and financial data.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Unlike physical assets, stolen data does not disappear—it multiplies. Once compromised, it is copied, traded, and redistributed across digital networks, often resurfacing months or years later. This phenomenon—often described as "privacy erosion"—is cumulative.
            </p>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">A failure of public awareness</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              While organisations continue to invest in technical defences, a critical gap remains largely unaddressed: public education. Cybersecurity knowledge is often treated as a specialist skill, rather than a basic life competency. During the Covid-19 pandemic, public health messaging successfully embedded simple protective behaviours into daily life. No equivalent effort exists for cybersecurity.
            </p>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">Rethinking responsibility</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Addressing this imbalance requires a broader shift in how cybersecurity is understood and implemented. Responsibility cannot rest solely with individuals, nor entirely with organisations. It must be shared across systems, design, and public infrastructure. Cybersecurity must be reframed as a public necessity rather than a technical afterthought.
            </p>

            <h2 className="mt-12 font-display font-bold text-3xl md:text-4xl">The cost of inaction</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              The trajectory of cyber threats is unlikely to slow. As artificial intelligence enhances both defensive tools and offensive tactics, the gap between sophisticated attackers and everyday users is likely to widen further. The challenge, then, is not simply technological. It is cultural.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              Until awareness is treated as essential infrastructure—something to be built, maintained, and shared—cybersecurity will remain fundamentally incomplete. And in a world defined by digital dependence, that may prove to be the most critical weakness of all.
            </p>

            {/* Author card */}
            <div className="not-prose mt-16 glass rounded-2xl border border-white/10 p-6 flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-gradient-accent flex items-center justify-center">
                <ShieldAlert className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <div className="font-display font-semibold">Muhammad Raza</div>
                <div className="text-sm text-muted-foreground">Writer, Twelve Lords — covering technology, philosophy, and cybersecurity.</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleCyberAwareness;
