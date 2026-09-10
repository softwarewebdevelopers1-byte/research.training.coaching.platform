import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import CredibilitySection from '../components/home/CredibilitySection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ExperienceSection from '../components/home/ExperienceSection';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Coaching, Training & Research Consultancy"
        description="[Company Name] empowers people and organisations through professional coaching, tailored training, and applied research."
        path="/"
      />
      <Hero />
      <CredibilitySection />
      <ServicesPreview />
      <WhyChooseUs />
      <ExperienceSection />
      <HomeCTA />
    </>
  );
}
