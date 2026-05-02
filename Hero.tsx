import { Phone, Clock, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Licensed local roofer repairing a tiled roof"
          width={1600}
          height={1200}
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(210_90%_50%/0.18),transparent_50%)]" />
      </div>

      <div className="container-x relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-3xl">
          <div className="animate-float-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">24/7 emergency roofers · No call-out fee</span>
          </div>

          <h1 className="animate-float-up mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Fast, Reliable Roofing Services{" "}
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              When You Need Them Most.
            </span>
          </h1>

          <p className="animate-float-up mt-6 max-w-2xl text-lg text-white/75 md:text-xl" style={{ animationDelay: "0.2s" }}>
            Emergency leak repairs, storm damage, and full roof replacements from trusted local roofers. Fully qualified, fully insured, fixed-price quotes.
          </p>

          <div className="animate-float-up mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="call" size="xl" className="group">
              <a href="tel:+15551234567">
                <Phone />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href="#contact">
                Request a Quote
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="animate-float-up mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: ShieldCheck, title: "Qualified & Insured" },
              { icon: Clock, title: "24/7 Emergency Call-Outs" },
              { icon: Star, title: "4.9★ from 847 Reviews" },
              { icon: Phone, title: "Free Roof Inspections" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-2.5">
                <item.icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-white/85">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background/0" />
    </section>
  );
};

export default Hero;
