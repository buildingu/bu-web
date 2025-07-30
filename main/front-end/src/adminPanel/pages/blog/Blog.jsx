import { useState, useEffect } from "react";
import { Table } from "../../components/table";

// import api from "./services"

import s from "./blog.module.css";

const Blog = () => {
  const [loading, setLoading] = useState(false),
    [blogData, setBlogData] = useState({});

  const getBlogs = async () => {
    // const res = await fetch("url");
    // const data = await res.json();
    // setBlogData(data)
  };

  useEffect(() => {
    setLoading(true);
    // On client load.
    getBlogs().finally(() => setLoading(false)); // or you can just have this finally in getBlogs...
  }, []);

  //   useEffect(() => {
  //     // On client load too.
  //     if (blogData) {
  //       // Runs when blogData changes.
  //       // something
  //     }
  //   }, [blogData]);

  // Add title
  // Add author
  // Add body
  // On submission send a new Date timestamp in the request just because.

  return (
    <main className={s.container}>
      {loading ? <p>loading...</p> : <Table data={blogData} />}
    </main>
  );
};

export default Blog;
