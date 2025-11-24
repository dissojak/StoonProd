"use client";
import React, { useState, useEffect, Fragment } from "react";
import BlogList from "./components/BlogList";

type Post = {
  imgSrc: string;
  altText: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchedPosts: Post[] = [
      {
        imgSrc: "blog-1.jpg",
        altText: "Design conferences in 2022",
        category: "Design",
        date: "2022-02-23",
        title: "Design conferences in 2022",
        description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      },
      {
        imgSrc: "blog-2.jpg",
        altText: "Best fonts every designer",
        category: "Design",
        date: "2022-02-23",
        title: "Best fonts every designer",
        description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      },
      {
        imgSrc: "blog-3.jpg",
        altText: "Design digest #80",
        category: "Design",
        date: "2022-02-23",
        title: "Design digest #80",
        description: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      },
      {
        imgSrc: "blog-4.jpg",
        altText: "UI interactions of the week",
        category: "Design",
        date: "2022-02-23",
        title: "UI interactions of the week",
        description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
      },
      {
        imgSrc: "blog-5.jpg",
        altText: "The forgotten art of spacing",
        category: "Design",
        date: "2022-02-23",
        title: "The forgotten art of spacing",
        description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        imgSrc: "blog-6.jpg",
        altText: "Design digest #79",
        category: "Design",
        date: "2022-02-23",
        title: "Design digest #79",
        description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
      },
    ];

    setPosts(fetchedPosts);
  }, []);

  return (
    <Fragment>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <BlogList posts={posts} />
      </section>
    </Fragment>
  );
};

export default Blog;
