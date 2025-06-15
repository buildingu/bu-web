import s from "./section.module.css";

import logoDollars from "../../../../assets/images/dollarpage/logo_dollars.png";
import clickMe from "../../../../assets/images/dollarpage/click-me.png";
import backgroundInfo from "../../../../assets/images/dollarpage/background_info.png";
import weAreBoat from "../../../../assets/images/dollarpage/img_weare-05.png";
import moreInfoButton from "../../../../assets/images/dollarpage/btn-more_info-normal.png";
import contributeButton from "../../../../assets/images/dollarpage/btn-contrib-normal.png";
import s4ytBarLogo from "../../../../assets/images/menupage/05-btn-S4YT.png";
import menuButtonImage from "../../../../assets/images/menupage/01-logo-button-normal-white.png";
import phoneLogoDollars from "../../../../assets/images/dollarpage(phone)/logo_dollars.png";

const S4YTSection = () => {
  return (
    <section className={s.s4ytSection} id="s4ytSection">
      {/* Desktop Version */}
      <div className={s.s4ytDesktop}>
        <div className={s.s4ytLeftSec}>
          <img
            src={logoDollars}
            alt="Dollars for Your Thoughts Logo"
            className={s.s4ytPaper}
          />
          <img
            src={clickMe} 
            alt="Click Me"
            className={s.s4ytClick}
          />
        </div>

        <div className={s.s4ytMidSec}>
          <img
            src={backgroundInfo}
            alt="Background Info"
            className={s.s4ytBg}
          />
          <div className={`${s.s4ytTextBox}`}>
            <p className={`${s.s4ytMidSecBigWord} ${s.s4ytFirstBigWord}`}>
              $4YT OR <br /> $4 DOLLARS FOR <br /> YOUR THOUGHTS
            </p>
            <hr className={s.s4ytLine} />
            <p className={s.s4ytMidSecSmallWord}>
              Is our annual free funding event for high schoolers from all over
              the world
            </p>
            <p className={`${s.s4ytMidSecBigWord} ${s.s4ytSecondBigWord}`}>
              Contribute to $4YT
            </p>
            <hr className={s.s4ytLine} />
            <p className={s.s4ytMidSecSmallWord}>
              Our teams of high school students build the game and develop the
              campaigns to produce it.
            </p>
            <img
              src={weAreBoat}
              alt="Boat"
              className={s.s4ytBoat}
            />
          </div>
        </div>

        <div className={s.s4ytRightSec}>
          <img
            src={moreInfoButton}
            alt="More Info"
            className={`${s.s4ytTag} ${s.s4ytFirstTag}`}
          />
          <div className={s.s4ytSecondTag}>
            <p className={s.s4ytTextTag}>Visit our</p>
            <img
              src={contributeButton}
              alt="Contribute"
              className={s.s4ytTag}
            />
            <p className={s.s4ytTextTag}>
              To help them reach this year's funding goal
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className={s.s4ytMobile}>
        <div className={s.s4ytPhoneBar}>
          <img
            src={s4ytBarLogo}
            alt="BuildingU Logo"
            className={s.s4ytBarLogo}
          />
        </div>
        <div className={s.s4ytContent}>
          <img
            src={phoneLogoDollars}
            alt="Dollars for Your Thoughts Logo"
            className={s.s4ytRectangle}
          />
          <div className={s.s4ytBothSec}>
            <div className={s.s4ytLeftSec}>
              <p className={s.s4ytBigWords}>
                $4YT or dollars for your thoughts
              </p>
              <hr className={s.s4ytLine} />
              <p className={s.s4ytSmallWords}>
                Is our annual free funding event for high schoolers from all
                over the world
              </p>

              <p className={`${s.s4ytBigWords} ${s.s4ytSecondBigWord}`}>
                Contribute to $4YT
              </p>
              <hr className={s.s4ytLine} />
              <p className={s.s4ytSmallWords}>
                Our teams of high school students build the game and develop the
                campaigns to produce it.
              </p>
            </div>
            <div className={s.s4ytRightSec}>
              <img
                src={contributeButton}
                alt="Contribute"
                className={s.s4ytTag}
              />
              <div className={s.s4ytSecTag}>
                <p className={s.s4ytTextTag}>Visit our</p>
                <img
                  src={moreInfoButton}
                  alt="More Info"
                  className={s.s4ytTag}
                />
                <p className={s.s4ytTextTag}>
                  To help them reach this year's funding goal
                </p>
              </div>
            </div>
          </div>
          <img
            src={weAreBoat}
            alt="Boat"
            className={s.s4ytBoat}
          />
        </div>
      </div>
    </section>
  );
};

export default S4YTSection;