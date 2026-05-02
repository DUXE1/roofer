import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent shadow-accent">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-foreground" fill="currentColor">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-extrabold text-primary">SKOP</div>
            <div className="-mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">24/7 Emergency Roofer</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15551234567" className="hidden items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent sm:flex">
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Button asChild variant="cta" size="sm">
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
