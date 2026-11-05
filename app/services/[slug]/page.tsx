import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import ServiceIntro from "./ServiceIntro";
import ServiceOverview from "./ServiceOverview";
import ServiceIncluded from "./ServiceIncluded";
import { getService, services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.excerpt } : {};
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner title={site.pages.serviceDetail.title} />
      <section className="bg-white pb-14 pt-6 md:pb-16 xl:pb-[3.5rem] xl:pt-[1.5rem]">
        <div className="mx-auto w-full max-w-[78.75rem] overflow-hidden px-0 sm:px-5 xl:px-0">
          <ServiceIntro service={service} />
          <ServiceOverview service={service} />
          <ServiceIncluded service={service} />
        </div>
      </section>
    </>
  );
}
