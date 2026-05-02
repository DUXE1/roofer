import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCall from "@/components/FloatingCall";

const Index = () => {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "SKOP",
    "description": "Trusted local roofers — emergency leak repairs, roof inspections, flat roof replacements, tile and slate roofing, gutters and fascias. 24/7 service, CompetentRoofer registered, fully insured.",
    "telephone": "+1-555-123-4567",
    "email": "hello@skop-roofing.co",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Oakville",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
    },
    "openingHours": "Mo-Su 00:00-23:59",
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <EmergencyBanner />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
};

export default Index;
