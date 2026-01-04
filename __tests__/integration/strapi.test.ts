import { fetchTeamMembers } from "@/lib/strapi";

describe("fetchTeamMembers", () => {
  beforeEach(() => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_STRAPI_URL = "https://strapi.example.com";
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("maps Strapi response to team members", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => ({
        data: [
          {
            id: 1,
            documentId: "doc1",
            name: "Ada",
            role: "Designer",
            description: "",
            desc_portfoilo: "",
            image: { url: "/img.png" },
            avatar: { url: "/avatar.png" },
            services: [{ title: "Design", description: "", logo: { url: "/logo.png" } }],
            testimonials: [
              { name: "Client", photo: { url: "/photo.png" }, review: "Great", date: "2024-01-01" },
            ],
            clients: [{ name: "ACME", logo: { url: "/client.png" } }],
            socialMedia: null,
            phone: null,
            email: null,
            birthday: null,
            location: null,
          },
        ],
      }),
    });

    global.fetch = mockFetch as unknown as typeof fetch;

    const { fetchTeamMembers } = await import("@/lib/strapi");
    const members = await fetchTeamMembers();

    expect(members).toHaveLength(1);
    expect(members[0]?.name).toBe("Ada");
    expect(members[0]?.services[0]?.logo).toBe("https://strapi.example.com/logo.png");
    expect(members[0]?.clients[0]?.logo).toBe("https://strapi.example.com/client.png");
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("returns empty array on non-OK response", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Server Error",
      text: async () => "fail",
    }) as unknown as typeof fetch;

    const { fetchTeamMembers } = await import("@/lib/strapi");
    const members = await fetchTeamMembers();

    expect(members).toEqual([]);
  });

  it("returns empty array on invalid response structure", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ data: null }),
    }) as unknown as typeof fetch;

    const { fetchTeamMembers } = await import("@/lib/strapi");
    const members = await fetchTeamMembers();

    expect(members).toEqual([]);
  });

  it("handles fetch exception gracefully", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const { fetchTeamMembers } = await import("@/lib/strapi");
    const members = await fetchTeamMembers();

    expect(members).toEqual([]);
  });
});

