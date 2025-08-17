import s from "./section.module.css";

import aboutUsIcon from "../../../../assets/images/talkpage/01_aboutus.png";
import internshipIcon from "../../../../assets/images/talkpage/02_our-internship.png";
import connectIcon from "../../../../assets/images/talkpage/03_connect.png";
import partnerIcon from "../../../../assets/images/talkpage/04_partner.png";
import dogImage from "../../../../assets/images/talkpage/dog.png";
import logoImage from "../../../../assets/images/talkpage/logoletstalk.png";
import talkBarLogo from "../../../../assets/images/menupage/04-btn-letstalk (1).png";
import menuButtonImage from "../../../../assets/images/menupage/01-logo-button-normal-white.png";
import talkBluePhoto from "../../../../assets/images/talkpage(phone)/dog (1).png";
import aboutUsMobile from "../../../../assets/images/talkpage(phone)/btn-01_aboutus.png";
import internshipMobile from "../../../../assets/images/talkpage(phone)/btn-02_ourinternship.png";
import connectMobile from "../../../../assets/images/talkpage(phone)/btn-03_connect.png";
import partnerMobile from "../../../../assets/images/talkpage(phone)/btn-04_partner.png";

const LetsTalkSection = () => {
  return (
    <section className={s.talkSection} id="talkSection">
      {/* Desktop Version */}
      <div className={s.talkDesktop}>
        <div className={s.talkTitle}>
          <p className={s.talkTitleText}>Let's talk</p>
          <hr className={s.talkTitleLine} />
        </div>
        <div className={s.talkContents}>
          <img src={dogImage} alt="dog" className={s.talkDog} />
          <div className={s.talkBulletWrapper}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginLeft: 0 }}>
                <a href="#about-us" className={s.talkBulletRow}>
                  <span className={s.talkCircle}></span>
                  <span className={s.talkBulletText}>About Us</span>
                </a>
              </li>
              <li style={{ marginLeft: "8%" }}>
                <a href="#our-crew" className={s.talkBulletRow}>
                  <span className={s.talkCircle}></span>
                  <span className={s.talkBulletText}>Our Crew</span>
                </a>
              </li>
              <li style={{ marginLeft: "16%" }}>
                <a href="#our-internship" className={s.talkBulletRow}>
                  <span className={s.talkCircle}></span>
                  <span className={s.talkBulletText}>Our Internship</span>
                </a>
              </li>
              <li style={{ marginLeft: "24%" }}>
                <a href="#connect" className={s.talkBulletRow}>
                  <span className={s.talkCircle}></span>
                  <span className={s.talkBulletText}>Connect With us</span>
                </a>
              </li>
              <li style={{ marginLeft: "32%" }}>
                <a href="#partner" className={s.talkBulletRow}>
                  <span className={s.talkCircle}></span>
                  <span className={s.talkBulletText}>Partner With us</span>
                </a>
              </li>
            </ul>
          </div>
          <img src={logoImage} alt="Let's Talk Logo" className={s.talkLogo} />
        </div>
        <div className={s.talkBg}></div>
      </div>

      {/* Mobile Version */}
      <div className={s.talkMobile}>
        <div className={s.talkPhoneBar}>
          <img
            src={talkBarLogo}
            alt="BuildingU Logo"
            className={s.talkBarLogo}
          />
        </div>
        <div className={s.talkPhoneContent}>
          <div className={s.talkBlue}>
            <img
              src={talkBluePhoto}
              alt="Dog"
              className={s.talkBluePhoto}
            />
          </div>
          <div className={s.talkGreen}>
            <img
              src={aboutUsMobile}
              alt="About Us"
              className={s.talkGreenOptions}
            />
            <img
              src={internshipMobile}
              alt="Our Internship"
              className={s.talkGreenOptions}
            />
            <img
              src={connectMobile}
              alt="Connect"
              className={s.talkGreenOptions}
            />
            <img
              src={partnerMobile}
              alt="Partner"
              className={s.talkGreenOptions}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;