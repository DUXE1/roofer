import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  issue: z.string().trim().min(5, "Please describe your issue briefly").max(1000),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      issue: String(formData.get("issue") ?? ""),
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.errors[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    toast({
      title: "Quote request received!",
      description: "We'll call you back within 12 minutes during business hours.",
    });
  };

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-gradient-trust">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — Form */}
          <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-lg-soft ring-1 ring-border md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-accent opacity-10 blur-3xl" />

            <span className="eyebrow">Book a Roofer</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Request Your Free Roofing Quote
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell us what's wrong and we'll call you back within 12 minutes during working hours. For active leaks or storm damage, please call us directly.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-success/30 bg-success/5 px-6 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">Request Received!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out. A team member will call you shortly. For urgent issues, call us directly.
                </p>
                <Button asChild variant="call" size="lg" className="mt-6">
                  <a href="tel:+15551234567">
                    <Phone />
                    Call (555) 123-4567
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <Label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
                    Your Name
                  </Label>
                  <Input id="name" name="name" placeholder="Jane Smith" required maxLength={100} className="h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">
                    Phone Number
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required maxLength={20} className="h-12" />
                </div>
                <div>
                  <Label htmlFor="issue" className="mb-1.5 block text-sm font-semibold text-primary">
                    Describe the roofing issue
                  </Label>
                  <Textarea id="issue" name="issue" placeholder="e.g. Leaking ceiling, missing tiles, storm damage, flat roof needs replacing..." required maxLength={1000} rows={4} />
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full">
                  <Send className="h-4 w-4" />
                  Get My Free Quote
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  No spam. No obligation. Your info stays with us.
                </p>
              </form>
            )}
          </div>

          {/* Right — Contact info + Map */}
          <div className="space-y-5">
            {/* Click to call */}
            <a
              href="tel:+15551234567"
              className="group relative block overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-lg-soft transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(210_90%_50%/0.25),transparent_60%)]" />
              <div className="relative flex items-center gap-5">
                <div className="pulse-ring flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cta text-cta-foreground">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-white/70">Call Now</div>
                  <div className="font-display text-2xl font-extrabold sm:text-3xl">(555) 123-4567</div>
                  <div className="mt-0.5 text-sm text-white/70">Average answer time: under 30 seconds</div>
                </div>
              </div>
            </a>

            {/* Quick info */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, title: "Hours", lines: ["Mon–Sat: 7am – 8pm", "Sun: Emergency only"] },
                { icon: Mail, title: "Email", lines: ["hello@skop-roofing.co", "Reply within 1 hour"] },
                { icon: MapPin, title: "Office", lines: ["123 Main Street", "Oakville, CA 90210"] },
                { icon: CheckCircle2, title: "Service Area", lines: ["25+ towns covered", "Same-day available"] },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-card p-5 shadow-sm-soft ring-1 ring-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-display text-sm font-bold text-primary">{item.title}</div>
                  {item.lines.map((l) => (
                    <div key={l} className="text-xs text-muted-foreground">{l}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-md-soft ring-1 ring-border">
              <iframe
                title="SKOP service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.3589127063!2d-122.41941568468145!3d37.77492977975929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c9f6dfff%3A0xe8cd5096e4f6c4f9!2sCity%20Hall!5e0!3m2!1sen!2sus!4v1640000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
