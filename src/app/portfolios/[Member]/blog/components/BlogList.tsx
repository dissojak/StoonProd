import React from "react";
import BlogPost from "./BlogPost";

type Post = {
  imgSrc: string;
  altText: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="blog-posts-list">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          imgSrc={post.imgSrc}
          altText={post.altText}
          category={post.category}
          date={post.date}
          title={post.title}
          description={post.description}
        />
      ))}
    </ul>
  );
}
