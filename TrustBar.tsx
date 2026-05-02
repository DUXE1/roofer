import { ShieldCheck, Award, MapPin, Timer } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "CompetentRoofer Approved",
    description: "Fully certified roofers. £2M public liability insurance on every job.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over 12,000 successful roofing jobs completed for local homes and businesses.",
  },
  {
    icon: MapPin,
    title: "Local Roofers",
    description: "Vans serving 25+ towns across the area — usually with you within the hour.",
  },
  {
    icon: Timer,
    title: "No Call-Out Fee",
    description: "Free quotes, fixed prices, and we don't charge just to come and look.",
  },
];

const TrustBar = () => {
  return (
    <section className="relative -mt-px border-y border-border bg-gradient-trust">
      <div className="container-x py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex items-start gap-4 rounded-xl bg-card p-5 shadow-sm-soft ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-md-soft"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-primary">{item.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
