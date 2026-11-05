import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TeamSection from "@/components/home/TeamSection";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.aboutUs.title };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title={site.pages.aboutUs.title} />
      <AboutSection />
      <WhyChooseSection />
      <TeamSection />
    </>
  );
}
