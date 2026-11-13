import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter, Mulish, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-plus-jakarta-sans" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-inter" });
const mulish = Mulish({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-mulish" });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-roboto" });
const fontClasses = [plusJakartaSans, inter, mulish, roboto].map((font) => font.variable).join(" ");

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

// Which font each part of the site uses comes from templates.json (common.theme.fonts).
const { fonts } = commonData.theme;
const fontVariables = {
  "--font-heading": fonts.heading,
  "--font-body": fonts.body,
  "--font-banner": fonts.banner,
  "--font-footer": fonts.footer,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px below 1024px; from 1024px up it scales to the design width (1440px -> 16px, 1920px -> 21.33px).
      // Everything clickable gets the pointer; with reduced motion turned on nothing scrolls smoothly.
      className={`${fontClasses} scroll-smooth antialiased text-[16px] xl:text-[length:calc(100vw/90)] min-[1920px]:text-[length:21.333px] [&_:where(a[href],button:not(:disabled),select,summary,label[for],[role=button])]:cursor-pointer motion-reduce:scroll-auto`}
    >
      <body className="min-h-screen [&_img]:select-none">
        {/*
          The site never grows wider than the 1920px design (90rem once the root font size stops growing),
          so on wide screens or when zoomed out it stays centred instead of stretching.
          Header and Footer live here once, so every page gets them automatically.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[90rem] flex-col overflow-x-clip bg-white">
          <Header data={sectionData.Header?.variants?.CyberSecurityHeader1} company={commonData.company} ui={commonData.globalUI} />
          <ScrollToTop>
            {children}
            <ScrollReveal />
          </ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} />
        </div>
      </body>
    </html>
  );
}
