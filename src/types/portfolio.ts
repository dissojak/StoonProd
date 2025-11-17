import { StrapiMedia } from "./strapi";

export type PortfolioType =
  | "Video Production"
  | "Photography"
  | "Content Creation"
  | "Web Development"
  | "UI/UX"
  | "Design"
  | "Branding";

export type Portfolio = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  type: PortfolioType;
  mediaUrl: string;
  thumbnailUrl: string;
  imageSrc: string; // Alias for thumbnailUrl for compatibility
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiPortfolioItem = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  type: PortfolioType;
  media?: StrapiMedia | null;
  thumbnail?: StrapiMedia | null;
  owner?: {
    id: number;
    documentId: string;
    name: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiPortfolioResponse = {
  data: StrapiPortfolioItem[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
