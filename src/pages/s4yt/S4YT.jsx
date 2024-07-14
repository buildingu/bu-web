import React, { useState, useEffect } from 'react';
import s from './styles.module.css'; // Import your CSS module
import { Layout } from '../../components/layout';
import { Link } from 'react-router-dom';

const S4YT = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // Initial setup: hide all sections
    handleSectionDisplay(null);
  }, []);

  const handleSectionDisplay = (sectionNumber) => {
    const sections = [s.txt1, s.txt2, s.txt3, s.txt4, s.txt5];
    sections.forEach((section, index) => {
      const display = index + 1 === sectionNumber ? 'block' : 'none';
      const element = document.querySelector(`.${section}`);
      if (element) {
        element.style.display = display;
        if (display === 'block') {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    });
  };

  const handleSectionClick = (sectionNumber) => {
    setVisibleSection(sectionNumber);
    handleSectionDisplay(sectionNumber);
  };

  const buttonImages = [
    "mockups/assets/01_more-info/btn_01-what-is-normal.png",
    "mockups/assets/01_more-info/btn_02-am-i-normal.png",
    "mockups/assets/01_more-info/btn_03-when-can-normal.png",
    "mockups/assets/01_more-info/btn_04-how-do-i-normal.png",
    "mockups/assets/01_more-info/btn_05-what-are-normal.png"
  ];

  const pressedButtonImages = [
    "mockups/assets/01_more-info/btn_01-what-is-pressed.png",
    "mockups/assets/01_more-info/btn_02-am-i-pressed.png",
    "mockups/assets/01_more-info/btn_03-when-can-pressed.png",
    "mockups/assets/01_more-info/btn_04-how-do-i-pressed.png",
    "mockups/assets/01_more-info/btn_05-what-are-pressed.png"
  ];

  const getImageSource = (index) => {
    return visibleSection === index + 1 ? pressedButtonImages[index] : buttonImages[index];
  };

  const handleBackClick = () => {
    setVisibleSection(null);
    handleSectionDisplay(null);
  }

  const buttonClassNames = [
    s.s4ytWhat,
    s.s4ytAmi,
    s.s4ytWhen,
    s.s4ytHowdo,
    s.s4ytWhatare,
  ];

  return (
    <Layout>
      <section className={s.s4ytsection}>
        <div className={s.s4ytLeftsec} style={{ marginRight: 0 }}>
          <img
            src="mockups/assets/dollarpage/logo_dollars.png"
            alt="S4YT Logo"
            className={s.s4ytPaper}
          />  
          <img
            src="mockups/assets/dollarpage/click-me.png"
            alt="Click Me"
            className={s.s4ytClick}sizes=''
          />
        </div>
        {(width > 800 || visibleSection==null) ?"" : <button className = {s.backButton} onClick={handleBackClick}> Back </button>
        }
        {(width > 800 || visibleSection==null) ? (
          <div className={s.s4ytInfobuttons} style={{ marginLeft: '5%', marginRight: 0 }}>
            <img
              width="50px"
              src={getImageSource(0)}
              onClick={() => handleSectionClick(1)}
              alt="What is S4YT"
              className={visibleSection === 1 ? s.pressed : buttonClassNames[0]}
            />
            <img
              src={getImageSource(1)}
              onClick={() => handleSectionClick(2)}
              alt="Am I Eligible"
              className={visibleSection === 2 ? s.pressed : buttonClassNames[1]}
            />
            <img
              src={getImageSource(2)}
              onClick={() => handleSectionClick(3)}
              alt="When can I submit"
              className={visibleSection === 3 ? s.pressed : buttonClassNames[2]}
            />
            <img
              src={getImageSource(3)}
              onClick={() => handleSectionClick(4)}
              alt="How do I submit"
              className={visibleSection === 4 ? s.pressed : buttonClassNames[3]}
            />
            <img
              src={getImageSource(4)}
              onClick={() => handleSectionClick(5)}
              alt="What are the prizes"
              className={visibleSection === 5 ? s.pressed : buttonClassNames[4]}
            />
          </div>
        ) : null}

        <div className={`${s.textInfo} ${s.txt1}`} style={{ display: 'none' }}>
          <h3 className = {s.textHeader} style={{ textAlign: 'center',color: '#008dd2' }}>WHAT IS S4YT ABOUT?</h3>
          <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
          <br />
          <ul>
            <li className={s.listinfo}>Explore fun questions posed by businesses to win $$$</li>
            <li className={s.listinfo}>Earn Dubl-U-nes to win prizes</li>
            <li className={s.listinfo}>Sign up for post event meet-ups to learn more</li>
            <li className={s.listinfo}>Join our <Link to="#"><img src={"/mockups/assets/dollarpage/logo-discord.png"} width={20} height={20} alt="Discord" /></Link> to learn more and stay updated!</li>
          </ul>
          <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
        </div>

        <div className={`${s.textInfo} ${s.txt2}`} style={{ display: 'none' }}>
          <h3 className = {s.textHeader} style={{ textAlign: 'center', fontSize: '35px', color: '#008dd2' }}>AM I ELIGIBLE?</h3>
          <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
          <br />
          <ul>
            <li className={s.listinfo}>Yes, if you are in grades 9-12 at the time of the contest!</li>
            <li className={s.listinfo}>
              Students register for FREE and are assigned an ID# to play
            </li>
            <li className={s.listinfo}>Join our <Link to="#"><img src={"/mockups/assets/dollarpage/logo-discord.png"} width={20} height={20} alt="Discord" /></Link> to learn more and stay updated!</li>
          </ul>
          <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
        </div>

        <div className={`${s.textInfo} ${s.txt3}`} style={{ display: 'none' }}>
          <h3 className = {s.textHeader} style={{ textAlign: 'center', fontSize: '35px', color: '#008dd2' }}>WHEN CAN I ATTEND?</h3>
          <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
          <br />
          <ul>
            <li className={s.listinfo}>The event takes place in February 2025 but registration starts in September 2024!</li>
          </ul>
          <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
        </div>

        <div className={`${s.textInfo} ${s.txt4}`} style={{ display: 'none' }}>
          <h3 className = {s.textHeader} style={{ textAlign: 'center', fontSize: '35px', color: '#008dd2' }}>HOW DO I WIN $$?</h3>
          <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
          <br />
          <ul>
            <li className={s.listinfo}>{`Students may submit 1 (and only 1) answer to each business question, but may win multiple $$$ awards`}</li>
            <li className={s.listinfo}>All student identity info and submission remain anonymous until prizes are awarded</li>
            <li className={s.listinfo}>{`Students have 4 years to use $$(FUN-ding) on anything specific that will help foster success in the future`}</li>
            <li className={s.listinfo}>Join our <Link to="#"><img src={"/mockups/assets/dollarpage/logo-discord.png"} width={20} height={20} alt="Discord" /></Link> to learn more and stay updated!</li>
          </ul>
          <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
        </div>

        <div className={`${s.textInfo} ${s.txt5}`} style={{ display: 'none' }}>
          <h3 className = {s.textHeader} style={{ textAlign: 'center', fontSize: '35px', color: '#008dd2' }}>WHAT ARE DULB-U-NES?</h3>
          <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
          <br />
          <ul>
            <li className={s.listinfo}>Dubl-U-nes can be used to win prizes donated by our Raffle Partners</li>
            <li className={s.listinfo}>All registered students receive 3 free Dubl-U-nes</li>
            <li className={s.listinfo}>Students assign their Dubl-U-nes to selected raffle items over the course of the event</li>
            <li className={s.listinfo}>{`Students can earn more Dubl-U-nes (once they register for the game) through a variety of social media interactions`}</li>
            <li className={s.listinfo}>Join our <Link to="#"><img src={"/mockups/assets/dollarpage/logo-discord.png"} width={20} height={20} alt="Discord" /></Link> to learn more about earning Dubl-U-nes!</li>
          </ul>
          <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
        </div>
      </section>
    </Layout>
  );
};

export default S4YT;
