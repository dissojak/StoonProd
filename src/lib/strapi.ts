import { StrapiMedia, StrapiResponse } from "../types/strapi";
import { TeamMember } from "../types/teamMembers";
import { Portfolio, StrapiPortfolioResponse } from "../types/portfolio";

const STRAPI_BASE = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Session storage key used by PingStrapi to avoid unnecessary repeated pings
const STRAPI_PING_STORAGE_KEY = "stoon_strapi_last_ping";

function recordStrapiPing() {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.setItem(STRAPI_PING_STORAGE_KEY, String(Date.now()));
    }
  } catch (e) {
    // ignore storage errors
  }
}

function resolveImageUrl(media: StrapiMedia | null | undefined): string {
  // Strapi v5: media is flat object with url directly
  if (!media?.url) return "/assets/images/adem.jpg";
  
  // prefer a sized format if available
  const url =
    media.formats?.large?.url ||
    media.formats?.medium?.url ||
    media.formats?.small?.url ||
    media.url ||
    "";
  
  if (!url) return "/assets/images/adem.jpg";
  
  // Strapi Cloud returns full URLs, but check just in case
  if (url.startsWith("http")) return url;
  return STRAPI_BASE.replace(/\/$/, "") + url;
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    // Strapi v5: explicitly populate all needed fields including nested component media
    const url = `${strapiUrl}/api/team-members?populate=*&populate[socialMedia]=*&populate[services][populate][0]=logo&populate[testimonials][populate][0]=photo&populate[clients][populate][0]=logo`;
    
    console.log("📡 Fetching team members from:", url);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log("📥 Response status:", res.status, res.statusText);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Failed to fetch team members:", {
        status: res.status,
        statusText: res.statusText,
        url,
        error: errorText,
      });
      return [];
    }
    
    const json: StrapiResponse = await res.json();
    console.log(`✅ Fetched ${json.data?.length || 0} team members`, json.data);
    
    if (!json.data || !Array.isArray(json.data)) {
      console.error('❌ Invalid response structure:', json);
      return [];
    }

    const mapped = json.data.map((item) => {

      
      // Map social media
      const socialMedia = item.socialMedia || null;
      
      // Map services
      const services = (item.services || []).map((service: any) => {
        console.log('🔧 Service raw:', service);
        console.log('🔧 Service logo field:', service.logo);
        return {
          logo: resolveImageUrl(service.logo),
          title: service.title || "",
          description: service.description || "",
        };
      });
      
      // Map testimonials
      const testimonials = (item.testimonials || []).map((testimonial: any) => {
        console.log('💬 Testimonial raw:', testimonial);
        console.log('💬 Testimonial photo field:', testimonial.photo);
        return {
          name: testimonial.name || "",
          photo: resolveImageUrl(testimonial.photo),
          review: testimonial.review || "",
          date: new Date(testimonial.date) || new Date(),
        };
      });
      
      // Map clients - only include clients with valid logos
      const clients = (item.clients || [])
        .filter((client: any) => client.logo?.url) // Only include if logo exists
        .map((client: any) => ({
          logo: resolveImageUrl(client.logo),
          name: client.name || "",
        }));
      
      const result = {
        id: item.id,
        documentId: item.documentId,
        name: item.name || "Unknown",
        role: item.role || "",
        description: item.description || "",
        desc_portfoilo: item.desc_portfoilo || "",
        imageSrc: resolveImageUrl(item.image),
        avatar: resolveImageUrl(item.avatar),
        email: item.email || null,
        phone: item.phone || null,
        birthday: item.birthday || null,
        location: item.location || null,
        socialMedia,
        services,
        testimonials,
        clients,
      };
      console.log('Mapped member:', result);
      return result as TeamMember;
    });
    
    console.log('✅ Final mapped data:', mapped);
    // mark Strapi as recently used so PingStrapi will skip pinging
    recordStrapiPing();
    return mapped;
  } catch (error) {
    console.error("💥 Exception in fetchTeamMembers:", error);
    return [];
  }
}

// Fetch a single team member by slug (name)
export async function fetchTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    // Convert slug to proper name format (e.g., "adem" -> "Adem")
    const nameQuery = slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    
    // Fetch with all fields populated - use explicit field population for media
    const url = `${strapiUrl}/api/team-members?filters[name][$eqi]=${nameQuery}&populate[socialMedia]=*&populate[avatar][fields][0]=url&populate[avatar][fields][1]=name&populate[image][fields][0]=url&populate[image][fields][1]=name&populate[services][populate][0]=logo&populate[testimonials][populate][0]=photo&populate[clients][populate][0]=logo`;
    
    console.log("📡 Fetching member by slug:", slug, "-> name:", nameQuery);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error("❌ Failed to fetch member by slug");
      return null;
    }
    
    const json: StrapiResponse = await res.json();
    
    if (!json.data || json.data.length === 0) {
      console.error('❌ No member found for slug:', slug);
      return null;
    }
    
    const item = json.data[0];
    
    // Map social media
    const socialMedia = item.socialMedia || null;
    
    // Map services
    const services = (item.services || []).map((service: any) => ({
      logo: resolveImageUrl(service.logo),
      title: service.title || "",
      description: service.description || "",
    }));
    
    // Map testimonials
    const testimonials = (item.testimonials || []).map((testimonial: any) => ({
      name: testimonial.name || "",
      photo: resolveImageUrl(testimonial.photo),
      review: testimonial.review || "",
      date: new Date(testimonial.date) || new Date(),
    }));
    
    // Map clients - only include clients with valid logos
    const clients = (item.clients || [])
      .filter((client: any) => client.logo?.url)
      .map((client: any) => ({
        logo: resolveImageUrl(client.logo),
        name: client.name || "",
      }));
    
    const member: TeamMember = {
      id: item.id,
      documentId: item.documentId,
      name: item.name || "Unknown",
      role: item.role || "",
      description: item.description || "",
      desc_portfoilo: item.desc_portfoilo || "",
      imageSrc: resolveImageUrl(item.image),
      avatar: resolveImageUrl(item.avatar),
      email: item.email || null,
      phone: item.phone || null,
      birthday: item.birthday || null,
      location: item.location || null,
      socialMedia,
      services,
      testimonials,
      clients,
    };
    
    console.log('✅ Fetched member:', member);
    recordStrapiPing();
    return member;
  } catch (error) {
    console.error("💥 Exception in fetchTeamMemberBySlug:", error);
    return null;
  }
}

// Fetch social media for a specific team member by documentId
export async function fetchMemberSocialMedia(documentId: string) {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const url = `${strapiUrl}/api/team-members/${documentId}?populate[socialMedia]=*`;
    
    console.log("📱 Fetching social media for member:", documentId);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error("❌ Failed to fetch social media");
      return null;
    }
    
    const json: any = await res.json();
    console.log("✅ Fetched social media:", json.data?.socialMedia);
    // record ping so the session is refreshed
    recordStrapiPing();
    return json.data?.socialMedia || null;
  } catch (error) {
    console.error("💥 Exception in fetchMemberSocialMedia:", error);
    return null;
  }
}

// Fetch portfolios for a specific team member by their document ID
export async function fetchPortfoliosByMember(memberDocumentId: string): Promise<Portfolio[]> {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const url = `${strapiUrl}/api/portfolios?filters[owner][documentId][$eq]=${memberDocumentId}&populate[media][fields][0]=url&populate[media][fields][1]=name&populate[thumbnail][fields][0]=url&populate[thumbnail][fields][1]=name&populate[owner][fields][0]=name`;
    
    console.log("📡 Fetching portfolios for member:", memberDocumentId, url);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log("📥 Portfolio response status:", res.status, res.statusText);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Failed to fetch portfolios:", {
        status: res.status,
        statusText: res.statusText,
        url,
        error: errorText,
      });
      return [];
    }
    
    const json: StrapiPortfolioResponse = await res.json();
    console.log(`✅ Fetched ${json.data?.length || 0} portfolios`, json.data);
    
    if (!json.data || !Array.isArray(json.data)) {
      console.error('❌ Invalid portfolio response structure:', json);
      return [];
    }

    const mapped = json.data.map((item) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description || "",
      type: item.type,
      mediaUrl: resolveImageUrl(item.media),
      thumbnailUrl: resolveImageUrl(item.thumbnail),
      imageSrc: resolveImageUrl(item.thumbnail), // Alias for compatibility
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    }));
    
    console.log('✅ Mapped portfolios:', mapped);
    recordStrapiPing();
    return mapped;
  } catch (error) {
    console.error("💥 Exception in fetchPortfoliosByMember:", error);
    return [];
  }
}

// Fetch all portfolios
export async function fetchAllPortfolios(): Promise<Portfolio[]> {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const url = `${strapiUrl}/api/portfolios?populate=media,thumbnail,owner`;
    
    console.log("📡 Fetching all portfolios from:", url);
    
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Failed to fetch portfolios:", errorText);
      return [];
    }
    
    const json: StrapiPortfolioResponse = await res.json();
    console.log(`✅ Fetched ${json.data?.length || 0} total portfolios`);
    // mark Strapi as recently used
    recordStrapiPing();
    
    if (!json.data || !Array.isArray(json.data)) {
      return [];
    }

    return json.data.map((item) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description || "",
      type: item.type,
      mediaUrl: resolveImageUrl(item.media),
      thumbnailUrl: resolveImageUrl(item.thumbnail),
      imageSrc: resolveImageUrl(item.thumbnail), // Alias for compatibility
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    }));
  } catch (error) {
    console.error("💥 Exception in fetchAllPortfolios:", error);
    return [];
  }
}