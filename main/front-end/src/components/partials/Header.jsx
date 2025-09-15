import { Link } from "react-router-dom";
import { useState } from "react";

import s from "./styles.module.css";

/**
 * The 'default' orange header that is used across multiple pages.
 */
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
            <img src="/images/partials/logo_white.png" alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`${s.navLinks} ${s.desktopNav}`}>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("resourcesSection")}
          >
            <img
              src="/images/partials/btn_01-resources.png"
              alt="resource"
              className={s.navButtonImg}
            />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("contributeSection")}
          >
            <img
              src="/images/partials/btn_05-contrib.png"
              alt="contribute"
              className={s.navButtonImg}
            />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("s4ytSection")}
          >
            <img
              src="/images/partials/btn_04-dollars.png"
              alt="dollar"
              className={s.navButtonImg}
            />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("blogSection")}
          >
            <img
              src="/images/partials/btn_02-blog.png"
              alt="blog"
              className={s.navButtonImg}
            />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("talkSection")}
          >
            <img
              src="/images/partials/btn_03-lets.png"
              alt="talk"
              className={s.navButtonImg}
            />
          </button>
          <button
            className={s.headerButton}
            onClick={() => scrollToSection("signupSection")}
          >
            <img
              src="/images/partials/btn_06-signup.png"
              alt="signup"
              className={s.navButtonImg}
            />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className={s.menuIcon} onClick={toggleMobileMenu}>
          <img
            src={
              isMobileMenuOpen
                ? "/images/partials/hamburger_active.png"
                : "/images/partials/01-logo-button-normal-white.png"
            }
            alt="menu"
          />
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
                <img src="/images/partials/02-btn-resources.png" alt="resource" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("blogSection")}
              >
                <img src="/images/partials/03-btn-blogandbeyond.png" alt="blog" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("talkSection")}
              >
                <img src="/images/partials/04-btn-letstalk.png" alt="talk" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("s4ytSection")}
              >
                <img
                  src="/images/partials/btn_04-dollars.png"
                  alt="dollar"
                  className={s.dollarIMG}
                />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("contributeSection")}
              >
                <img src="/images/partials/06-btn-contrib.png" alt="contribute" />
              </button>
              <button
                className={s.mobileHeaderButton}
                onClick={() => scrollToSection("signupSection")}
              >
                <img src="/images/partials/btn_06-signup.png" alt="signup" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
