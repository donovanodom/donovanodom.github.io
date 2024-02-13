import React from "react";
import BlogFilterCard from "./BlogFilterCard";

const BlogFilterContainer = ({ activeLang, langs, setActiveLang }) => {
  return (
    <div className="blog-filter-container">
      {langs?.map((lang, index) => (
        <BlogFilterCard
          key={index}
          lang={lang}
          active={activeLang === lang}
          onClick={() => setActiveLang(lang)}
        />
      ))}
    </div>
  );
};

export default BlogFilterContainer;
