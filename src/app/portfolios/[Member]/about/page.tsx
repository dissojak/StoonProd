"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTeamMembers } from "@/lib/strapi";
import Services from "./components/service/Services";
import Testimonials from "./components/testimonial/Testimonials";
import Clients from "./components/clients/Clients";

export default function About() {
  return <Aboutpage />;
}

const Aboutpage: React.FC = () => {
  const params = useParams();
  // `useParams` in Next returns a record of route params; keep a tolerant cast
  const memberSlug = (params as any)?.Member as string | undefined;
  const [member, setMember] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        console.log("🔍 Loading member data for about page:", memberSlug);
        const teamMembers = await fetchTeamMembers();
        const foundMember = teamMembers.find(
          (m) => m.name.toLowerCase().replace(/\s+/g, "-") === (memberSlug || "").toLowerCase()
        );

        if (foundMember) {
          console.log("✅ Found member for about page:", foundMember);
          setMember(foundMember);
        }
      } catch (error) {
        console.error("❌ Error loading member:", error);
      } finally {
        setLoading(false);
      }
    };

    if (memberSlug) {
      loadMember();
    }
  }, [memberSlug]);

  if (loading) {
    return (
      <Fragment>
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </section>
      </Fragment>
    );
  }

  if (!member) {
    return (
      <Fragment>
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>Member not found.</p>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {member.desc_portfoilo ? (
          member.desc_portfoilo.split("\n").map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>No description available.</p>
        )}
      </section>

      <Services services={member.services} />
      <Testimonials testimonials={member.testimonials} />
      <Clients clients={member.clients} />
    </Fragment>
  );
};
