import { jsx } from "react/jsx-runtime";
import styles from "./styles.module.css";
import { useRef, useState, useEffect } from "react";
// desktop components
const Navbar_desktop = () => {
  return (
    <div id={styles.navbar_div}>
      <nav id={styles.nav}>
        <ul id={styles.listbar}>
          <li id={styles.logo_item}>
            <button id={styles.building_u_logo}>
              <a href="index.html">
                <img
                  src="mockups\assets\homepage\logo_white.png"
                  alt="Building-U Logo"
                  id={styles.logo}
                  height="100px"
                ></img>
              </a>
            </button>
          </li>
          <li id={styles.about_us_link}>
            <button id={styles.about_us} className={styles.navButton}>
              <a
                href="!!!Link Not Avaliable!!!"
                id="aboutUsText"
                className={styles.navLink}
              >
                About
                <br />
                us
              </a>
            </button>
          </li>
          <li id="our_internship_link">
            <button id={styles.our_internship} className={styles.navButton}>
              <a
                href="!!!Link Not Avaliable!!!"
                id={styles.ourInternshipText}
                className={styles.navLink}
              >
                Our Internship
              </a>
            </button>
          </li>
          <li id={styles.connect_with_us_link}>
            <button id={styles.connect_with_us} className={styles.navButton}>
              <a
                href="!!!Link Not Avaliable!!!"
                id={styles.aboutUsText}
                className={styles.navLink}
              >
                Connect with us
              </a>
            </button>
          </li>
          <li id={styles.partner_with_us_link}>
            <button id={styles.partner_with_us} className={styles.navButton}>
              <a
                href="!!!Link Not Avaliable!!!"
                id={styles.partnerWithUsText}
                className={styles.navLink}
              >
                Partner with us
              </a>
            </button>
          </li>
          <li id={styles.sign_in_up_link}>
            <button id={styles.sign_in_up}>
              <a href="!!!Link Not Avaliable!!!" id={styles.signInUP}>
                <img
                  src="mockups\assets\homepage\btn_06-signup.png"
                  alt="Sign In/Up"
                  height="125px"
                />
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const Left_side = () => {
  return (
    <div id={styles.leftSide}>
      <p id={styles.PartnerWithUs}>Partner With Us</p>
      <hr id={styles.Line} />
      <div id={styles.leftCornerImages}>
        <img
          src="mockups\assets\talkpage\dog.png"
          alt="dog"
          id={styles.dog}
        ></img>
      </div>
    </div>
  );
};
const Desktop = () => {
  return (
    <>
      <Navbar_desktop />
      <main id="pageBody">
        <Left_side />
      </main>
    </>
  );
};
const LetsTalk = () => {
  return <Desktop />;
};
export default LetsTalk;
