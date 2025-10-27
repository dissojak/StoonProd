import { Logo } from "../types";

/**
 * Shuffles an array of logos while attempting to avoid consecutive duplicates.
 * Makes up to 10 attempts to create a shuffle without consecutive duplicates.
 */
export const shuffleAvoidConsecutiveDupes = (arr: Logo[]): Logo[] => {
  const shuffled = [...arr];
  let attempt = 0;
  const maxAttempts = 10;
  
  const hasConsecutiveDuplicates = (list: Logo[]) => {
    return list.some((logo, i) => i > 0 && logo.src === list[i - 1].src);
  };
  
  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    attempt++;
  } while (hasConsecutiveDuplicates(shuffled) && attempt < maxAttempts);
  
  return shuffled;
};
