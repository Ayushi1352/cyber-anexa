import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServicesGrid from "./ServicesGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.services.title };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title={site.pages.services.title} />
      <ServicesGrid />
    </>
  );
}
