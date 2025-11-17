"use client";

import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";
import type { TeamMember as TM } from "../../../types/teamMembers";

function resolveImageUrl(image: any): string {
  if (!image?.url) return "/assets/images/default.jpg";

  const url =
    image.formats?.large?.url ||
    image.formats?.medium?.url ||
    image.formats?.small?.url ||
    image.url;

  return url || "/assets/images/default.jpg";
}

export default function TeamMembersPortfoilos() {
  const [teamMembers, setTeamMembers] = useState<TM[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("Component rendered, loading:", loading);

  useEffect(() => {
    console.log("useEffect running!");

    fetch("https://engaging-feast-82f69e6227.strapiapp.com/api/team-members?populate=image")
      .then((r) => r.json())
      .then((json) => {
        console.log("Got data:", json.data?.length);

        const mapped: TM[] = (json.data || []).map((item: any) => ({
          id: item.id,
          documentId: item.documentId,
          name: item.name || "Unknown",
          role: item.role || "",
          description: item.description || "",
          imageSrc: resolveImageUrl(item.image),
        }));

        console.log("Mapped members:", mapped);
        setTeamMembers(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="team" className="bg-white dark:bg-gray-800 w-full">
      <div className="max-w-5xl px-6 py-16 mx-auto text-center w-full">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-8">Our Team</h2>
        <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-300">
          Get to know our team through their work. Each member brings a strong portfolio that shows
          their skill, style, and real results. Explore their projects and see why clients trust us.
        </p>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            // Skeleton loaders - show 3 animated placeholder cards
            <>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative block rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-700 animate-pulse"
                >
                  <div className="relative w-full h-72">
                    {/* Image skeleton */}
                    <div className="w-full h-full bg-gray-400 dark:bg-gray-600"></div>

                    {/* Content skeleton */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 space-y-3">
                      {/* Role skeleton */}
                      <div className="h-3 w-24 bg-gray-500 dark:bg-gray-500 rounded"></div>

                      {/* Name skeleton */}
                      <div className="h-6 w-32 bg-gray-500 dark:bg-gray-500 rounded"></div>

                      {/* Description skeleton */}
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-500 dark:bg-gray-500 rounded"></div>
                        <div className="h-3 w-3/4 bg-gray-500 dark:bg-gray-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : teamMembers.length === 0 ? (
            <div className="col-span-3 text-center">
              <p className="text-lg font-medium">No team members found.</p>
            </div>
          ) : (
            teamMembers.map((member, idx) => (
              <TeamMember key={`${member.name}-${idx}`} {...member} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
