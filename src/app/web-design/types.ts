export type FigmaItem = {
  _id?: string;
  title: string;
  link: string; // Embeddable Figma URL ("https://www.figma.com/embed?..." preferred)
  image?: string; // Thumbnail image URL (static)
  order?: number;
};
