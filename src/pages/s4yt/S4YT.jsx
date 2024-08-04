import React, { useState, useEffect } from 'react';
import s from './styles.module.css'; // Import your CSS module
import { Layout } from '../../components/layout';
import { Link } from 'react-router-dom';

const S4YT = () => {
  const [visibleSection, setVisibleSection] = useState(0);

  // useEffect(() => {
  //   document.documentElement.style.overflow = "hidden"
  //   return () => document.documentElement.style.overflow = "";
  // }, []);

  // useEffect(() => {
  //   const sections = [s.txt1, s.txt2, s.txt3, s.txt4, s.txt5];
  //   sections.forEach((section, index) => {
  //     // const display = index + 1 === visibleSection ? "block" : "none";
  //     // const element = document.querySelector(`.${section}`);
  //     // if (element) {
  //     //   element.style.display = display;
  //     //   if (display === "block") {
  //     //     // element.classList.add("active");
  //     //   } else {
  //     //     // element.classList.remove("active");
  //     //   }
  //     // }
  //   });
  // }, [visibleSection])
  

  const handleSectionClick = (sectionNumber) => setVisibleSection(sectionNumber);

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

  const handleBackClick = () => setVisibleSection(null);
  

  // header
  // main
  // footer

  // TODO: Img is too skinny, use fixed sizes with width 100%.

  return (
    <Layout>
      <main className={s.s4ytsection}>
        <section className={s.s4ytLeftsec} style={{ marginRight: 0 }}>
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
        </section>
        {!visibleSection ? null : <button className = {s.backButton} onClick={handleBackClick}> Back </button>}
        
        {/* <div className="contentContainer"> */}
          {/* TODO: Get rid and just change the buttons with media query(ies). */}
          <div className={s.s4ytInfobuttons1}>
            <img
              src={getImageSource(0)}
              onClick={() => handleSectionClick(1)}
              alt="What is S4YT"
              className={visibleSection === 1 ? s.pressed : s.s4ytWhat}
            />
            <img
              src={getImageSource(1)}
              onClick={() => handleSectionClick(2)}
              alt="Am I Eligible"
              className={visibleSection === 2 ? s.pressed : s.s4ytAmi}
            />
            <img
              src={getImageSource(2)}
              onClick={() => handleSectionClick(3)}
              alt="When can I submit"
              className={visibleSection === 3 ? s.pressed : s.s4ytWhen}
            />
            <img
              src={getImageSource(3)}
              onClick={() => handleSectionClick(4)}
              alt="How do I submit"
              className={visibleSection === 4 ? s.pressed : s.s4ytHowdo}
            />
            <img
              src={getImageSource(4)}
              onClick={() => handleSectionClick(5)}
              alt="What are the prizes"
              className={visibleSection === 5 ? s.pressed : s.s4ytWhatare}
            />
          </div>

          {(visibleSection == null) ? (
            <div className={s.s4ytInfobuttons}>
              <img
                src={getImageSource(0)}
                onClick={() => handleSectionClick(1)}
                alt="What is S4YT"
                className={visibleSection === 1 ? s.pressed : s.s4ytWhat}
              />
              <img
                src={getImageSource(1)}
                onClick={() => handleSectionClick(2)}
                alt="Am I Eligible"
                className={visibleSection === 2 ? s.pressed : s.s4ytAmi}
              />
              <img
                src={getImageSource(2)}
                onClick={() => handleSectionClick(3)}
                alt="When can I submit"
                className={visibleSection === 3 ? s.pressed : s.s4ytWhen}
              />
              <img
                src={getImageSource(3)}
                onClick={() => handleSectionClick(4)}
                alt="How do I submit"
                className={visibleSection === 4 ? s.pressed : s.s4ytHowdo}
              />
              <img
                src={getImageSource(4)}
                onClick={() => handleSectionClick(5)}
                alt="What are the prizes"
                className={visibleSection === 5 ? s.pressed : s.s4ytWhatare}
              />
            </div>
          ) : null}

          {/* TODO: Inline styles are confusing when trying to figure out css if you come back or there is a new dev or something. */}
          {visibleSection === 0 && (
            <div className={`${s.textInfo} ${s.txt1}`}>
              <hgroup>
                <h3 className={s.textHeader} style={{ textAlign: "center", color: "#008dd2" }}>WHAT IS S4YT ABOUT?</h3>
                {/* TODO: This is not showing? */}
                <div className={s.line} />
              </hgroup>
              <br />
              <ul>
                <li className={s.listinfo}>Explore fun questions posed by businesses to win $$$</li>
                <li className={s.listinfo}>Earn Dubl-U-nes to win prizes</li>
                <li className={s.listinfo}>Sign up for post event meet-ups to learn more</li>
                <li className={s.listinfo}>Join our <Link to="#"><img src={"/mockups/assets/dollarpage/logo-discord.png"} width={20} height={20} alt="Discord" /></Link> to learn more and stay updated!</li>
              </ul>
              <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
            </div>
          )}
          {visibleSection === 1 && (
            <div className={`${s.textInfo} ${s.txt2}`}>
              <h3 className = {s.textHeader} style={{ textAlign: 'center',color: "#008dd2" }}>AM I ELIGIBLE?</h3>
              <hr style={{ margin: 0, height: "3px", opacity: 0.7 }} />
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
          )}
          {visibleSection === 2 && (
            <div className={`${s.textInfo} ${s.txt3}`}>
              <h3 className = {s.textHeader} style={{ textAlign: 'center',color: '#008dd2' }}>WHEN CAN I ATTEND?</h3>
              <hr style={{ margin: 0, height: '3px', opacity: 0.7 }} />
              <br />
              <ul>
                <li className={s.listinfo}>The event takes place in February 2025 but registration starts in September 2024!</li>
              </ul>
              <img className={s.infoImg} src={"mockups/assets/dollarpage/background_info.png"} alt="Background Info" />
            </div>
          )}
          {visibleSection === 3 && (
            <div className={`${s.textInfo} ${s.txt4}`}>
              <h3 className = {s.textHeader} style={{ textAlign: 'center',color: '#008dd2' }}>HOW DO I WIN $$?</h3>
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
          )}
          {visibleSection === 4 && (
            <div className={`${s.textInfo} ${s.txt5}`}>
              <h3 className = {s.textHeader} style={{ textAlign: 'center',color: '#008dd2' }}>WHAT ARE DULB-U-NES?</h3>
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
          )}
        {/* </div> */}
      </main>
    </Layout>
  );
};

// function InfoCard(index, title, listItems) {
//   <div className={`${s.textInfo} ${s.txt + index + 1}`}>
//     <h3 className={s.textHeader}>title</h3>
//     <hr style={{ margin: 0, height: "3px", opacity: 0.7 }} />
//     <br />
//     <ul>
//       {listItems.map((item) => (
//         <li className={s.listinfo}>item</li>
//       ))}
//     </ul>
//     <img
//       className={s.infoImg}
//       src={"mockups/assets/dollarpage/background_info.png"}
//       alt="Background Info"
//     />
//   </div>
// }

export default S4YT;
