import React from 'react';
import styles from './styles.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['desktop-footer']}>
        <div className={styles.partner}>
          <div>
            <h2 className={styles.powerBy}>Powered by</h2>
          </div>

          <div>
            <img
              src="mockups/assets/homepage/powerby.png"
              alt="sponsor"
              className={styles.sponsor}
            />
          </div>

          <div>
            <img
              src="mockups/assets/homepage/powerby.png"
              alt="sponsor"
              className={styles.sponsor}
            />
          </div>

          <div>
            <img
              src="mockups/assets/homepage/powerby.png"
              alt="sponsor"
              className={styles.sponsor}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
