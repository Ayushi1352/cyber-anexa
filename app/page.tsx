import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.CyberSecurityHero1} />
      <AboutSection data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.CyberSecurityServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CyberSecurityWhyChooseUs1} />
      <ProjectsSection data={sectionData.Projects?.variants?.CyberSecurityProjects1} />
      <TeamSection data={sectionData.Team?.variants?.CyberSecurityTeam1} ui={commonData.globalUI} showButton={false} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.CyberSecurityTestimonials1} ui={commonData.globalUI} />
      <BlogSection data={sectionData.Blogs?.variants?.CyberSecurityBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
