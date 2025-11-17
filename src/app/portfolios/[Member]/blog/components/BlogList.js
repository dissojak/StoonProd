// components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => (
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

export default BlogList;
