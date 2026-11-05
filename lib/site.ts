import data from "@/data/site.json";

export type LinkItem = { label: string; href: string };

export type Service = (typeof data.services)[number];
export type Project = (typeof data.projects)[number];
export type TeamMember = (typeof data.team)[number];
export type BlogPost = (typeof data.blogPosts)[number] & {
  sidebarTitle?: string;
  thumb?: string;
};

export const site = data;

export const services: Service[] = data.services;
export const projects: Project[] = data.projects;
export const team: TeamMember[] = data.team;
export const blogPosts: BlogPost[] = data.blogPosts;

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

/** Removes the "\n" line-break hints used for desktop headings. */
export const plain = (text: string) => text.replace(/\n/g, " ").replace(/[[\]]/g, "");
