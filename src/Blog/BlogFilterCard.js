import React from "react";

const BlogFilterCard = ({ lang, active, onClick }) => {
  return (
    <div
      eventKey="1"
      className="blog-filter-card"
      onClick={onClick}
      id={active ? "blog-filter-card-select" : "blog-filter-card-non-select"}
    >
      <div
        className={active ? "filter-background" : "filter-background-null"}
      ></div>
      <div id="lang">{lang.toUpperCase()}</div>
    </div>
  );
};

export default BlogFilterCard;
