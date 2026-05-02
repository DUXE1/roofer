import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Oakville",
    text: "Roof started leaking through the ceiling on a Sunday night — a roofer was here within the hour, made it watertight and came back to do a proper repair. Lifesavers.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Westbrook",
    text: "Best roofers we've ever used. Full re-roof done in three days, scaffold up and down on schedule. Tidy, professional and absolutely no mess left behind.",
    rating: 5,
  },
  {
    name: "Linda K.",
    location: "Riverside",
    text: "After being quoted ridiculous prices elsewhere, SKOP gave me a clear fixed price for a flat roof replacement. Polite team, brilliant work, and they explained every step.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section-y bg-secondary/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Customer Stories</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Trusted by 2,000+ Local Homes
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-card px-5 py-2.5 shadow-sm-soft ring-1 ring-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-cta text-cta" />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">— from 847 verified reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="group relative rounded-2xl bg-card p-7 shadow-md-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg-soft"
              style={{ transform: i === 1 ? "translateY(-12px)" : undefined }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent-soft" />

              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-cta text-cta" />
                ))}
              </div>

              <p className="relative mt-5 text-base leading-relaxed text-foreground/85">
                "{r.text}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-display text-sm font-bold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
