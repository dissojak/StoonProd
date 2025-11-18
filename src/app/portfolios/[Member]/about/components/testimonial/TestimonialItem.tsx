import React from "react";
import Image from "next/image";

type Testimonial = {
  name?: string;
  photo?: string;
  avatar?: string;
  review?: string;
  text?: string;
};

interface TestimonialItemProps {
  testimonial: Testimonial;
  onClick: (t: Testimonial) => void;
}

export default function TestimonialItem({ testimonial, onClick }: TestimonialItemProps) {
  const photo = testimonial.photo || testimonial.avatar || "/assets/images/avatar-1.png";

  return (
    <li className="testimonials-item">
      <div className="content-card" onClick={() => onClick(testimonial)}>
        <figure className="testimonials-avatar-box">
          <Image src={photo} alt={testimonial.name || "avatar"} width={80} height={80} />
        </figure>
        <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
        <div className="testimonials-review">
          <p>
            {testimonial.review
              ? testimonial.review.length > 150
                ? `${testimonial.review.substring(0, 150)}...`
                : testimonial.review
              : testimonial.text
              ? testimonial.text.length > 150
                ? `${testimonial.text.substring(0, 150)}...`
                : testimonial.text
              : "No testimonial review available."}
          </p>
        </div>
      </div>
    </li>
  );
}
