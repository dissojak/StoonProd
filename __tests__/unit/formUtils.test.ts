import { validate, getInitialValues, getInitialErrors, hasErrors, getFormValues } from "@/app/contact/utils/formUtils";

describe("Contact Form Utilities", () => {
  describe("getInitialValues", () => {
    it("returns empty form values", () => {
      const values = getInitialValues();
      expect(values).toEqual({ name: "", email: "", subject: "", message: "" });
    });
  });

  describe("getInitialErrors", () => {
    it("returns empty error object", () => {
      const errors = getInitialErrors();
      expect(errors).toEqual({});
    });
  });

  describe("validate", () => {
    it("validates complete and correct form", () => {
      const values = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Subject",
        message: "This is a test message with enough characters",
      };
      const errors = validate(values);
      expect(errors).toEqual({});
    });

    it("returns error for missing name", () => {
      const values = {
        name: "",
        email: "john@example.com",
        subject: "Test",
        message: "Test message here",
      };
      const errors = validate(values);
      expect(errors.name).toBe("Name is required");
    });

    it("returns error for missing email", () => {
      const values = {
        name: "John Doe",
        email: "",
        subject: "Test",
        message: "Test message here",
      };
      const errors = validate(values);
      expect(errors.email).toBe("Email is required");
    });

    it("returns error for invalid email", () => {
      const values = {
        name: "John Doe",
        email: "invalid-email",
        subject: "Test",
        message: "Test message here",
      };
      const errors = validate(values);
      expect(errors.email).toBe("Invalid email format");
    });

    it("returns error for missing subject", () => {
      const values = {
        name: "John Doe",
        email: "john@example.com",
        subject: "",
        message: "Test message here",
      };
      const errors = validate(values);
      expect(errors.subject).toBe("Subject is required");
    });

    it("returns error for missing message", () => {
      const values = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Test",
        message: "",
      };
      const errors = validate(values);
      expect(errors.message).toBe("Message is required");
    });

    it("returns error for message too short", () => {
      const values = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Test",
        message: "Short",
      };
      const errors = validate(values);
      expect(errors.message).toBe("Message must be at least 10 characters");
    });

    it("returns multiple errors when multiple fields invalid", () => {
      const values = {
        name: "",
        email: "bad-email",
        subject: "",
        message: "short",
      };
      const errors = validate(values);
      expect(Object.keys(errors).length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("hasErrors", () => {
    it("returns false for empty error object", () => {
      expect(hasErrors({})).toBe(false);
    });

    it("returns true when errors exist", () => {
      expect(hasErrors({ name: "Required" })).toBe(true);
      expect(hasErrors({ email: "Invalid", message: "Required" })).toBe(true);
    });
  });

  describe("getFormValues", () => {
    it("extracts values from form elements", () => {
      const form = document.createElement("form");
      form.innerHTML = `
        <input name="name" value="John Doe" />
        <input name="email" value="john@example.com" />
        <input name="subject" value="Test Subject" />
        <textarea name="message">Test message</textarea>
      `;

      const values = getFormValues(form);
      expect(values).toEqual({
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Subject",
        message: "Test message",
      });
    });

    it("handles missing form fields", () => {
      const form = document.createElement("form");
      form.innerHTML = `
        <input name="name" value="John" />
      `;

      const values = getFormValues(form);
      expect(values.name).toBe("John");
      expect(values.email).toBe("");
      expect(values.subject).toBe("");
      expect(values.message).toBe("");
    });
  });
});
