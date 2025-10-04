import { ServiceData } from "../types";

export const eventCoverageService: ServiceData = {
  title: "Event Coverage Services",
  plans: [
    {
      minPrice: "600",
      maxPrice: "750",
      title: "Essential Plan",
      description: "Perfect for half-day event coverage.",
      features: [
        { id: 1, text: "1 photographer + 1 videographer" },
        { id: 2, text: "Half-day (4 hours) shooting" },
        { id: 3, text: "Teaser video (1 minute)" },
        { id: 4, text: "40 edited photos" },
      ],
    },
    {
      minPrice: "900",
      maxPrice: "1200",
      title: "Premium Plan",
      description: "Perfect for full-day event coverage.",
      features: [
        { id: 1, text: "1 photographer + 2 videographers + assistant" },
        { id: 2, text: "Full-day (8 hours) shooting" },
        { id: 3, text: "Teaser video (1 minute)" },
        { id: 4, text: "Recap video (5 minutes)" },
        { id: 5, text: "80 edited photos" },
      ],
    },
    {
      minPrice: "600",
      maxPrice: "750",
      title: "Essential Plan",
      description: "Perfect for half-day event coverage.",
      features: [
        { id: 1, text: "1 photographer + 1 videographer" },
        { id: 2, text: "Half-day (4 hours) shooting" },
        { id: 3, text: "Teaser video (1 minute)" },
        { id: 4, text: "40 edited photos" },
      ],
    },
  ],
};

export const videoProductionService: ServiceData = {
  title: "Video Production Services",
  plans: [
    {
      minPrice: "1200",
      maxPrice: "1500",
      title: "Basic Production Plan",
      description: "Ideal for short films and promotional videos.",
      features: [
        { id: 1, text: "1 director + 1 cameraman" },
        { id: 2, text: "Up to 5 minutes of video" },
        { id: 3, text: "Full editing and color grading" },
        { id: 4, text: "1 video draft and 2 revisions" },
      ],
    },
    {
      minPrice: "2500",
      maxPrice: "3000",
      title: "Premium Production Plan",
      description: "For larger video projects, including commercials and music videos.",
      features: [
        { id: 1, text: "Full production crew" },
        { id: 2, text: "Up to 30 minutes of video" },
        { id: 3, text: "Advanced editing and color grading" },
        { id: 4, text: "3 video drafts and unlimited revisions" },
      ],
    },
  ],
};

export const webDevelopmentService: ServiceData = {
  title: "Web Development Services",
  plans: [
    {
      minPrice: "1500",
      maxPrice: "2000",
      title: "Basic Web Development Plan",
      description: "Ideal for small business websites or personal portfolios.",
      features: [
        { id: 1, text: "Responsive website design" },
        { id: 2, text: "Up to 5 pages" },
        { id: 3, text: "Basic SEO setup" },
        { id: 4, text: "Social media integration" },
      ],
    },
    {
      minPrice: "3000",
      maxPrice: "5000",
      title: "Advanced Web Development Plan",
      description: "For larger websites with custom features and advanced functionality.",
      features: [
        { id: 1, text: "Custom web application development" },
        { id: 2, text: "Up to 15 pages" },
        { id: 3, text: "Advanced SEO and performance optimization" },
        { id: 4, text: "E-commerce functionality" },
        { id: 5, text: "Content management system (CMS)" },
      ],
    },
  ],
};

export const allServices = [eventCoverageService, videoProductionService, webDevelopmentService];
