// Strapi v5 uses flat structure (no data.attributes wrapper for media)
export type StrapiMedia = {
  id: number;
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
  name?: string;
  alternativeText?: string | null;
};

// Strapi v5 has flat item structure (attributes are at root level)
export type StrapiTeamItem = {
  id: number;
  documentId: string;
  name: string;
  role: string;
  description: string | null;
  desc_portfoilo?: string | null;
  image?: StrapiMedia | null;
  avatar?: StrapiMedia | null;
  photo?: StrapiMedia | null;
  email?: string | null;
  phone?: string | null;
  birthday?: string | null;
  location?: string | null;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  } | null;
  services?: Array<{
    icon: string;
    title: string;
    description: string;
    height?: number;
  }> | null;
  testimonials?: Array<{
    name: string;
    avatar: string;
    text: string;
  }> | null;
  clients?: Array<{
    logo: string;
    name: string;
  }> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiResponse = {
  data: StrapiTeamItem[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};