import React from "react";
import BlogFilterContainer from "./BlogFilterContainer";
import BlogContainer from "./BlogContainer";
import { useState, useEffect } from "react";
import Auto from "../auto";

const Blog = () => {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom";

  const axios = require("axios").default;

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    axios
      .get(mediumURL)
      .then((info) => {
        const blogs = info.data.items;
        const posts = blogs.filter((post) => post.categories.length > 0);
        setBlog({ item: posts, isLoading: false });
      })
      .catch((err) => setBlog({ error: err.message }));
  }, [axios]);

  const [activeLang, setActiveLang] = useState("All");
  const langs = ["All", "JS", "CSS", "React", "Redux", "Ruby", "Rails", "AWS"];

  const filteredBlogs = blog.item.filter((i) =>
    i.categories.includes(activeLang.toLowerCase())
  );

  return (
    <Auto duration={500} height={"auto"}>
      <BlogFilterContainer
        activeLang={activeLang}
        langs={langs}
        setActiveLang={setActiveLang}
      />
      <BlogContainer posts={activeLang === "All" ? blog.item : filteredBlogs} />
      <div className="blog-padding"></div>
    </Auto>
  );
};

export default Blog;
