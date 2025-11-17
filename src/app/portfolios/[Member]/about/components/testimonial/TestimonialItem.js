import Image from "next/image";

// src/components/TestimonialItem.js
export default function TestimonialItem({ testimonial, onClick }) {
  console.log(testimonial.photo);
  return (
    <li className="testimonials-item">
      <div className="content-card" onClick={() => onClick(testimonial)}>
        <figure className="testimonials-avatar-box">
          <Image src={testimonial.photo}
           alt={testimonial.name} 
           width={80} 
           height={80} />
        </figure>
        <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
        <div className="testimonials-review">
          <p>
            {testimonial.review
              ? testimonial.review.length > 150
                ? `${testimonial.review.substring(0, 150)}...`
                : testimonial.review
              : "No testimonial review available."}
          </p>
        </div>
      </div>
    </li>
  );
}
