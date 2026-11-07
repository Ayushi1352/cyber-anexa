
import type { ContactData } from "@/types/templates.types";
export function ContactMap({ data: map }: { data: ContactData["map"] }) {
  return (
    <section className="mb-[32px] h-[22rem] w-full sm:h-[26rem] xl:h-[29.6rem]">
      <iframe
        src={map.embedUrl}
        title={map.title}
        className="block size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
