import React, { useEffect, useRef, useState } from "react";
import { useCustomScrollbar } from "./scrollbar.jsx"; // adjust path if needed
import s from "./styles.module.css";
import youtubeImage from "./assets/youtube.png";
import spotifyImage from "./assets/spotify.png";
import goatImage from "./assets/goat.png";
import logoImage from "./assets/logo.png";
import beyondImage from "./assets/beyond.png";
import resourcesImage from "./assets/btn_01-resources.png";
import blogImage from "./assets/btn_02-blog.png";
import letImage from "./assets/btn_03-lets.png";
import dollarsImage from "./assets/btn_04-dollars.png";
import contributeImage from "./assets/btn_05-contrib.png";
import signUpImage from "./assets/btn_06-signup.png";
import weAreLogoImage from "./assets/weare-logo.png";
import goBackImage from "./assets/btn_go-back.png";
import downtouImage from "./assets/downtou-logo.png";
import backgroundImage from "./assets/background.png";
import moleImage from "./assets/mole.png"

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
];


export default function Blog() {
  const contentRef = useRef(null);
  const scrollableRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? mockData
      : mockData.filter((item) =>
          item.categories.toLowerCase().includes(selectedCategory.toLowerCase())
        );


  useCustomScrollbar(scrollableRef, contentRef);

  useEffect(() => {
    if (window.innerWidth < 600) {
      window.location.href = "blogmob.html";
    }

    const onResize = () => {
      if (window.innerWidth < 600) {
        window.location.href = "blogmob.html";
      }
    };
    window.addEventListener("resize", onResize);

    const scrollable = scrollableRef.current;
    const onScroll = () => {
      const scrollTop = scrollable.scrollTop;
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollable.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setPagesLoaded((prevPages) => {
          if (prevPages < 10) {
            setBlocks((prev) => [...prev, ...Array.from({ length: 10 })]); // each page = 10 blocks
            return prevPages + 1;
          }
          return prevPages;
        });
      }
    };

    scrollable.addEventListener("scroll", onScroll);

    return () => {
      scrollable.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="bandbsection">
      <div className={s.header}>
        <img src={downtouImage} alt="down to u logo" className={s.logo1} />
        <img
          src={weAreLogoImage}
          alt="we are a building-u blog"
          className={s.logo4}
        />
        <img src={goBackImage} alt="blog and beyond" className={s.logo2} />
        <img src={signUpImage} alt="sign in" className={s.logo3} />
        <img src={moleImage} alt="mole" className={s.logo5} />
      </div>

      <div className={s.scrollArea} id="scrollable" ref={scrollableRef}>
        <div className={s.content} id="content" ref={contentRef}>
          {filteredData.map((item) => (
            <div key={item.id} className={s.blogCard}>
              <div className={s.blogHeader}>
                <h2 className={s.blogTitle}>{item.title.toUpperCase()}</h2>
                <span className={s.blogDate}>
                  {formatDate(item.datePublished)}
                </span>
              </div>
              <p className={s.blogAuthor}>By {item.author}</p>
              <p className={s.blogExcerpt}>
                {/* customize this with real preview content later */}
                We do our best to do our part. We haul our compost bins to the
                town recycling centre, we clear our email inboxes so they take
                up less space, and we wash plastic containers before recycling
                them. We understand that there are wildfires and melting ice and
                dying animals, which is why we alter our […]
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
        </div>
      </div>

      <div className={s.backgroundContainer}>
        <div className="overlay">
          <img
            src={backgroundImage}
            alt="background shapes"
            className={s.backgroundShapes}
          />
        </div>
      </div>

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
            onClick={() => setSelectedCategory(cat)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              marginBottom: "0.5rem",
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
