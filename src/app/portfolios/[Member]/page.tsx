"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function MemberPage() {
  const params = useParams();
  const router = useRouter();
  const memberSlug = params.Member as string;

  useEffect(() => {
    // Redirect to the about page
    router.replace(`/portfolios/${memberSlug}/about`);
  }, [memberSlug, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
    </div>
  );
}
