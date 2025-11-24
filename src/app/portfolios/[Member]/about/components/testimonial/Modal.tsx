import React from "react";
import Image from "next/image";

type Testimonial = {
  name?: string;
  photo?: string;
  avatar?: string;
  review?: string;
  text?: string;
  date?: string;
};

interface ModalProps {
  activeTestimonial: Testimonial;
  closeModal: () => void;
  isClosing: boolean;
  handleTransitionEnd: () => void;
}

export default function Modal({
  activeTestimonial,
  closeModal,
  isClosing,
  handleTransitionEnd,
}: ModalProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div
      className={`modal-container ${isClosing ? "" : "active"}`}
      data-modal-container
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="overlay active" onClick={closeModal}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={closeModal}>
          <Image src="/assets/images/close24.png" alt="close" width={80} height={80} />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={activeTestimonial.photo || activeTestimonial.avatar || "/assets/images/avatar-1.png"}
              alt={activeTestimonial.name || "testimonial avatar"}
              width={80}
              height={80}
            />
          </figure>
          <Image src="/assets/images/icon-quote.svg" alt="quote icon" width={80} height={80} />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{activeTestimonial.name}</h4>
          <time dateTime={activeTestimonial.date || ""}>{formatDate(activeTestimonial.date)}</time>
          <div className="modal-text">
            <p>{activeTestimonial.review || activeTestimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
