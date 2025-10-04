import { PortfolioItem } from "../types";

// Static seed data; later this can be swapped with a CMS or DB fetch.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Event Coverage",
    description:
      "Comprehensive video and photo coverage for a major event, capturing key moments and atmosphere.",
    image: "/assets/images/tvs.jpg",
    category: "Events",
  },
  {
    title: "Brand Photography",
    description:
      "Professional photography for a fashion brand, highlighting products and lifestyle.",
    image: "/assets/images/PhotoUnsplash.jpg",
    category: "Photography",
  },
  {
    title: "Musical Coverage",
    description:
      "A dynamic music video for a local artist, featuring creative direction, filming, and post-production.",
    image: "/assets/images/filmingZabour.jpg",
    category: "Music",
  },
  {
    title: "Promotional Video",
    description:
      "A promotional video for a new product launch, showcasing features and benefits through engaging visuals.",
    image: "/assets/images/handvideo.jpg",
    category: "Commercial",
  },
];
