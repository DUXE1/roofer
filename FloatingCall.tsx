import { Phone } from "lucide-react";

const FloatingCall = () => {
  return (
    <a
      href="tel:+15551234567"
      aria-label="Call SKOP roofer now"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cta text-cta-foreground shadow-cta transition-transform hover:scale-110 md:hidden"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default FloatingCall;
