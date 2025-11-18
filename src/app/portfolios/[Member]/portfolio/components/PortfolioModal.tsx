import React from "react";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import Image from "next/image";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description?: string | null;
  mediaUrl: string;
  mediaType: "reel" | "video" | "image";
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  description,
  mediaUrl,
  mediaType,
}) => {
  if (!isOpen) return null;

  const isReel = mediaType === "reel";
  const isVideo = mediaType === "video" || mediaType === "reel";

  return (
    <>
      {/* Overlay with subtle backdrop blur */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
           <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 overflow-auto ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`relative bg-[#1e1e1f] rounded-2xl shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          } ${isReel ? "w-full max-w-[600px] sm:max-w-[90vw]" : "w-full max-w-5xl"} max-h-[95vh] overflow-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (fixed so it's always visible on small screens) */}
          <button
            className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center !bg-black/50 hover:bg-orange-600/70 rounded-full transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <Image src="/assets/images/close24.png" alt="close" width={80} height={80} />
          </button>
          {/* <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <IonIcon icon={close} className="text-white text-2xl" />
          </button> */}

          {/* Content Layout */}
          {isReel ? (
            // Reel Layout (Vertical - like Instagram Reels/TikTok)
            <div className="flex flex-col lg:flex-row">
              {/* Media Section - Takes more space */}
              <div className="relative bg-black flex items-center justify-center">
                {isVideo ? (
                  <video src={mediaUrl} controls autoPlay loop style={{ maxHeight: "85vh" }}>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={mediaUrl}
                    alt={title}
                    width={400}
                    height={700}
                    style={{ maxHeight: "85vh", width: "auto", height: "auto" }}
                  />
                )}
              </div>

              {/* Info Section - Compact sidebar */}
              <div className="!p-6 overflow-y-auto w-full lg:w-[300px] flex-shrink-0">
                <div className="!mb-3">
                  <span className="text-xs text-orange-400 uppercase tracking-wider">
                    {category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white !mb-3">{title}</h3>
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Description
                </h4>
                {description && (
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ) : (
            // Regular Layout (Horizontal - like YouTube)
            <div className="flex flex-col">
              {/* Media Section */}
              <div className="relative bg-black">
                {isVideo ? (
                  <video
                    src={mediaUrl}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[60vh] object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={mediaUrl}
                    alt={title}
                    width={1200}
                    height={675}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                )}
              </div>

              {/* Info Section Below Video */}
              <div className="!p-6">
                <div className="!mb-2">
                  <span className="text-xs text-orange-400 uppercase tracking-wider">
                    {category}
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-white !mb-4">{title}</h3>
                {description && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      Description
                    </h4>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
