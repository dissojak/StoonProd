import React, { useState } from "react";
import TestimonialItem from "./TestimonialItem";
import Modal from "./Modal";

type Testimonial = {
  name?: string;
  photo?: string;
  avatar?: string;
  review?: string;
  text?: string;
  date?: string;
};

interface TestimonialsProps {
  testimonials?: Testimonial[] | null;
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const testimonialsData: Testimonial[] =
    testimonials || [
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

  const openModal = (testimonial: Testimonial) => {
    setIsClosing(false);
    setActiveTestimonial(testimonial);
  };

  const closeModal = () => {
    setIsClosing(true);
  };

  const handleTransitionEnd = () => {
    if (isClosing) setActiveTestimonial(null);
  };

  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} onClick={openModal} />
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
