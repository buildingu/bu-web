import React from 'react';
import s from './styles.module.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className={s['desktop-bar']}>
      <nav className={s.bar}>
        <ul className={s.listbar}>
          <li className={s.desktopItem}>
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
          <li>
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
          <li>
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
        </ul>
      </nav>
    </div>
  </>
  );
};

export default Header;
