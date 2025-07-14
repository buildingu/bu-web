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

export default function Blog() {
  const contentRef = useRef(null);
  const scrollableRef = useRef(null);
  const [blocks, setBlocks] = useState(Array.from({ length: 10 }));

  // Use your custom scrollbar hook if you want
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
        setBlocks((prev) => [...prev, ...Array.from({ length: 5 })]);
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
          {blocks.map((_, i) => (
            <div key={i} className={s.contentBlock}>
              {`Content Block ${i + 1}`}
            </div>
          ))}
        </div>
        {/* <div>
          <button></button>
        </div> */}
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
        All
        <br />
        Academics
        <br />
        Climate Change
        <br />
        Finance
        <br />
        Growth
        <br />
        Technology
        <br />
      </div>
    </section>
  );
}
