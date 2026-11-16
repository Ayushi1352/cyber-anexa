import type { CSSProperties } from 'react';

// Types for data/templates.json. Keep them in step when the JSON changes.

/*
  Text conventions (same as the other sites):
  - "\n" in a string is a line break (only on desktop, where the design breaks the line).
  - A heading is `title` + `titleHighlight`: the part of the title shown in blue.
  - Links are { id, label, url }; buttons are `buttonText` + `buttonUrl`.
*/

export interface SeoData {
  title: string;
  description: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ButtonData {
  buttonText: string;
  buttonUrl: string;
}

/** One step of the breadcrumb trail; the last step is the current page (no url). */
export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

/** Page banner: the title and the trail. */
export interface BreadcrumbData {
  title: string;
  seo: SeoData;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface ThemeFonts {
  heading: string;
  body: string;
  banner: string;
  footer: string;
}

/** CSS variables layout.tsx sets on <html> from common.theme.fonts. */
export type ThemeFontVariables = CSSProperties & {
  '--font-heading': string;
  '--font-body': string;
  '--font-banner': string;
  '--font-footer': string;
};

export interface SiteMetadataData {
  title: string;
  description: string;
  lang: string;
  siteName: string;
  icon: string;
}

/** Only the breadcrumb reads these; every section keeps its own labels and icons in its data. */
export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbImage: string;
  breadcrumbSeparatorIcon: string;
}

/** Logo of the header and the footer. */
export interface LogoData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoUrl: string;
  logoLabel: string;
}

/** Screen-reader labels and arrow icons of the page numbers under a grid; "{n}" in pageLabel is the page number. */
export interface PaginationData {
  label: string;
  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
  previousIcon: string;
  nextIcon: string;
}

export interface LinkGroup {
  title: string;
  links: LinkItem[];
}

export interface FooterContactItem {
  id: string;
  icon: string;
  /** Solid icon instead of an outline one. */
  filled: boolean;
  text: string;
  url?: string;
}

export interface FooterData extends LogoData {
  description: string;
  contactItems: FooterContactItem[];
  quickLinks: LinkGroup;
  services: LinkGroup;
  linkIcon: string;
  getInTouch: ButtonData & { title: string; text: string; buttonIcon: string };
  mapImage: string;
  copyright: string;
}

export interface FooterProps {
  data?: FooterData;
}

export interface CommonData {
  theme: { fonts: ThemeFonts };
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb: BreadcrumbData;
  servicesBreadcrumb: BreadcrumbData;
  serviceDetailBreadcrumb: BreadcrumbData;
  projectsBreadcrumb: BreadcrumbData;
  projectDetailBreadcrumb: BreadcrumbData;
  blogBreadcrumb: BreadcrumbData;
  blogDetailBreadcrumb: BreadcrumbData;
  contactBreadcrumb: BreadcrumbData;
  quoteBreadcrumb: BreadcrumbData;
  notFoundBreadcrumb: BreadcrumbData;
  Footer: FooterData;
}

/* ---------- Sections ---------- */

export interface NavLink extends LinkItem {
  dropdown?: boolean;
}

export interface HeaderData extends LogoData, ButtonData {
  navLinks: NavLink[];
  dropdownLinks: LinkItem[];
  submenuIcon: string;
  submenuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  openMenuIcon: string;
  closeMenuIcon: string;
  buttonIcon: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  image: string;
  imageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  points: string[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  mainImage: string;
  mainImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
}

export interface AboutUsProps {
  data?: AboutData;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface ServicesData {
  label: string;
  title: string;
  titleHighlight: string;
  items: ServiceItem[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseData {
  label: string;
  title: string;
  titleHighlight: string;
  image: string;
  imageAlt: string;
  items: WhyChooseItem[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseData;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  image: string;
  url: string;
}

export interface ProjectsData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: ProjectItem[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  pagination: PaginationData;
}

export interface ProjectsProps {
  data?: ProjectsData;
  /** Projects page: every project, with page numbers (Home shows the first four and a button). */
  paginated?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  previousLabel: string;
  nextLabel: string;
  /** "{n}" is the slide number */
  goToSlideLabel: string;
  previousIcon: string;
  nextIcon: string;
}

export interface TeamProps {
  data?: TeamData;
  showButton?: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  image?: string;
  quote: string;
}

export interface TestimonialsData {
  label: string;
  title: string;
  titleHighlight: string;
  rating: string;
  image: string;
  imageAlt: string;
  items: TestimonialItem[];
  /** "{rating}" is the rating */
  ratingLabel: string;
  starIcon: string;
  /** "{name}" is the client's name */
  showTestimonialLabel: string;
  previousLabel: string;
  nextLabel: string;
  previousIcon: string;
  nextIcon: string;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

/** Labels and icons of a blog card. */
export interface BlogCardData {
  readMore: string;
  readMoreIcon: string;
  categoryIcon: string;
  dateIcon: string;
}

export interface BlogCardProps {
  post: BlogPost;
  card: BlogCardData;
  compact?: boolean;
}

export interface BlogsData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  count: number;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  posts: BlogPost[];
  card: BlogCardData;
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface BlogGridData {
  postsPerPage: number;
  totalPosts: number;
  pagination: PaginationData;
}

export interface BlogGridProps {
  data?: BlogGridData;
  /** The heading, posts and card labels are the ones of the home blog section. */
  blogs?: BlogsData;
}

export interface ServicesGridItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

export interface ServiceCardProps {
  service: ServicesGridItem;
  readMore: string;
  readMoreIcon: string;
}

export interface ServicesGridData {
  label: string;
  title: string;
  titleHighlight: string;
  items: ServicesGridItem[];
  readMore: string;
  readMoreIcon: string;
  buttonText: string;
  buttonUrl: string;
  pagination: PaginationData;
}

export interface ServicesGridProps {
  data?: ServicesGridData;
}

export interface IncludedItem {
  icon: string;
  title: string;
  text: string;
}

export interface ServiceDetailData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  heroImage: string;
  overviewImage: string;
  imageAlt: string;
  overviewTitle: string;
  overviewTitleHighlight: string;
  overview: string[];
  includedTitle: string;
  includedTitleHighlight: string;
  included: IncludedItem[];
}

export interface ServiceDetailProps {
  data?: ServiceDetailData;
}

export interface InfoRow {
  icon: string;
  label: string;
  value: string;
}

export interface ProjectDetailData {
  label: string;
  title: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  resultTitle: string;
  result: string;
  resultImage: string;
  challengeTitle: string;
  challenge: string;
  infoTitle: string;
  info: InfoRow[];
  sideImage: string;
  challengesLabel: string;
  challengesIcon: string;
  challenges: string[];
  solutionsLabel: string;
  solutionsIcon: string;
  solutions: string[];
}

export interface ProjectDetailProps {
  data?: ProjectDetailData;
}

export interface RecentPost {
  id: string;
  title: string;
  date: string;
  image: string;
  url: string;
}

export interface BlogDetailImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailData {
  post: { category: string; date: string; title: string; image: string };
  categoryIcon: string;
  dateIcon: string;
  intro: string;
  quote: string;
  body: string;
  images: BlogDetailImage[];
  sections: { heading: string; text: string }[];
  recentTitle: string;
  recentPosts: RecentPost[];
  cta: ButtonData & { title: string; text: string; image: string; buttonIcon: string };
}

export interface BlogDetailProps {
  data?: BlogDetailData;
}

export interface FieldText {
  label: string;
  placeholder: string;
}

export interface ContactDetailItem {
  /** "phone" and "email" rows are links. */
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface SocialLink extends LinkItem {
  /** react-icons name from components/ui/Icon.tsx */
  icon: string;
}

export interface ContactData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  form: {
    name: FieldText;
    email: FieldText;
    subject: FieldText;
    message: FieldText;
    buttonText: string;
    buttonIcon: string;
    success: string;
    successIcon: string;
  };
  details: {
    label: string;
    text: string;
    image: string;
    items: ContactDetailItem[];
    followTitle: string;
    socials: SocialLink[];
  };
  map: { title: string; embedUrl: string };
}

export interface ContactProps {
  data?: ContactData;
}

export interface QuoteData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  features: { title: string; text: string }[];
  form: {
    title: string;
    titleHighlight: string;
    description: string;
    name: FieldText;
    email: FieldText;
    company: FieldText;
    phone: FieldText;
    service: FieldText;
    budget: FieldText;
    message: FieldText;
    buttonText: string;
    buttonIcon: string;
    success: string;
    successIcon: string;
    selectIcon: string;
    serviceOptions: string[];
  };
}

export interface QuoteProps {
  data?: QuoteData;
}

export interface NotFoundData {
  code: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface NotFoundProps {
  data?: NotFoundData;
}

export interface CyberSecuritySections {
  Header?: { variants?: { CyberSecurityHeader1?: HeaderData } };
  Hero?: { variants?: { CyberSecurityHero1?: HeroData } };
  AboutUs?: { variants?: { CyberSecurityAboutUs1?: AboutData } };
  Services?: { variants?: { CyberSecurityServices1?: ServicesData } };
  WhyChooseUs?: { variants?: { CyberSecurityWhyChooseUs1?: WhyChooseData } };
  Projects?: { variants?: { CyberSecurityProjects1?: ProjectsData } };
  Team?: { variants?: { CyberSecurityTeam1?: TeamData } };
  Testimonials?: { variants?: { CyberSecurityTestimonials1?: TestimonialsData } };
  Blogs?: { variants?: { CyberSecurityBlogs1?: BlogsData } };
  BlogGrid?: { variants?: { CyberSecurityBlogGrid1?: BlogGridData } };
  ServicesGrid?: { variants?: { CyberSecurityServicesGrid1?: ServicesGridData } };
  ServiceDetail?: { variants?: { CyberSecurityServiceDetail1?: ServiceDetailData } };
  ProjectDetail?: { variants?: { CyberSecurityProjectDetail1?: ProjectDetailData } };
  BlogDetail?: { variants?: { CyberSecurityBlogDetail1?: BlogDetailData } };
  Contact?: { variants?: { CyberSecurityContact1?: ContactData } };
  Quote?: { variants?: { CyberSecurityQuote1?: QuoteData } };
  NotFound?: { variants?: { CyberSecurityNotFound1?: NotFoundData } };
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface CyberSecurityTemplateData {
  common: CommonData;
  categories: {
    CyberSecurity: {
      sections: CyberSecuritySections;
      templateComponents: TemplateComponentsData;
    };
  };
}
