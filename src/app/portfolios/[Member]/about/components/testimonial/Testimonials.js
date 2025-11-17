// src/components/Testimonials.js
import { useState } from 'react';
import TestimonialItem from './TestimonialItem'; // Import TestimonialItem
import Modal from './Modal'; // Import Modal

export default function Testimonials({ testimonials }) {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Fallback to hardcoded data if no testimonials provided
  const testimonialsData = testimonials || [
    {
      name: "Hazem Ben Saria",
      avatar: "/assets/images/avatar-1.png",
      text: "Adem was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Jessica Miller",
      avatar: "/assets/images/avatar-2.png",
      text: "Adem was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Emily Evans",
      avatar: "/assets/images/avatar-3.png",
      text: "Adem was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Henry William",
      avatar: "/assets/images/avatar-4.png",
      text: "Adem was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
  ];

  // Modal open function
  const openModal = (testimonial) => {
    setIsClosing(false); // Reset closing state when opening
    setActiveTestimonial(testimonial);
  };

  // Modal close function
  const closeModal = () => {
    setIsClosing(true); // Start closing animation
  };

  // Handle transition end to remove modal from DOM
  const handleTransitionEnd = () => {
    if (isClosing) {
      setActiveTestimonial(null); // Remove the modal from DOM after animation
    }
  };

  if (!testimonialsData || testimonialsData.length === 0) {
    console.log("No testimonials data available.");
    return null;
  }

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          // Using TestimonialItem component here
          <TestimonialItem
            key={index}
            testimonial={testimonial}
            onClick={openModal} // Pass the openModal function to handle click
          />
        ))}
      </ul>

      {activeTestimonial && (
        <Modal
          activeTestimonial={activeTestimonial}
          closeModal={closeModal}
          isClosing={isClosing}
          handleTransitionEnd={handleTransitionEnd}
        />
      )}
    </section>
  );
}
