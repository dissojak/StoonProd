import { formatPrice } from "@/app/serviceandtariffs/components/pricing/utils/formatPrice";

describe("formatPrice", () => {
  describe("number inputs", () => {
    it("formats integers correctly", () => {
      expect(formatPrice(100)).toBe("100");
      expect(formatPrice(1000)).toBe("1,000");
      expect(formatPrice(1234567)).toBe("1,234,567");
    });

    it("formats decimals correctly", () => {
      expect(formatPrice(99.99)).toBe("99.99");
      expect(formatPrice(1234.5)).toBe("1,234.5");
      expect(formatPrice(0.99)).toBe("0.99");
    });

    it("rounds to 2 decimal places", () => {
      expect(formatPrice(99.999)).toBe("100");
      expect(formatPrice(1.2345)).toBe("1.23");
    });

    it("handles zero", () => {
      expect(formatPrice(0)).toBe("0");
    });

    it("handles negative numbers", () => {
      expect(formatPrice(-50)).toBe("-50");
      expect(formatPrice(-1234.56)).toBe("-1,234.56");
    });
  });

  describe("string inputs", () => {
    it("parses numeric strings", () => {
      expect(formatPrice("100")).toBe("100");
      expect(formatPrice("1234.56")).toBe("1,234.56");
    });

    it("strips currency symbols and formatting", () => {
      expect(formatPrice("$100")).toBe("100");
      expect(formatPrice("€1,234.56")).toBe("1,234.56");
      expect(formatPrice("TND 500")).toBe("500");
    });

    it("handles strings with spaces", () => {
      expect(formatPrice(" 100 ")).toBe("100");
    });
  });

  describe("edge cases", () => {
    it("returns empty string for null/undefined", () => {
      expect(formatPrice(null as any)).toBe("");
      expect(formatPrice(undefined as any)).toBe("");
    });

    it("handles non-numeric strings by attempting conversion", () => {
      // formatPrice strips non-numeric chars and converts to 0 if no valid number found
      const result = formatPrice("abc");
      expect(result).toBe("0");
    });

    it("handles very large numbers", () => {
      expect(formatPrice(1000000000)).toBe("1,000,000,000");
    });

    it("handles very small decimals", () => {
      expect(formatPrice(0.01)).toBe("0.01");
      expect(formatPrice(0.001)).toBe("0");
    });
  });
});
