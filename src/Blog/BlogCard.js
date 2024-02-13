import React from "react";
import { Col } from "react-bootstrap";
import moment from "moment";

const BlogCard = ({ link, title, image, date, author }) => {
  return (
    <Col sm={12} lg={6} xxl={4}>
      <div className="blog-card">
        <div className="blog-body">
          {/*<img alt='thumbnail' className="blog-image" src={image} />*/}
          <div className="blog-details">
            <h2>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href={link}
              >
                {title}
              </a>
            </h2>
            <div>{moment(date).format("MMMM Do YYYY")}</div>
            <div>
              by:{" "}
              <a
                style={{ color: "inherit" }}
                href="https://donovanodom.medium.com/"
              >
                {author}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogCard;
