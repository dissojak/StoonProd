import { FigmaItem } from "../types";

const FALLBACK_IMAGE = "/assets/images/contentCreation.svg";

export function prepareFigmaItems(raw: FigmaItem[]): FigmaItem[] {
  return raw
    .map((item) => ({
      ...item,
      image: item.image || FALLBACK_IMAGE,
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
