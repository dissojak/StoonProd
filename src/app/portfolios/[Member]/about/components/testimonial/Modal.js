import Image from "next/image";

// src/components/Modal.js
export default function Modal({
  activeTestimonial,
  closeModal,
  isClosing,
  handleTransitionEnd,
}) {
  // Format date to "14 June, 2021" format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
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
          <Image
            src="/assets/images/close24.png"
            alt="close"
            width={80}
            height={80}
          />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={activeTestimonial.photo}
              alt={activeTestimonial.name}
              width={80}
              height={80}
            />
          </figure>
          <Image src="/assets/images/icon-quote.svg" alt="quote icon" width={80} height={80}/>
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{activeTestimonial.name}</h4>
          <time dateTime={activeTestimonial.date}>{formatDate(activeTestimonial.date)}</time>
          <div className="modal-text">
            <p>{activeTestimonial.review}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
