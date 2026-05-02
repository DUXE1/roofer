import { Zap, DollarSign, UserCheck, Heart, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  { icon: Zap, title: "Fast Response Times", text: "Most emergency call-outs answered within the hour. Same-day for non-urgent work." },
  { icon: DollarSign, title: "Fixed-Price Quotes", text: "Clear, written prices before we start. No hourly surprises, no hidden extras." },
  { icon: UserCheck, title: "Qualified Roofers", text: "Fully certified, CompetentRoofer registered tradesmen — never subcontracted juniors." },
  { icon: Heart, title: "Local Trusted Service", text: "Family-run, community-based, and rated 4.9★ by 847 verified neighbours." },
];

const guarantees = [
  "Up to 25-year guarantee on every roofing job",
  "Fixed-price written quotes — no hourly surprises",
  "CompetentRoofer registered, fully insured £2M",
  "Clean, uniformed roofers who respect your home",
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="section-y relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(210_90%_50%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,hsl(214_70%_28%/0.4),transparent_50%)]" />

      <div className="container-x relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow !text-accent">Why SKOP</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Roofers You Can Actually{" "}
              <span className="text-accent">Rely On.</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              We've built our reputation by treating every home like our own — turning up on time, in clean uniforms, and standing behind our work for a full 12 months.
            </p>

            <ul className="mt-8 space-y-3">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium">{g}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="lg">
                <a href="#contact">Get Your Free Quote</a>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <a href="tel:+15551234567">
                  <Phone />
                  (555) 123-4567
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.06] hover:border-accent/40"
                style={{ transform: i % 2 === 1 ? "translateY(24px)" : undefined }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-accent">
                  <r.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
