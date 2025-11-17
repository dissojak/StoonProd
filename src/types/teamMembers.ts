export type TeamMember = {
  id?: number;
  documentId?: string;
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  desc_portfoilo: string;
  avatar?: string;
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
    logo: string;
    title: string;
    description: string;
    height?: number;
  }> | null;
  testimonials?: Array<{
    name: string;
    photo: string;  // Changed from avatar to match component
    review: string; // Changed from text to match component
    date: Date;
  }> | null;
  clients?: Array<{
    logo: string;
    name: string;
  }> | null;
};
