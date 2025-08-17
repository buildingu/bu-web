import s from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import resource from "../../assets/images/homepage/btn_01-resources.png";
import blog from "../../assets/images/homepage/btn_02-blog.png";
import talk from "../../assets/images/homepage/btn_03-lets.png";
import dollar from "../../assets/images/homepage/btn_04-dollars.png";
import contribute from "../../assets/images/homepage/btn_05-contrib.png";
import signup from "../../assets/images/homepage/btn_06-signup.png";
import logo from "../../assets/images/homepage/logo_white.png";
import menu from "../../assets/images/menupage/01-logo-button-normal-white.png";
import hamburger_active from "../../assets/images/homepage/hamburger_active.png";

import resourceMobile from "../../assets/images/menupage/02-btn-resources (1).png";
import blogMobile from "../../assets/images/menupage/03-btn-blogandbeyond (1).png";
import talkMobile from "../../assets/images/menupage/04-btn-letstalk (1).png";
import contributeMobile from "../../assets/images/menupage/06-btn-contrib (1).png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = window.innerHeight * 0.15;
    const yOffset = -headerHeight;

    if (section) {
      window.scrollTo({
        top: section.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  }

  return (
    <header className={s.header}>
      <nav className={s.navLinksWrapper}>
        <div className={s.headerLogo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`${s.navLinks} ${s.desktopNav}`}>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("resourcesSection")}
          >
            <img src={resource} alt="resource" className={s.navButtonImg} />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("contributeSection")}
          >
            <img src={contribute} alt="contribute" className={s.navButtonImg} />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("s4ytSection")}
          >
            <img src={dollar} alt="dollar" className={s.navButtonImg} />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("blogSection")}
          >
            <img src={blog} alt="blog" className={s.navButtonImg} />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("talkSection")}
          >
            <img src={talk} alt="talk" className={s.navButtonImg} />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("signupSection")}
          >
            <img src={signup} alt="signup" className={s.navButtonImg} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className={s.menuIcon} onClick={toggleMobileMenu}>
          <img src={isMobileMenuOpen ? hamburger_active : menu} alt="menu" />
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`${s.mobileOffcanvas} ${
          isMobileMenuOpen ? s.offcanvasOpen : ""
        }`}
      >
        {/* Backdrop */}
        <div
          className={`${s.offcanvasBackdrop} ${
            isMobileMenuOpen ? s.backdropShow : ""
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Offcanvas Panel */}
        <div
          className={`${s.offcanvasPanel} ${
            isMobileMenuOpen ? s.panelShow : ""
          }`}
        >
          <div className={s.offcanvasHeader}>
            <h3 className={s.offcanvasTitle}>Menu</h3>
            <button className={s.closeButton} onClick={closeMobileMenu}>
              <span>&times;</span>
            </button>
          </div>

          <div className={s.offcanvasBody}>
            <div className={s.mobileNavLinks}>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("resourcesSection")}
              >
                <img src={resourceMobile} alt="resource" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("blogSection")}
              >
                <img src={blogMobile} alt="blog" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("talkSection")}
              >
                <img src={talkMobile} alt="talk" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("s4ytSection")}
              >
                <img src={dollar} alt="dollar" className={s.dollarIMG} />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("contributeSection")}
              >
                <img src={contributeMobile} alt="contribute" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("signupSection")}
              >
                <img src={signup} alt="signup" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
