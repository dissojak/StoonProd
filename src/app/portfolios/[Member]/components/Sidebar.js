"use client"; // Mark this as a client component

import { IonIcon } from "@ionic/react";
import {
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  locationOutline,
  logoFacebook,
  logoGithub,
  logoInstagram,
} from "ionicons/icons";
import "../css/globals.css"; // Import from the correct relative path
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchTeamMemberBySlug, fetchMemberSocialMedia  } from "@/lib/strapi";
const Sidebar = () => {
  const params = useParams();
  const memberSlug = params.Member; // e.g., "adem"
  const [member, setMember] = useState(null);
  const [socialMedia, setSocialMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMember = async () => {
      try {
        console.log('🔍 Loading member data for slug:', memberSlug);
        
        // Fetch only this specific member with all their data
        const foundMember = await fetchTeamMemberBySlug(memberSlug);
        
        if (foundMember) {
          console.log('✅ Found member:', foundMember);
          setMember(foundMember);
          
          // Fallback: If socialMedia is missing, fetch it separately
          if (!foundMember.socialMedia && foundMember.documentId) {
            console.log('⚠️ Social media missing, fetching separately...');
            const socialMediaData = await fetchMemberSocialMedia(foundMember.documentId);
            if (socialMediaData) {
              setSocialMedia(socialMediaData);
              console.log('✅ Social media fetched separately:', socialMediaData);
            }
          }
        } else {
          console.error('❌ Member not found for slug:', memberSlug);
        }
      } catch (error) {
        console.error('❌ Error loading member:', error);
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
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <div className="animate-pulse">
            <div className="w-20 h-20 bg-gray-300 rounded-full !mx-auto !mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-32 !mx-auto !mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-24 !mx-auto"></div>
          </div>
        </div>
      </aside>
    );
  }

  if (!member) {
    return (
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <p className="text-center text-gray-500">Member not found</p>
        </div>
      </aside>
    );
  }

  // Format birthday if available
  const formatBirthday = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={ member.avatar || member.imageSrc || "/assets/images/Avatar.png"}
            alt={member.name}
            width={100}
            height={100}
            className="avatar-box"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={member.name}>
            {member.name}
          </h1>
          <p className="title">{member.role}</p>
        </div>

        <button className="info_more-btn">
          <span>Show Contacts</span>
          <IonIcon icon={mailOutline} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {member.email && (
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={mailOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href={`mailto:${member.email}`} className="contact-link">
                  {member.email}
                </a>
              </div>
            </li>
          )}

          {member.phone && (
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={phonePortraitOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href={`tel:${member.phone}`} className="contact-link">
                  {member.phone}
                </a>
              </div>
            </li>
          )}

          {member.birthday && (
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={calendarOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime={member.birthday}>{formatBirthday(member.birthday)}</time>
              </div>
            </li>
          )}

          {member.location && (
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={locationOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>{member.location}</address>
              </div>
            </li>
          )}
        </ul>

        <div className="separator"></div>

        {(member?.socialMedia || socialMedia) && (
          <ul className="social-list">
            {(member?.socialMedia?.facebook || socialMedia?.facebook) && (
              <li className="social-item">
                <a href={member?.socialMedia?.facebook || socialMedia?.facebook} className="social-link" target="_blank" rel="noopener noreferrer">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
            )}
            {(member?.socialMedia?.github || socialMedia?.github) && (
              <li className="social-item">
                <a href={member?.socialMedia?.github || socialMedia?.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <IonIcon icon={logoGithub} />
                </a>
              </li>
            )}
            {(member?.socialMedia?.instagram || socialMedia?.instagram) && (
              <li className="social-item">
                <a href={member?.socialMedia?.instagram || socialMedia?.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
