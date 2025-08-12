/* ===== Imports ===== */
import React, { useState } from 'react';
import s from './styles.module.css';
import "../../index.css";
import { Layout } from '../../components/layout';
import { Link } from 'react-router-dom';

/* ===== Constants and Assets ===== */

/* === Links === */

// Add links here!
const DISCORD_LINK = "https://youtube.com"
const S4YT_GAME_LINK = "https://youtube.com"
// switch to use react router dom link if need to send to a local page

/* === Image Paths === */

const BUTTON_IMAGES = {
  normal: [
    "/images/s4yt/btn_01-what-is-normal.png",
    "/images/s4yt/btn_02-am-i-normal.png",
    "/images/s4yt/btn_03-when-can-normal.png",
    "/images/s4yt/btn_04-how-do-i-normal.png",
    "/images/s4yt/btn_05-what-are-normal.png"
  ],
  pressed: [
    "/images/s4yt/btn_01-what-is-pressed.png",
    "/images/s4yt/btn_02-am-i-pressed.png",
    "/images/s4yt/btn_03-when-can-pressed.png",
    "/images/s4yt/btn_04-how-do-i-pressed.png",
    "/images/s4yt/btn_05-what-are-pressed.png"
  ]
};

const DISCORD_LOGO_PATH = "/images/s4yt/logo-discord.png";
const PAPER_LOGO_PATH = "/images/s4yt/logo_dollars.png";
const SPEECH_BUBBLE_PATH = "/images/s4yt/click-me.png";

/* === Section Content === */

/*
* - "[DISCORD]" is used to inject the discord logo into the content with a link.
* - items: Shown in bullet points as the main section content body.
* - title: The ALL CAPS main section header with the blue line seperator.
*/
const SECTION_CONTENT = [
  {
    title: "WHAT IS S4YT ABOUT?",
    items: [
      "Explore fun questions posed by businesses to win $",
      "Earn Dubl-U-nes to win prizes",
      "Sign up for post event meet-ups to learn more",
      "Join our [DISCORD] to learn more and stay updated!"
    ]
  },
  {
    title: "AM I ELIGIBLE?",
    items: [
      "Yes, if you are in grades 9-12 at the time of the contest!",
      "Students register for FREE and are assigned an ID# to play",
      "Join our [DISCORD] to learn more and stay updated!"
    ]
  },
  {
    title: "WHEN CAN I ATTEND?",
    items: [
      "The event takes place in February 2025 but registration starts in September 2024!"
    ]
  },
  {
    title: "HOW DO I WIN $?",
    items: [
      "Students may submit 1 (and only 1) answer to each business question, but may win multiple $$$ awards",
      "All student identity info and submission remain anonymous until prizes are awarded",
      "Students have 4 years to use $$(FUN-ding) on anything specific that will help foster success in the future",
      "Join our [DISCORD] to learn more and stay updated!"
    ]
  },
  {
    title: "WHAT ARE DUBL-U-NES?",
    items: [
      "Dubl-U-nes can be used to win prizes donated by our Raffle Partners",
      "All registered students receive 3 free Dubl-U-nes",
      "Students assign their Dubl-U-nes to selected raffle items over the course of the event",
      "Students can earn more Dubl-U-nes (once they register for the game) through a variety of social media interactions",
      "Join our [DISCORD] to learn more about earning Dubl-U-nes!"
    ]
  }
];

/* ===== Main Component Export ===== */

export default function S4YT() {
  /* ===== State ===== */

  const [visibleSection, setVisibleSection] = useState(1); // start on first section

  /* ===== Elements ===== */

  const discordLogo = (
    <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className={s.discordLogo}>
      <img 
        src={DISCORD_LOGO_PATH}
        className={s.discordLogo}
        alt="Discord"
      />
    </a>
  );

  /* ===== Utility Functions ===== */

  /**
   * Determines which button image to display based on the current visible section
   * Returns the pressed state image if the button's section is active, otherwise returns the normal state image
   * 
   * @param {number} index - The zero-based index of the button (0-4)
   * @returns {string} The image source path for the button's current state
   */
  const getImageSource = (index) => {
    if (visibleSection === index + 1) {
      return BUTTON_IMAGES.pressed[index];
    } else {
      return BUTTON_IMAGES.normal[index];
    }
  };

  /**
   * Sets the visible section to null, removing the content view (Mobile Only)
   */
  const handleBackClick = () => {
    setVisibleSection(null);
  };

  /**
   * Injects the discord logo into the content with a link on '[DISCORD]'
   * 
   * @param {string} content - The content to inject the discord logo into
   * @returns {ReactNode} The content with the discord logo injected
   */
  const injectDiscordPlug = (content) => {
    if (typeof content === 'string' && content.includes('[DISCORD]')) {
      const [before, after] = content.split('[DISCORD]');
      return (<>{before}{discordLogo}{after}</>);
    }
    return content;
  }

  /**
   * Sets the visible section to the clicked section number
   * 
   * @param {number} sectionNumber - The number of the section to display (1-5)
   */
  const handleSectionClick = (sectionNumber) => {
    setVisibleSection(sectionNumber);
  };
  
  /* ===== Component Render Functions ===== */

  /**
   * Renders the navigation buttons
   * @param {boolean} isMobile - Whether or not to render the mobile version (class name difference)
   */
  const renderNavButtons = (isMobile = false) => (
    <div className={isMobile ? s.navMobile : s.navDesktop}>
      {[1, 2, 3, 4, 5].map((sectionNum, index) => (
        <img
          key={sectionNum}
          src={getImageSource(index)}
          onClick={() => handleSectionClick(sectionNum)}
          alt={SECTION_CONTENT[index]?.title || `Section ${sectionNum}`}
          className={[s.navBtn, visibleSection === sectionNum ? s.pressed : s[`${['what', 'amI', 'when', 'howDo', 'whatAre'][index]}`]].join(' ')}
        />
      ))}
    </div>
  );

  /**
   * Renders the content for the currently selected section
   */
  const renderSectionContent = () => {
    if (!visibleSection) return null;
    const content = SECTION_CONTENT[visibleSection - 1];
    
    return (
      <div className={s.textInfo}>
        <hgroup>
          <h3 className={s.textHeader}>{content.title}</h3>
          <div className={s.line} />
        </hgroup>
        <ul>
          {content.items.map((item, i) => {
            /* === Inject Discord Logo Component on "[DISCORD]" === */
            const content = injectDiscordPlug(item);
            return (
              <li key={`item-${visibleSection}-${i}`} className={s.listinfo}>
                {content}
              </li>
            );
          })}
        </ul>
        <img 
          className={s.infoImg} 
          alt="Background Info" 
        />
      </div>
    );
  };

  const renderLeftSec = () => {
    return (
      <div className={s.leftSec}>
      <a href={S4YT_GAME_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={PAPER_LOGO_PATH}
          alt="S4YT Logo"
          className={s.paper}
        />
      </a>
      <a href={S4YT_GAME_LINK} target="_blank" rel="noopener noreferrer">
        <img
          src={SPEECH_BUBBLE_PATH}
          alt="Click Me"
          className={s.speechBub}
        />
      </a>
      </div>
    );
  }

 const renderMobileAddons = () => {
  return (
    /* Class Name "mobileAddons" ensures this will only be rendered on mobile */
    <div className={s.mobileAddons}>
    {/* More Info Button Only shown when no section is selected yet */}
    {!visibleSection && (
      <div className={s.moreInfoBlock}>
        <p className={s.moreInfoText}>More <br /> Info</p>
      </div>
    )}
    {/* Always Shown (in mobile) (not sure what intended functionality is when no section is selected from mockup)*/}
    <button className={s.backButton} onClick={handleBackClick}>
      Back
    </button>
    </div>
  );
 }
  
  /* ===== Main Render ===== */

  return (
    <Layout>
      <main>
        <div className={s.container}>
          {/* Left Section - Logo and Click Me */}
          {renderLeftSec()}
          {/* Main Content Area */}
          <div className={s.contentContainer}>
            {/* Desktop Navigation */}
            {renderNavButtons()}
            {/* Mobile Navigation - Only shown when no section is selected */}
            {!visibleSection && renderNavButtons(true)}
            {/* Mobile Back Button and More Info Addon */}
            {renderMobileAddons()}
            {/* Section Content */}
            {renderSectionContent()}
          </div>
        </div>
      </main>
    </Layout>
  );
}
