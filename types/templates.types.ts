// Types for data/templates.json. Keep them in step when the JSON changes.

/*
  Text conventions (same as the other sites):
  - "
" in a string is a line break (only on desktop, where the design breaks the line).
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

/** Page banner: the title and the trail (the last path is the current page, with an empty url). */
export interface BreadcrumbData {
  title: string;
  seo: SeoData;
  paths: LinkItem[];
}

export interface ThemeFonts {
  heading: string;
  body: string;
  banner: string;
  footer: string;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  lang: string;
  siteName: string;
  icon: string;
}

export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbImage: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  servicesMenuLabel: string;
  previousLabel: string;
  nextLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  paginationLabel: string;
  showTestimonialLabel: string;
  ratingLabel: string;
  readMore: string;
}

export interface ImageData {
  src: string;
  width: number;
  height: number;
}

export interface CompanyData {
  name: string;
  logo: ImageData;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

export interface LinkGroup {
  title: string;
  links: LinkItem[];
}

export interface FooterData {
  description: string;
  quickLinks: LinkGroup;
  services: LinkGroup;
  getInTouch: ButtonData & { title: string; text: string };
  mapImage: string;
  copyright: string;
}

export interface CommonData {
  theme: { fonts: ThemeFonts };
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  company: CompanyData;
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

export interface HeaderData extends ButtonData {
  navLinks: NavLink[];
  dropdownLinks: LinkItem[];
}

export interface HeroData {
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface AboutData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  points: string[];
  buttonText: string;
  buttonUrl: string;
  mainImage: string;
  mainImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
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

export interface BlogsData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  count: number;
  buttonText: string;
  buttonUrl: string;
  posts: BlogPost[];
}

export interface BlogGridData {
  postsPerPage: number;
  totalPosts: number;
}

export interface ServicesGridItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

export interface ServicesGridData {
  label: string;
  title: string;
  titleHighlight: string;
  items: ServicesGridItem[];
  readMore: string;
  buttonText: string;
  buttonUrl: string;
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
  challenges: string[];
  solutionsLabel: string;
  solutions: string[];
}

export interface RecentPost {
  id: string;
  title: string;
  date: string;
  image: string;
  url: string;
}

export interface BlogDetailData {
  post: { category: string; date: string; title: string; image: string };
  intro: string;
  quote: string;
  body: string;
  images: { src: string; alt: string }[];
  sections: { heading: string; text: string }[];
  recentTitle: string;
  recentPosts: RecentPost[];
  cta: ButtonData & { title: string; text: string; image: string };
}

export interface FieldText {
  label: string;
  placeholder: string;
}

export interface ContactDetailItem {
  icon: string;
  title: string;
  text: string;
}

/** id = platform (facebook, instagram, linkedin, youtube); it picks the icon. */
export type SocialLink = LinkItem;

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
    success: string;
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
    success: string;
    serviceOptions: string[];
  };
}

export interface NotFoundData {
  code: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
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
