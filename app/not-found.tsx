import PageBanner from "@/components/ui/PageBanner";
import ArrowButton from "@/components/ui/ArrowButton";

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" crumbs={[{ label: "404" }]} />
      <section className="bg-[#f8fbff] px-5 py-20 text-center">
        <p className="font-heading text-[4rem] font-extrabold leading-none text-primary">404</p>
        <p className="mx-auto mt-4 max-w-md font-body text-[1.0625rem] text-body">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <ArrowButton href="/" label="Back to Home" className="mt-8 h-[3.2rem] px-8 text-base" />
      </section>
    </>
  );
}
