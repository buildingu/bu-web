import React from "react";
import s from "./section.module.css";

import logo from "../../../../assets/images/homepage/logo.png";
import peacock from "../../../../assets/images/homepage/peacock.png";
import line from "../../../../assets/images/homepage/line.png";
import knowMoreDesktop from "../../../../assets/images/homepage/know_more_desktop.png";
import signinLizardDesktop from "../../../../assets/images/homepage/signin_lizard_desktop.png";
import hamburger from "../../../../assets/images/homepage/hamburger.png";

const LandingSection = () => {
  return (
    <section className={s.landingSection}>
      {/* Desktop Version */}
      <div className={s.landingDesktop}>
        <div className={s.homeAside}>
          <div className={s.homeDesktopSidebar}>
            <img
              src={logo}
              alt="BuildingU Logo"
              className={`${s.upbar} ${s.homeSbar}`}
            />
            <img
              src={peacock}
              alt="Mr. Turkey"
              className={`${s.homeSbar} ${s.desktop}`}
            />
            <p className={`${s.homeSbar} ${s.desktop} ${s.homeSbarWord}`}>
              <cite>Gobble, Gobble, Gobble, Gobble...</cite>Mr. Turkey
            </p>
          </div>
        </div>

        <div className={s.separateTop}></div>

        <div className={s.landingContent}>
          <div className={s.homeLeftSec}>
            <img
              src={line}
              alt="Line"
              className={s.homeSectionLine}
            />
            <h1 className={s.homeSectionText}>
              We need to write here a little explanation.
            </h1>
            <img
              src={knowMoreDesktop}
              alt="Know More"
              className={s.homeSectionKnow}
            />
          </div>
          <div className={s.homeRightSec}>
            <img
              src={signinLizardDesktop}
              alt="Lizard SignIn Signup"
              className={s.homeSectionLizard}
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className={s.landingMobile}>
        <div className={s.homePhoneBar}>
          <img
            src={logo}
            alt="BuildingU Logo"
            className={s.homeBarLogo}
          />
        </div>

        <div className={s.homeUp}>
          <img
            src={signinLizardDesktop}
            alt="Lizard"
            className={s.homeLizard}
          />
        </div>
        <div className={s.homeDown}>
          <img
            src={knowMoreDesktop}
            alt="Know More"
            className={s.homeKnow}
          />
          <h1 className={s.homeWord}>
            We need to write here a little explanation.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;