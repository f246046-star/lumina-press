import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, BatteryCharging, Lock, Usb } from "lucide-react";
import cableImg from "@/assets/cyber-cable.png";

const features = [
  { icon: ShieldCheck, title: "Secure Charging Mode", text: "Data lines are physically isolated by default — power only, zero data exchange." },
  { icon: Lock, title: "User-Controlled Data", text: "Data transfer enabled intentionally, only under trusted conditions." },
  { icon: BatteryCharging, title: "60W Fast Charging", text: "Compatible with modern smartphones, tablets, and laptops." },
  { icon: Usb, title: "Hardware-Level Enforcement", text: "Security built into the cable — independent of OS or software." },
];

const threats = [
  { name: "Juice Jacking", text: "Malicious charging stations can attempt to install malware or extract data." },
  { name: "HID Injection", text: "Compromised connections may emulate keyboards to execute unauthorized commands." },
  { name: "Data Interception", text: "Unsecured connections can allow data to be monitored or captured in transit." },
];

export const Tech = () => {
  return (
    <section id="tech" className="relative py-24 md:py-32 bg-secondary/40 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-10 left-10 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="container-tight relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-accent">
            <Cpu className="h-3 w-3" /> Our Technology
          </span>
          <h2 className="mt-5 font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Twelve Lords <span className="text-gradient-accent italic font-light">Cyber Cable</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure Charging. Controlled Data. Total Protection — a hardware-enforced security architecture
            that separates charging from data communication.
          </p>
        </div>

        {/* Hero split */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Product */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div aria-hidden className="absolute -inset-8 bg-gradient-accent opacity-15 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-10 shadow-card-hover">
              <img src={cableImg} alt="Twelve Lords Cyber Cable packaging" className="w-full h-auto object-contain animate-float" />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">
              A controlled security interface, not just an accessory.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Conventional cables allow unrestricted power and data flow, exposing devices to threats the
              moment they connect to an unknown source. The Cyber Cable enforces security at the
              physical layer — eliminating unauthorized communication at the source.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-border bg-card/40 p-4 hover:border-accent/40 transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-gradient-accent flex items-center justify-center shadow-accent-glow mb-3">
                    <f.icon className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-sm">{f.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Threat landscape */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="h-5 w-5 text-accent" />
            <h3 className="font-display font-bold text-2xl md:text-3xl">Threat Landscape</h3>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {threats.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 p-6 hover:border-accent/40 transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Threat 0{i + 1}
                </span>
                <h4 className="mt-2 font-display font-bold text-lg">{t.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            Most commonly encountered in airports, hotels, cafés, and other shared charging locations —
            the Cyber Cable keeps your device protected by default.
          </p>
        </div>

        {/* Specs */}
        <div className="mt-20 rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-8 md:p-12">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">Product Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Variants</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>USB-A → Lightning</li>
                <li>USB-A → USB-C</li>
                <li>USB-C → Lightning</li>
                <li>USB-C → USB-C</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Power</p>
              <p className="text-muted-foreground">Up to 60W fast charging for phones, tablets, and laptops.</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Length</p>
              <p className="text-muted-foreground">1 meter · 2 meters</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2 mt-4">Colour</p>
              <p className="text-muted-foreground">Black · White</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">Modes</p>
              <p className="text-muted-foreground"><strong className="text-foreground">Charge-Only</strong> (default) — power on, data off.</p>
              <p className="text-muted-foreground mt-2"><strong className="text-foreground">Data Mode</strong> — user-controlled, temporary trusted transfer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
