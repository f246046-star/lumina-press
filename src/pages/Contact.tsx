import { useState } from "react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Send, Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@twelvelords.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-1212" },
  { icon: MapPin, label: "Studio", value: "Remote · Worldwide" },
];

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Please check your inputs",
        description: parsed.error.issues[0]?.message ?? "Invalid form",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-40 pb-24">
        <section className="container-tight">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact Us
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
              Let's start a <span className="text-accent">conversation</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have a question, a story to share, or a project to build with us? Reach out — we read every message.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              {channels.map((c) => (
                <div key={c.label} className="glass rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
                <div className="mt-3 flex items-center gap-2">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/80 hover:text-accent-foreground hover:bg-accent hover:border-accent transition-all"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="lg:col-span-7 glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    name="name"
                    required
                    maxLength={100}
                    className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                <input
                  name="subject"
                  required
                  maxLength={150}
                  className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us a little about your idea..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold shadow-accent-glow hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
