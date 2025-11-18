import React from "react";
import Image from "next/image";

interface BlogPostProps {
  imgSrc: string;
  altText: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function BlogPost({ imgSrc, altText, category, date, title, description }: BlogPostProps) {
  return (
    <li className="blog-post-item">
      <a href="#">
        <figure className="blog-banner-box">
          <Image src={`/assets/images/${imgSrc}`} alt={altText} loading="lazy" height={150} width={300} />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>

          <h3 className="h3 blog-item-title">{title}</h3>

          <p className="blog-text">{description}</p>
        </div>
      </a>
    </li>
  );
}
