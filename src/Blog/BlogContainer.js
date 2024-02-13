import React from "react";
import BlogCard from "./BlogCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BlogContainer = ({ posts }) => {
  const stripHtml = (html) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <Container className="blog-container">
      <Row>
        {posts?.map((post, index) => (
          <BlogCard
            key={index}
            link={post.link}
            title={post.title}
            image={post.thumbnail}
            date={post.pubDate}
            author={post.author}
            description={stripHtml(post.description)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default BlogContainer;
