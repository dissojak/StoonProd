import { filterUsers } from "@/app/admin/(pages)/users/utils/filterUsers";
import { AdminUser, FilterState } from "@/app/admin/(pages)/users/types/types";

describe("filterUsers", () => {
  const mockUsers: AdminUser[] = [
    {
      _id: "1",
      username: "john_doe",
      email: "john@example.com",
      isAdmin: true,
      status: "approved",
    },
    {
      _id: "2",
      username: "jane_smith",
      email: "jane@example.com",
      isAdmin: false,
      status: "pending",
    },
    {
      _id: "3",
      username: "bob_wilson",
      email: "bob@test.org",
      isAdmin: true,
      status: "approved",
    },
    {
      _id: "4",
      username: "alice_brown",
      email: "alice@example.com",
      isAdmin: false,
      status: "pending",
    },
  ];

  describe("filter by status", () => {
    it('filters pending users (non-admin)', () => {
      const result = filterUsers(mockUsers, "pending", "");
      expect(result).toHaveLength(2);
      expect(result.every(u => !u.isAdmin)).toBe(true);
      expect(result.map(u => u.username)).toEqual(["jane_smith", "alice_brown"]);
    });

    it("filters approved users (admin)", () => {
      const result = filterUsers(mockUsers, "approved", "");
      expect(result).toHaveLength(2);
      expect(result.every(u => u.isAdmin)).toBe(true);
      expect(result.map(u => u.username)).toEqual(["john_doe", "bob_wilson"]);
    });

    it("returns all users when filter is 'all'", () => {
      const result = filterUsers(mockUsers, "all", "");
      expect(result).toHaveLength(4);
    });
  });

  describe("search functionality", () => {
    it("searches by username (case-insensitive)", () => {
      const result = filterUsers(mockUsers, "all", "john");
      expect(result).toHaveLength(1);
      expect(result[0].username).toBe("john_doe");
    });

    it("searches by email (case-insensitive)", () => {
      const result = filterUsers(mockUsers, "all", "test.org");
      expect(result).toHaveLength(1);
      expect(result[0].email).toBe("bob@test.org");
    });

    it("finds multiple matches", () => {
      const result = filterUsers(mockUsers, "all", "example.com");
      expect(result).toHaveLength(3);
    });

    it("handles uppercase search queries", () => {
      const result = filterUsers(mockUsers, "all", "JANE");
      expect(result).toHaveLength(1);
      expect(result[0].username).toBe("jane_smith");
    });

    it("trims whitespace from search query", () => {
      const result = filterUsers(mockUsers, "all", "  alice  ");
      expect(result).toHaveLength(1);
    });

    it("returns empty array when no matches", () => {
      const result = filterUsers(mockUsers, "all", "xyz123");
      expect(result).toHaveLength(0);
    });
  });

  describe("combined filter and search", () => {
    it("applies both filter and search", () => {
      const result = filterUsers(mockUsers, "pending", "jane");
      expect(result).toHaveLength(1);
      expect(result[0].username).toBe("jane_smith");
    });

    it("returns empty when search matches but filter doesn't", () => {
      const result = filterUsers(mockUsers, "approved", "alice");
      expect(result).toHaveLength(0);
    });
  });

  describe("edge cases", () => {
    it("handles empty user array", () => {
      const result = filterUsers([], "all", "");
      expect(result).toHaveLength(0);
    });

    it("handles empty search string", () => {
      const result = filterUsers(mockUsers, "all", "");
      expect(result).toHaveLength(4);
    });

    it("handles special characters in search", () => {
      const result = filterUsers(mockUsers, "all", "@");
      expect(result).toHaveLength(4); // All have @ in email
    });
  });
});
