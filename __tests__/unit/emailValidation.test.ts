import { isValidEmail, hasValidAtSymbol, isValidLocal, isValidDomain, isValidDomainLabel } from "@/app/contact/utils/emailValidation";

describe("Email Validation Utilities", () => {
  describe("isValidEmail", () => {
    it("validates correct email addresses", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
      expect(isValidEmail("test.user@domain.co.uk")).toBe(true);
      expect(isValidEmail("admin+tag@company.org")).toBe(true);
      expect(isValidEmail("info@sub.domain.com")).toBe(true);
    });

    it("rejects emails without @", () => {
      expect(isValidEmail("userexample.com")).toBe(false);
      expect(isValidEmail("plaintext")).toBe(false);
    });

    it("rejects emails with multiple @ symbols", () => {
      expect(isValidEmail("user@@example.com")).toBe(false);
      expect(isValidEmail("user@ex@ample.com")).toBe(false);
    });

    it("rejects empty or too long emails", () => {
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("a".repeat(255) + "@example.com")).toBe(false);
    });

    it("rejects emails with invalid local part", () => {
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("a".repeat(65) + "@example.com")).toBe(false);
    });

    it("rejects emails with invalid domain", () => {
      expect(isValidEmail("user@")).toBe(false);
      expect(isValidEmail("user@.com")).toBe(false);
      expect(isValidEmail("user@domain")).toBe(false);
      expect(isValidEmail("user@domain..com")).toBe(false);
    });
  });

  describe("hasValidAtSymbol", () => {
    it("validates single @ at correct position", () => {
      expect(hasValidAtSymbol("user@example.com", 4)).toBe(true);
    });

    it("rejects @ at start or end", () => {
      expect(hasValidAtSymbol("@example.com", 0)).toBe(false);
      expect(hasValidAtSymbol("user@", 4)).toBe(false);
    });
  });

  describe("isValidLocal", () => {
    it("accepts valid local parts", () => {
      expect(isValidLocal("user")).toBe(true);
      expect(isValidLocal("test.user")).toBe(true);
      expect(isValidLocal("a")).toBe(true);
    });

    it("rejects empty or too long local parts", () => {
      expect(isValidLocal("")).toBe(false);
      expect(isValidLocal("a".repeat(65))).toBe(false);
    });
  });

  describe("isValidDomain", () => {
    it("accepts valid domains", () => {
      expect(isValidDomain("example.com")).toBe(true);
      expect(isValidDomain("sub.domain.co.uk")).toBe(true);
      expect(isValidDomain("test-domain.org")).toBe(true);
    });

    it("rejects domains without TLD", () => {
      expect(isValidDomain("example")).toBe(false);
    });

    it("rejects domains with consecutive dots", () => {
      expect(isValidDomain("example..com")).toBe(false);
    });

    it("rejects too short or too long domains", () => {
      expect(isValidDomain("a.")).toBe(false); // TLD too short
      expect(isValidDomain("a".repeat(256) + ".com")).toBe(false);
    });
  });

  describe("isValidDomainLabel", () => {
    it("accepts valid labels", () => {
      expect(isValidDomainLabel("example")).toBe(true);
      expect(isValidDomainLabel("sub-domain")).toBe(true);
      expect(isValidDomainLabel("test123")).toBe(true);
    });

    it("rejects labels starting or ending with hyphen", () => {
      expect(isValidDomainLabel("-example")).toBe(false);
      expect(isValidDomainLabel("example-")).toBe(false);
    });

    it("rejects empty or too long labels", () => {
      expect(isValidDomainLabel("")).toBe(false);
      expect(isValidDomainLabel("a".repeat(64))).toBe(false);
    });
  });
});
