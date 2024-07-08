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
const LetsTalkLogo_desktop = () => {
  return (
    <div id={styles.letsTalkLogoDiv}>
      <img
        src="mockups\assets\talkpage\logoletstalk.png"
        id={styles.letsTalkLogo}
        alt="Let's Talk Logo"
      />
    </div>
  );
};
const Options_desktop = () => {
  return (
    <div id={styles.options}>
      <button
        id={styles.SponsoringPartners}
        class={styles.options}
        onclick="sponsoringPartners()"
        type="button"
      >
        Sponsoring Partners
      </button>
      <button
        id={styles.EventPartners}
        class={styles.options}
        onclick="eventPartners()"
        type="button"
      >
        Event Partners
      </button>
      <button
        id={styles.RafflePartners}
        class={styles.options}
        onclick="rafflePartners()"
        type="button"
      >
        Raffle Partners
      </button>
    </div>
  );
};
const PlaceholderText_desktop = () => {
  return (
    <p id={styles.placeholderText}>Press one of the options to learn more</p>
  );
};
const SponsoringPartners_desktop = () => {
  return (
    <div id={styles.sponsoringPartnersText}>
      <div id={styles.sponsoringPartnersTextLeft}>
        <div id={styles.sponsoringPartnersTextLeft1}>
          <div class={styles.benefits} id={styles.logoPresence1}>
            Logo <br /> Presence
          </div>{" "}
          <br />
          <div class={styles.benefitsText}>
            Event Specific <br /> Perks:
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.b2bComm1}>
            B2B <br /> Communication
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.studentQnA1}>
            Student <br /> Q&A session
          </div>{" "}
          <br />
        </div>
        <div id={styles.sponsoringPartnersTextLeft2}>
          <div class={styles.benefitsText}>
            Get <br />
            Featured In:
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.emailCamp1}>
            Email <br /> Campaigns
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.socialMedia1}>
            Social <br /> Media
          </div>{" "}
          <br />
          <div class={styles.benefitsText}>
            Opportunity <br /> for:
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.teamNaming1}>
            Team <br /> Naming
          </div>{" "}
          <br />
          <div class={styles.benefits} id={styles.projSpon1}>
            Project <br /> Sponsorship
          </div>{" "}
          <br />
        </div>
      </div>
      <div id={styles.sponsoringPartnersTextRight}>
        <div id={styles.sponsoringPartnersTextRightTop}>
          These are our financial partners that provide the funding <br />
          and operational service support that make all of our <br />
          programming and growth at building-U possible. <br />
          As a SPONSORING PARTNER you get your LOGO featured <br />
          in our Footer and Hyperlinked to your page for a timeframe <br />
          of your choosing... plus a lot of other stuff possibly!
        </div>
        <div id={styles.sponsoringPartnersTextRightBottom}>
          <div id={styles.sponsoringPartnersTextRightBottomLeft}>
            1 mth/$500 <br />3 mth/$1400 <br />6 mth/$2700 <br />
            12 mth/$5000
          </div>
          <div id={styles.sponsoringPartnersTextRightBottomRight}>
            <button id={styles.partnerFormbtn} onclick="goToPartnerForm()">
              Go to <br />
              Partner Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const EventPartners_desktop = () => {
  return (
    <div id="eventPartnersText">
      <div id="eventPartnersTextLeft">
        <div id="eventPartnersTextLeft1">
          <div class={styles.benefits} id="logoPresence1">
            Logo <br /> Presence
          </div>{" "}
          <br />
          <div class={styles.benefitsText}>
            Event Specific <br /> Perks:
          </div>{" "}
          <br />
          <div class={styles.benefits} id="b2bComm1">
            B2B <br /> Communication
          </div>{" "}
          <br />
          <div class={styles.benefits} id="studentQnA1">
            Student <br /> Q&A session
          </div>{" "}
          <br />
        </div>
        <div id="eventPartnersTextLeft2">
          <div class={styles.benefitsText}>
            Get <br />
            Featured In:
          </div>{" "}
          <br />
          <div class={styles.benefits} id="emailCamp1">
            Email <br /> Campaigns
          </div>{" "}
          <br />
          <div class={styles.benefits} id="socialMedia1">
            Social <br /> Media
          </div>{" "}
          <br />
        </div>
      </div>
      <div id="eventPartnersTextRight">
        <div id="eventPartnersTextRightTop">
          These are people who have been invited to represent <br />
          their business or what they do at our event $4YT <br /> <br />
          As an EVENT PARTNER you get your LOGO <br />
          featured in the Partner portion of the $4YT page... <br />
          leading up to and during the event...plus some other stuff <br />{" "}
          <br /> In exchange, you give a bit of your time cto reate <br />
          questions, interact with students, evaluate submissions <br /> and
          select prize winners!
        </div>
        <div id="eventPartnersTextRightBottom">
          <div id="eventPartnersTextRightBottomLeft"></div>
          <div id="eventPartnersTextRightBottomRight">
            <button id="partnerFormbtn" onclick="goToPartnerForm()">
              Go to <br />
              Partner Form
            </button>
          </div>
        </div>
      </div>
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
const Right_side = () => {
  return (
    <div id={styles.rightSide}>
      <LetsTalkLogo_desktop />
      <Options_desktop />
      <PlaceholderText_desktop />
      <div id={styles.displayArea}>
        <SponsoringPartners_desktop />
        <div id="rafflePartnersText">
          <div id="rafflePartnersTextLeft">
            <div class="benefitsRaffle" id="logoPresence1">
              Logo <br /> Presence
            </div>
            <div class="benefitsText">
              Event Specific <br /> Perks:
            </div>{" "}
            <br />
            <div class="benefitsRaffle" id="b2bComm1">
              B2B <br /> Communication
            </div>
          </div>
          <div id="rafflePartnersTextRight">
            <div id="rafflePartnersTextRightTop">
              These are organizations who have offered to donate some <br />{" "}
              company swag to our Raffle Rally at $4YT <br /> <br />
              As a RAFFLE PARTNER you get your LOGO featured <br />
              on the Raffle page during the weekend of $4YT... <br />
              plus some other stuff
            </div>
            <div id="rafflePartnersTextRightBottom">
              <div id="rafflePartnersTextRightBottomLeft"></div>
              <div id="rafflePartnersTextRightBottomRight">
                <button id="partnerFormbtn" onclick="goToPartnerForm()">
                  Go to <br />
                  Partner Form
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="partnerFormDiv">
          <div id="partnerFormDivLeft">
            <div id="partnerFormLabels">
              First Name <br /> <br />
              Last Name <br /> <br />
              Business Name <br /> <br />
              Country <br /> <br />
              Email <br /> <br />
              Phone <br /> <br />
              Type of Plan
            </div>
            <div id="partnerFormInputs">
              <form id="partnerForm">
                <input
                  id="firstNameInput"
                  type="text"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <input
                  id="lastNameInput"
                  type="text"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <input
                  id="businessNameInput"
                  type="text"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <input
                  id="countryInput"
                  type="text"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <input
                  id="emailInput"
                  type="email"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <input
                  id="phoneNumberInput"
                  type="text"
                  class="partnerFormInputField"
                ></input>{" "}
                <br /> <br />
                <select
                  id="typeOfPlanInput"
                  class="partnerFormInputField"
                  oninput="optionPicked()"
                >
                  <option class="typeOfPlanOption" id="">
                    Select
                  </option>
                  <option class="typeOfPlanOption" id="">
                    12 months
                  </option>
                  <option class="typeOfPlanOption" id="">
                    6 months
                  </option>
                  <option class="typeOfPlanOption" id="">
                    3 months
                  </option>
                  <option class="typeOfPlanOption" id="">
                    1 month
                  </option>
                  <option class="typeOfPlanOption" id="">
                    Other
                  </option>
                </select>
              </form>
            </div>
          </div>
          <div id="partnerFormDivRight"></div>
        </div>
      </div>
    </div>
  );
};

const Desktop = () => {
  return (
    <>
      <Navbar_desktop />
      <main id="pageBody" style={{ display: "flex" }}>
        <Left_side />
        <Right_side />
      </main>
    </>
  );
};
const LetsTalk = () => {
  return <Desktop />;
};
export default LetsTalk;
