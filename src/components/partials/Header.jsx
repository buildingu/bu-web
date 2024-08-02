import React from 'react';
import s from './styles.module.css';
import {useState, useEffect} from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div className={s['desktop-bar']}>
      <nav className={s.bar}>
        <ul className={s.listbar}>
          <li className={s.desktopItemLogo}>
            <button className={s.barButtonLogo} onClick={() => scrollToSection('resourcessection')}>
              <img
                src="mockups/assets/homepage/logo_white.png"
                alt="Resources menu"
                className={s.logo}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('resourcessection')}
              style={{ left: '30vw' }}
            >
              <img
                src="mockups/assets/homepage/btn_01-resources.png"
                alt="Resources menu"
                className={s.barSmallbaricon}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('bandbsection')}
              style={{ left: '40vw' }}
            >
              <img
                src="mockups/assets/homepage/btn_02-blog.png"
                alt="Blog menu"
                className={s.barSmallbaricon}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('talksection')}
              style={{ left: '50vw' }}
            >
              <img
                src="mockups/assets/homepage/btn_03-lets.png"
                alt="Talk menu"
                className={s.barSmallbaricon}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('s4ytsection')}
              style={{ left: '60vw' }}
            >
              <img
                src="mockups/assets/homepage/btn_04-dollars.png"
                alt="S4YT menu"
                className={s.barSmallbaricon}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('consection')}
              style={{ left: '75vw' }}
            >
              <img
                src="mockups/assets/homepage/btn_05-contrib.png"
                alt="Contribute menu"
                className={s.barBigbaricon}
              />
            </button>
          </li>
          <li className={s.desktopItem}>
            <button className={s.barButton} style={{ left: '85vw' }}>
              <img
                src="mockups/assets/homepage/btn_06-signup.png"
                alt="Signup menu"
                className={s.barBigbaricon}
              />
            </button>
          </li>
          <li className={s.mobileHamburger}>
            <button className={s.barButton} style={{ left: '95vw' }} onClick = {toggleMobileMenu}>
              <img
                src={isMobileMenuOpen? "mockups/assets/homepage/hamburger_active.png" : "mockups/assets/homepage/hamburger-white.png"}
                alt="Hamburger menu"
                className={s.barBigbaricon}
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
    {isMobileMenuOpen? (<div className={s['mobile-bar']}>
      <ul className={s.listbar}>
          <li className={s.mobileItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('resourcessection')}
            >
              <img
                src="mockups/assets/homepage/btn_01-resources.png"
                alt="Resources menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
          <li className={s.mobileItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('bandbsection')}
            >
              <img
                src="mockups/assets/homepage/btn_02-blog.png"
                alt="Blog menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
          <li className={s.mobileItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('talksection')}
            >
              <img
                src="mockups/assets/homepage/btn_03-lets.png"
                alt="Talk menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
          <li className={s.mobileItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('s4ytsection')}
            >
              <img
                src="mockups/assets/homepage/btn_04-dollars.png"
                alt="S4YT menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
          <li className={s.mobileItem}>
            <button
              className={s.barButton}
              onClick={() => scrollToSection('consection')}
            >
              <img
                src="mockups/assets/homepage/btn_05-contrib.png"
                alt="Contribute menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
          <li className={s.mobileItem}>
            <button className={s.barButton}>
              <img
                src="mockups/assets/homepage/btn_06-signup.png"
                alt="Signup menu"
                className={s.mobileBarImg}
              />
            </button>
          </li>
        </ul>
    </div>): ""}  
  </>
  );
};

export default Header;
