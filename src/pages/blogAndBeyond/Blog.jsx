import { useEffect, useState } from "react";
import { ScrollArea } from "../../components/ScrollArea/ScrollArea";

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

const mockData = [
  {
    id: "ffb90f25-e305-4eea-a305-6a670e6d9175",
    title: "Understanding Quantum Computing",
    author: "Alice Johnson",
    categories: "Technology, Science",
    tags: "Quantum, Computing, Future",
    comments: "12",
    datePublished: "2024-09-15",
    link: "https://www.google.com",
  },
  {
    id: "d14024da-2318-4c9c-a511-67c2a22074e6",
    title: "The Rise of AI",
    author: "Bob Smith",
    categories: "Technology, AI",
    tags: "AI, Machine Learning",
    comments: "25",
    datePublished: "2024-09-18",
    link: "https://www.youtube.com/",
  },
  {
    id: "3bd1aee6-9d46-436b-82a0-31a311441aa1",
    title: "Exploring the Universe",
    author: "Carol Davis",
    categories: "academics, Science",
    tags: "Space, Exploration",
    comments: "8",
    datePublished: "2024-09-20",
    link: "https://github.com/",
  },
  {
    id: "c0152066-06c9-4dde-84b1-f5b1ef440768",
    title: "Healthy Eating Habits",
    author: "David Wilson",
    categories: "growth, Lifestyle",
    tags: "Nutrition, Wellness",
    comments: "15",
    datePublished: "2024-09-12",
    link: "https://building-u.com/",
  },
  {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec2c",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
  {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec26",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
    {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec25",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
    {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec29",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
    {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec23",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
    {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec22",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
    {
    id: "3b28abd8-aaec-45e1-a666-d01af6f7ec21",
    title: "The Future of Renewable Energy",
    author: "Emma Brown",
    categories: "climate change, Energy",
    tags: "Renewable, Sustainability",
    comments: "5",
    datePublished: "2024-09-22",
    link: "https://www.instagram.com/",
  },
];

export default function Blog() {
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
    <main>
      <img src="/images/mole.png" alt="mole" className={s.logo5} />

      <ScrollArea className={`${s.content} ${s.scrollAreaFixedHeight}`}>
        {data.blogs.map((item) => (
          <div key={item.id} className={s.blogCard}>
            <div className={s.blogHeader}>
              <h2 className={s.blogTitle}>{item.title.toUpperCase()}</h2>
              <span className={s.blogDate}>
                {formatDate(item.datePublished)}
              </span>
            </div>
            <p className={s.blogAuthor}>By {item.author}</p>
            <p className={s.blogExcerpt}>
              We do our best to do our part. We haul our compost bins to the
              town recycling centre, we clear our email inboxes so they take up
              less space, and we wash plastic containers before recycling them.
              We understand that there are wildfires and melting ice and dying
              animals, which is why we alter our […]
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.readMore}
            >
              Read More
            </a>
          </div>
        ))}
      </ScrollArea>

      <div className={s.trapezoid}></div>
      <div className={s.sideTextSmall}>
        Archives
        <hr />
      </div>
      <br />
      <div className={s.sideTextLarge}>
        {[
          "All",
          "Academics",
          "Climate Change",
          "Finance",
          "Growth",
          "Technology",
        ].map((cat) => (
          <div
            key={cat}
            onClick={() => filterData(setData, cat)}
            style={{
              cursor: "pointer",
              fontWeight: data.category === cat ? "bold" : "normal",
              marginBottom: "0.5rem",
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </main>
  );
}
