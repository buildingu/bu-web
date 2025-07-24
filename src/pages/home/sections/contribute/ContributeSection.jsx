import React, { useState } from "react";
import s from "./section.module.css";

import titleContribImage from "../../../../assets/images/conpage/title_contrib.png";
import contribImage from "../../../../assets/images/conpage/img_contrib.png";
import ushopLogo from "../../../../assets/images/conpage/img_ushop-logo.png";
import giftImage from "../../../../assets/images/conpage/img_gift.png";
import handMouseImage from "../../../../assets/images/conpage/img_hand-mouse.png";
import heartImage from "../../../../assets/images/conpage/img_heart.png";
import contribBarLogo from "../../../../assets/images/menupage/06-btn-contrib (1).png";
import menuButtonImage from "../../../../assets/images/menupage/01-logo-button-normal-white.png";

const ContributeSection = () => {
  const [activeSection, setActiveSection] = useState("info");
  const [selectedAmount, setSelectedAmount] = useState("US10");

  return (
    <section className={s.conSection} id="contributeSection">
      {/* Desktop Version */}
      <div className={s.conDesktop}>
        <div className={s.conPhoto}>
          <img
            src={titleContribImage}
            alt="I want to contribute"
            className={s.conPictures}
          />
          <img
            src={contribImage}
            alt="I want to contribute"
            className={s.conPictures}
          />
        </div>
        <div className={s.conChoose}>
          <div className={s.conButtons}>
            <button
              id="button1"
              className={`${s.conButton} ${
                activeSection === "info" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("info")}
            >
              Info
            </button>
            <button
              id="button2"
              className={`${s.conButton} ${
                activeSection === "contribute" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("contribute")}
            >
              Contribute
            </button>
            <button
              id="button3"
              className={`${s.conButton} ${
                activeSection === "merch" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("merch")}
            >
              Merch
            </button>
          </div>

          <div className={s.conParagraph}>
            {/* Info Section */}
            {activeSection === "info" && (
              <div className={s.paragraph1}>
                <h1 className={s.conInfoTitle}>Things U Help Us Do</h1>
                <ul>
                  <li>
                    <p className={s.conInfoText}>
                      Build a 100% free database of resources with ways to save
                      them
                    </p>
                  </li>
                  <li>
                    <p className={s.conInfoText}>
                      Maintain our internship program of 10 teams that produce
                      all we do
                    </p>
                  </li>
                  <li>
                    <p className={s.conInfoText}>
                      Support our annual free event for HS students from all
                      over the world
                    </p>
                  </li>
                </ul>
                <h1 className={s.conInfoTitle}>Things U Get for Your Support</h1>
                <ul>
                  <li>
                    <p className={s.conInfoText}>
                      A gift card U can use in our U-Shop &
                    </p>
                  </li>
                  <li>
                    <p className={s.conInfoText}>
                      Our sincerest thanks and appreciation
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Contribute Section */}
            {activeSection === "contribute" && (
              <div className={s.paragraph2}>
                <h1 className={s.conCTitle}>
                  Tell us who to thank and select an amount of support
                </h1>
                <div className={s.conCForm}>
                  <div className={s.conCFormText}>
                    <p className={s.conCFT}>Name</p>
                    <p className={s.conCFT}>Email</p>
                    <p className={s.conCFT}>Your Support</p>
                  </div>
                  <div className={s.conCFormInputs}>
                    <input type="text" name="name" className={s.conCFF} />
                    <input type="email" name="email" className={s.conCFF} />
                    <input
                      type="text"
                      name="support"
                      placeholder="US$"
                      className={s.conCFF}
                    />
                  </div>
                </div>
                <div className={s.conCSupport}>
                  <div className={s.conCSupportUp}>
                    {["US10", "US20", "US40"].map((amount) => (
                      <React.Fragment key={amount}>
                        <input
                          type="radio"
                          id={amount}
                          name="radio"
                          value={amount}
                          className={s.conCSU}
                          checked={selectedAmount === amount}
                          onChange={() => setSelectedAmount(amount)}
                        />
                        <label htmlFor={amount}>
                          <p className={s.conCSUD}>US${amount.substring(2)}</p>
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className={s.conCSupportDown}>
                    {["US60", "US80", "US100"].map((amount) => (
                      <React.Fragment key={amount}>
                        <input
                          type="radio"
                          id={amount}
                          name="radio"
                          value={amount}
                          className={s.conCSD}
                          checked={selectedAmount === amount}
                          onChange={() => setSelectedAmount(amount)}
                        />
                        <label htmlFor={amount}>
                          <p className={s.conCSUD}>US${amount.substring(2)}</p>
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <input type="button" value="Next" className={s.conCNext} />
              </div>
            )}

            {activeSection === "merch" && (
              <div className={s.paragraph3}>
                <div className={s.merchHeader}>
                  <div className={s.ushopLogoContainer}>
                    <img
                      src={ushopLogo}
                      alt="U-Shop Logo"
                      className={s.ushopLogo}
                    />
                  </div>
                  <div className={s.giftSection}>
                    <img src={giftImage} alt="Gift" className={s.giftIcon} />
                    <p className={s.giftText}>
                      Gifts-U-Can-Choose designed by the Student U-Crew
                    </p>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className={s.merchContent}>
                  {/* Left Column */}
                  <div className={s.leftColumn}>
                    <div className={s.leftHeader}>
                      <p className={s.merchSubtext}>A different way to:</p>
                      <h2 className={s.merchMainText}>Shop with U-Pointz</h2>
                      <h2 className={s.merchMainText}>&</h2>
                      <h2 className={s.merchMainText}>Support what you like</h2>
                    </div>
                    <div className={s.leftBullets}>
                      <p className={s.bulletPoint}>• Our high school internship programs!</p>
                      <p className={s.bulletPoint}>• More resources to more students!</p>
                      <p className={s.bulletPoint}>• $4YT scholarship for students</p>
                    </div>
                  </div>

                  {/* Center Column - Icons */}
                  <div className={s.centerColumn}>
                    <img
                      src={handMouseImage}
                      alt="Hand Mouse"
                      className={s.iconImage}
                    />
                    <img
                      src={heartImage}
                      alt="Heart"
                      className={s.iconImage}
                    />
                  </div>

                  {/* Right Column */}
                  <div className={s.rightColumn}>
                    <div className={s.rightHeader}>
                      <h2 className={s.merchMainText}>Sharing U-Pointz</h2>
                    </div>
                    <div className={s.rightBullets}>
                      <p className={s.bulletPoint}>• Use these yourself or share them with friends</p>
                      <p className={s.bulletPoint}>• Just click on the heart to make a free account and spread the love</p>
                    </div>
                  </div>
                </div>

                {/* Shop Button */}
                <div className={s.shopButtonContainer}>
                  <button className={s.shopButton}>Shop</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={s.conBg}></div>
      </div>

      {/* Mobile Version */}
      <div className={s.conMobile}>
        <div className={s.conPhoneBar}>
          <img
            src={contribBarLogo}
            alt="BuildingU Logo"
            className={s.conBarLogo}
          />
        </div>
        
        <div className={s.conFirstPage}>
          <div className={s.conButtonsContainer}>
            <button
              className={`${s.conMButtons} ${
                activeSection === "info" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("info")}
            >
              Info
            </button>
            <button
              className={`${s.conMButtons} ${
                activeSection === "contribute" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("contribute")}
            >
              Contribute
            </button>
            <button
              className={`${s.conMButtons} ${
                activeSection === "merch" ? s.activeButton : ""
              }`}
              onClick={() => setActiveSection("merch")}
            >
              Merch
            </button>
          </div>

          {/* Mobile Content Sections */}
          <div className={s.conMobileContent}>
            {/* Info Section Mobile */}
            {activeSection === "info" && (
              <div className={s.conInfoPage}>
                <h1 className={s.conMobileTitle}>Things U Help Us Do</h1>
                <ul className={s.mobileList}>
                  <li className={s.conMobileText}>
                    Build a 100% free database of resources with ways to save them
                  </li>
                  <li className={s.conMobileText}>
                    Maintain our internship program of 10 teams that produce all we do
                  </li>
                  <li className={s.conMobileText}>
                    Support our annual free event for HS students from all over the world
                  </li>
                </ul>
                <h1 className={s.conMobileTitle}>Things U Get for Your Support</h1>
                <ul className={s.mobileList}>
                  <li className={s.conMobileText}>
                    A gift card U can use in our U-Shop &
                  </li>
                  <li className={s.conMobileText}>
                    Our sincerest thanks and appreciation
                  </li>
                </ul>
              </div>
            )}

            {/* Contribute Section Mobile */}
            {activeSection === "contribute" && (
              <div className={s.conConPage}>
                <h1 className={s.conMobileTitle}>
                  Tell us who to thank and select an amount of support
                </h1>
                <div className={s.conMobileForm}>
                  <input type="text" placeholder="Name" className={s.conMobileInput} />
                  <input type="email" placeholder="Email" className={s.conMobileInput} />
                  <input type="text" placeholder="US$" className={s.conMobileInput} />
                </div>
                <div className={s.conMobileSupport}>
                  {["10", "20", "40", "60", "80", "100"].map((amount) => (
                    <button
                      key={amount}
                      className={`${s.conMobileSupportBtn} ${
                        selectedAmount === `US${amount}` ? s.selectedAmount : ""
                      }`}
                      onClick={() => setSelectedAmount(`US${amount}`)}
                    >
                      US${amount}
                    </button>
                  ))}
                </div>
                <button className={s.conMobileNext}>Next</button>
              </div>
            )}

            {/* Merch Section Mobile */}
            {activeSection === "merch" && (
              <div className={s.conMerchPage}>
                <div className={s.conMobileUshop}>
                  <h1 className={s.ushopTitle}>the U-Shop</h1>
                  <div className={s.conMobileGiftSec}>
                    <span className={s.giftIcon}><img src={giftImage}/></span>
                    <p className={s.conMobileGiftText}>
                      Gifts-U-Can-Choose designed by the Student U-Crew
                    </p>
                  </div>
                </div>
                <div className={s.conMobileMerchContent}>
                  <div className={s.conMobileMerchSection}>
                    <h2 className={s.conMobileMerchTitle}>A different way to:</h2>
                    <h2 className={s.conMobileMerchTitle}>Shop with U-Pointz & Support what you like</h2>
                  </div>
                  <div className={s.conMobileMerchList}>
                    <p className={s.conMobileText}>• Our high school internship programs!</p>
                    <p className={s.conMobileText}>• More resources to more students!</p>
                    <p className={s.conMobileText}>• $4YT scholarship for students</p>
                  </div>
                  <div className={s.conMobileMerchSection}>
                    <h2 className={s.conMobileMerchTitle}>Sharing U-Pointz</h2>
                    <p className={s.conMobileText}>• Use these yourself or share them with friends</p>
                    <p className={s.conMobileText}>• Just click on the heart to make a free account and spread the love</p>
                  </div>
                </div>
                <button className={s.conMobileShopButton}>Shop</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;