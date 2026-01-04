describe("ga helpers", () => {
  const originalId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const loadGa = async () => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-TEST";
    return import("@/lib/ga");
  };

  afterEach(() => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = originalId;
    // @ts-expect-error cleanup mock
    delete window.gtag;
    jest.clearAllMocks();
  });

  it("sends pageview when GA is available", async () => {
    const { pageview } = await loadGa();
    // @ts-expect-error window is defined in jsdom
    window.gtag = jest.fn();

    pageview("/about");
    expect(window.gtag).toHaveBeenCalledWith("event", "page_view", { page_path: "/about" });
  });

  it("skips when GA measurement id is missing", async () => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "";
    const { pageview, GA_MEASUREMENT_ID } = await import("@/lib/ga");
    // @ts-expect-error window is defined in jsdom
    window.gtag = jest.fn();

    pageview("/skip");
    expect(window.gtag).not.toHaveBeenCalled();
    expect(GA_MEASUREMENT_ID).toBeFalsy();
  });

  it("sends custom events", async () => {
    const { gaEvent } = await loadGa();
    // @ts-expect-error window is defined in jsdom
    window.gtag = jest.fn();

    gaEvent({ action: "contact_submit", category: "form", value: 1 });
    expect(window.gtag).toHaveBeenCalledWith("event", "contact_submit", { category: "form", value: 1 });
  });
});
