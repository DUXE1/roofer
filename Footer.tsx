import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface-dark text-white/80">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-extrabold text-white leading-none">SKOP</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">Emergency Roofer</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/60">
              Your trusted local roofers. CompetentRoofer registered, fully insured, and dedicated to keeping your home safe and watertight.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["CompetentRoofer", "Guaranteed", "Licensed", "Insured"].map((b) => (
                <span key={b} className="rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {["Emergency Leak Repairs", "Roof Inspections", "Flat Roof Replacements", "Tile & Slate Roofing", "Gutters & Fascias"].map((s) => (
                <li key={s}><a href="#services" className="transition-colors hover:text-accent">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@skop-roofing.co</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> 123 Main St, Oakville, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SKOP. All rights reserved.</p>
          <p>CompetentRoofer Reg. #123456 · Fully Insured £2M</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
