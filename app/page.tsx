import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';

export default function Home() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.CyberSecurityHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs1} />
      <Services data={sectionData.Services?.variants?.CyberSecurityServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CyberSecurityWhyChooseUs1} />
      <Projects data={sectionData.Projects?.variants?.CyberSecurityProjects1} />
      <Team data={sectionData.Team?.variants?.CyberSecurityTeam1} showButton={false} />
      <Testimonials data={sectionData.Testimonials?.variants?.CyberSecurityTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.CyberSecurityBlogs1} />
    </main>
  );
}
