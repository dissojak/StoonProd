import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import PortfolioModal from "./PortfolioModal";
import { Portfolio } from "@/types/portfolio";

interface ProjectListProps {
  activeFilter: string;
  portfolios: Portfolio[];
}

const ProjectList: React.FC<ProjectListProps> = ({ activeFilter, portfolios }) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter portfolios based on the active filter
  const filteredPortfolios = portfolios.filter((portfolio) =>
    activeFilter === "All" ? true : portfolio.type === activeFilter,
  );

  const handleOpenModal = (portfolio: Portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPortfolio(null), 300); // Delay to allow animation
  };

  // Determine media type based on media URL
  const getMediaType = (portfolio: Portfolio): "reel" | "video" | "image" => {
    const mediaUrl = portfolio.mediaUrl.toLowerCase();

    // First check file extension for video files
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    const hasVideoExtension = videoExtensions.some(ext => mediaUrl.includes(ext));

    // Check if URL contains "reel" - display as vertical reel
    // Example: "https://...media.strapiapp.com/reel_1_2e5413ccf7.mp4"
    if (mediaUrl.includes("reel") && hasVideoExtension) {
      return "reel";
    }

    // Check if it's a video file (by extension OR contains "video"/"viedo")
    // Example: "https://...media.strapiapp.com/viedo_APLM_c26d79fada.mp4"
    if (hasVideoExtension || mediaUrl.includes("video") || mediaUrl.includes("viedo")) {
      return "video";
    }

    // Default to image for everything else (jpg, png, gif, etc.)
    return "image";
  };

  if (filteredPortfolios.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-gray-400">
        <p>No projects found for this filter.</p>
      </div>
    );
  }

  return (
    <>
      <ul className="project-list">
        {filteredPortfolios.map((portfolio) => (
          <ProjectItem
            key={portfolio.id}
            title={portfolio.title}
            category={portfolio.type}
            imgSrc={portfolio.imageSrc}
            description={portfolio.description}
            mediaUrl={portfolio.mediaUrl}
            mediaType={getMediaType(portfolio)}
            onClick={() => handleOpenModal(portfolio)}
          />
        ))}
      </ul>

      {/* Modal */}
      {selectedPortfolio && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedPortfolio.title}
          category={selectedPortfolio.type}
          description={selectedPortfolio.description}
          mediaUrl={selectedPortfolio.mediaUrl}
          mediaType={getMediaType(selectedPortfolio)}
        />
      )}
    </>
  );
};

export default ProjectList;
