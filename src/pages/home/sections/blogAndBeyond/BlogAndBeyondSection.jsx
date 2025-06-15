import React from "react";
import s from "./section.module.css";
import blogIcon from "../../../../assets/images/bandbpage/btn_01-blog.png";
import youtubeIcon from "../../../../assets/images/bandbpage/btn_02-youtube.png";
import spotifyIcon from "../../../../assets/images/bandbpage/btn_03-spotify.png";
import goatImage from "../../../../assets/images/bandbpage/goat.png";
import blogMobileIcon from "../../../../assets/images/bandbpage(phone)/01_blog.png";
import youtubeMobileIcon from "../../../../assets/images/bandbpage(phone)/03_youtube.png";
import spotifyMobileIcon from "../../../../assets/images/bandbpage(phone)/02_spotify.png";
import blogBar from "../../../../assets/images/menupage/03-btn-blogandbeyond (1).png";
import goatMobile from "../../../../assets/images/bandbpage(phone)/goat.png";

const BlogAndBeyondSection = () => {
  return (
    <section className={s.bandbSection} id="blogSection">
      {/* Desktop Section */}
      <div className={s.bandbDesktop}>
        <div className={s.bandbTitle}>
          <p className={s.bandbTitleText}>Blog & Beyond</p>
          <hr className={s.bandbTitleLine} />
        </div>
        <div className={s.bandbContents}>
          <div className={s.bandbIconsWrapper}>
            <img src={blogIcon} alt="blog" className={s.bandbIcons} />
            <img src={youtubeIcon} alt="youtube" className={s.bandbIcons} />
            <img src={spotifyIcon} alt="spotify" className={s.bandbIcons} />
          </div>
          <div className={s.bandbGoatContainer}>
            <div className={s.bandbGoatText}>
              <p className={s.bandbTextboxText}>
                We must write stuff about blog and channels of communication
              </p>
            </div>
          </div>
        </div>
        <div className={s.bandbBg}></div>
      </div>

      {/* Mobile Section */}
      <div className={s.bandbMobile}>
        <div className={s.BlogPhoneBar}>
          <img
            src={blogBar}
            alt="BuildingU Logo"
            className={s.BlogBarLogo}
          />
        </div>
        <div className={s.bandbPhoneBar}>
          <img
            src={blogMobileIcon}
            alt="blog"
            className={s.bandbChoice}
          />
          <img
            src={youtubeMobileIcon}
            alt="youtube"
            className={s.bandbChoice}
          />
          <img
            src={spotifyMobileIcon}
            alt="spotify"
            className={s.bandbChoice}
          />
        </div>
        <div className={s.bandbGreen}>
          <p className={s.bandbGreenText}>
            We must write stuff about blog and channels.
          </p>
          <img src={goatMobile} alt="goat" className={s.bandbGreenGoat} />
        </div>
      </div>
    </section>
  );
};

export default BlogAndBeyondSection;