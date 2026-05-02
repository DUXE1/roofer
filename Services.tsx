import { CloudRain, Search, ShieldCheck, Layers, Home, Wrench, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: CloudRain, title: "Emergency Leak Repairs", blurb: "Active leaks, storm damage, missing tiles — 24/7 rapid response, watertight fast." },
  { icon: Search, title: "Roof Inspections & Reports", blurb: "Drone surveys and detailed condition reports for insurance claims and peace of mind." },
  { icon: ShieldCheck, title: "Flat Roof Replacements", blurb: "EPDM, GRP fibreglass and felt systems installed with up to 25-year guarantees." },
  { icon: Layers, title: "Tile & Slate Roofing", blurb: "Full and partial re-roofs in concrete, clay or natural slate — built to last decades." },
  { icon: Home, title: "Chimney, Fascia & Soffits", blurb: "Repointing, lead flashing, gutters, fascias and soffits replaced and weather-sealed." },
  { icon: Wrench, title: "Gutter Cleaning & Repairs", blurb: "Blocked, sagging or leaking gutters cleared, repaired or replaced — UPVC and metal." },
];

const Services = () => {
  return (
    <section id="services" className="section-y bg-background">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Roofing Services</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Every Roofing Job, Done Right
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From a single slipped tile to a full re-roof — fixed-price quotes and up to a 25-year guarantee on every job.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg-soft"
            >
              <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-secondary transition-colors group-hover:text-accent-soft">
                0{i + 1}
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-md-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>

              <div className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold text-accent">
                Get a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="cta" size="lg">
            <a href="#contact">Request a Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
