import HeroSection from "../../sections/home/heroSection";
import HowItWorksSection from "../../sections/home/howItWorksSection";
import CtaSection from "../../sections/home/ctaSection";

function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <HowItWorksSection />
      <CtaSection />
    </div>
  );
}

export default HomePage;
