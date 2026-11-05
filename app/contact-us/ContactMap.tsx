import { site } from "@/lib/site";

export default function ContactMap() {
  const { map } = site.pages.contactUs;
  return (
    <section className="h-[22rem] w-full sm:h-[26rem] xl:h-[29.6rem]">
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
