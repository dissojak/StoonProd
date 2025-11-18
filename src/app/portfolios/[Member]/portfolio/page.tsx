"use client";

import React, { useState, useEffect } from "react";
import FilterList from "./components/FilterList";
import ProjectList from "./components/ProjectList";
import { fetchPortfoliosByMember, fetchTeamMembers } from "@/lib/strapi";
import { Portfolio } from "@/types/portfolio";
import { useParams } from "next/navigation";
import Image from "next/image";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFunnyLoader, setShowFunnyLoader] = useState(false);

  const params = useParams();
  const memberSlug = params.Member as string;

  useEffect(() => {
    if (!memberSlug) return;

    let isMounted = true;

    // -------------------
    // Timer for funny loader
    // -------------------
    const funnyTimer = setTimeout(() => {
      if (isMounted && loading) {
        setShowFunnyLoader(true); // Force first rerender for the GIF
      }
    }, 5000);

    const loadPortfolios = async () => {
      try {
        const teamMembers = await fetchTeamMembers();
        const member = teamMembers.find(
          (m) => m.name.toLowerCase().replace(/\s+/g, "-") === memberSlug.toLowerCase()
        );

        if (!member?.documentId) return;

        const data = await fetchPortfoliosByMember(member.documentId);
        if (!isMounted) return;

        setPortfolios(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!isMounted) return;

        setLoading(false);           // Second rerender: data arrived
        setShowFunnyLoader(false);   // hide funny loader
      }
    };

    loadPortfolios();

    return () => {
      isMounted = false;
      clearTimeout(funnyTimer);
    };
  }, [memberSlug, loading]);
  console.log("Rendering PortfolioPage, loading:", loading, "showFunnyLoader:", showFunnyLoader);

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Spinner always shows while loading */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px] relative">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>

            {/* Funny loader overlays spinner after 2s */}
            {showFunnyLoader && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />
                <div className="relative bg-[#1e1e1f] rounded-2xl p-8 shadow-2xl max-w-md mx-4 text-center">
                  <div className="mb-6">
                    <Image
                      src="/assets/images/batman-tas.gif"
                      alt="Funny Loading..."
                      width={300}
                      height={300}
                      className="mx-auto rounded-lg"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Hold tight! I&apos;m grabbing the data myself... 🏃‍♂️💨
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Great content is coming your way. Just fetching it from the server! 📦⚡
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="animate-bounce text-4xl">📡</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Portfolio content after fetch */}
        {!loading && (
          <>
            <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <ProjectList activeFilter={activeFilter} portfolios={portfolios} />
          </>
        )}
      </section>
    </>
  );
};

export default PortfolioPage;
