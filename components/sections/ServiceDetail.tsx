import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ServiceIncluded } from "@/components/sections/ServiceIncluded";
import type { ServiceDetailData } from "@/types/templates.types";

/** Service detail page body: intro, overview and "What's Included" in one light box. */
export function ServiceDetail({ data }: { data?: ServiceDetailData }) {
  if (!data) return null;
  return (
    <section className="section-spacing bg-white">
      <div data-reveal="up" className="mx-auto w-full max-w-[78.75rem] overflow-hidden px-0 sm:px-5 xl:px-0">
        <ServiceIntro data={data} />
        <ServiceOverview data={data} />
        <ServiceIncluded data={data} />
      </div>
    </section>
  );
}
