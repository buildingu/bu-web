import { useEffect, useState } from "react";
import { mockData } from "./mock_data";
import ScrollArea from "../../components/ScrollArea/ScrollArea";

// import beyondImage from "/images/beyond.png";
// import resourcesImage from "/images/btn_01-resources.png";
// import blogImage from "/images/btn_02-blog.png";
// import letImage from "/images/btn_03-lets.png";
// import dollarsImage from "/images/btn_04-dollars.png";
// import contributeImage from "/images/btn_05-contrib.png";

import s from "./styles.module.css";

function formatDate(dateStr) {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
}

export default function Blog({ setIsExpanded }) {

  const filterData = (setData, category) => {
    console.log("category", category);

    setData((prev) => ({
      ...prev,
      blogs:
        category === "All"
          ? mockData
          : mockData.filter((item) => {
            console.log("item", item, item.categories.toLowerCase().includes(category.toLowerCase()));
            return item.categories.toLowerCase().includes(category.toLowerCase());
          }),
    }));
  };

  const [data, setData] = useState({ blogs: mockData, category: "All" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("data.blogs", data.blogs);
    }

  }, [data.blogs]);

  return (
    <main className={s.main}>
      <aside className={s.aside}>
        <div className={s.trapezoid}></div>
        <img
          src="/images/downtou-logo.png"
          alt="down to u logo"
          className={s.logo1}
        />
        <ul className={s.categoryList}>
          <li className={s.sideTextSmall}>Archives</li>
          {[
            "All",
            "Academics",
            "Climate Change",
            "Finance",
            "Growth",
            "Technology",
          ].map((cat) => (
            <li
              key={cat}
              onClick={() => filterData(setData, cat)}
              className={`${s.categoryItem} ${data.category === cat ? s.active : ""}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <div className={s.mainContent}>
        <ScrollArea className={s.content}>
          {data.blogs.map((item) => (
            <div key={item.id} className={s.blogCard}>
              <div className={s.blogHeader}>
                <h2 className={s.blogTitle}>{item.title.toUpperCase()}</h2>
                <span className={s.blogDate}>
                  {formatDate(item.datePublished)}
                </span>
              </div>
              <p className={s.blogAuthor}>By {item.author}</p>

              <p className={`${s.blogExcerpt}  ${s.collapsed}`}>
                We do our best to do our part. We haul our compost bins to the
                town recycling centre, we clear our email inboxes so they take
                up less space, and we wash plastic containers before recycling
                them. We understand that there are wildfires and melting ice and
                dying animals, which is why we alter our daily habits in hopes of making a difference, however small. We bike instead of drive when we can, choose reusable over disposable, and support companies with sustainable practices. These changes may seem insignificant on their own, but together, they are part of a collective effort to slow the damage and protect the only home we have.

              </p>
              <a
                href="#"
                className={s.readMore}
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(item.id);
                }}
              >
                Read More
              </a>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className={s.moleContainer}>
        <img src="/images/mole.png" alt="mole" className={s.mole} />
      </div>
    </main >
  );
}
