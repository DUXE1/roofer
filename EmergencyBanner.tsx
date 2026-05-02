import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-cta text-cta-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(0_0%_100%/0.15),transparent_60%)]" />
      <div className="container-x relative py-8 md:py-10">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-8">
          <div className="flex items-start gap-4 md:items-center">
            <div className="pulse-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-90">Roofing Emergency?</div>
              <p className="mt-1 font-display text-lg font-extrabold leading-tight sm:text-xl md:text-2xl">
                Roof leaking or storm damage? We respond quickly to emergency call-outs.
              </p>
            </div>
          </div>
          <Button asChild variant="outline-light" size="lg" className="shrink-0 border-white/40 bg-white/10 hover:bg-white hover:text-cta">
            <a href="tel:+15551234567">
              <Phone />
              Call (555) 123-4567
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
