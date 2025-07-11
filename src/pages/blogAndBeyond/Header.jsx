import s from "./styles.module.css";

import youtubeImage from "./assets/youtube.png";
import spotifyImage from "./assets/spotify.png";
import goatImage from "./assets/goat.png";
import logoImage from "./assets/logo.png";
import beyondImage from "./assets/beyond.png";
import resourcesImage from "./assets/btn_01-resources.png";
import blogImage from "./assets/btn_02-blog.png";
import letImage from "./assets/btn_03-lets.png";
import dollarsImage from "./assets/btn_04-dollars.png";
import contributeImage from "./assets/btn_05-contrib.png";
import signUpImage from "./assets/btn_06-signup.png";
import weAreLogoImage from "./assets/weare-logo.png";
import goBackImage from './assets/btn_go-back.png';
import downtouImage from './assets/downtou-logo.png';

export default function Header() {
  return (
    <>
      <div className={s.navbar}>
        <div>
          <img src={downtouImage} alt="DownToU" className={s.downtou} />
        </div>
        <div>
          <img src={weAreLogoImage} alt="Logo" className={s.logo} />
        </div>

        <div className={s.navLinks_2}>
          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img src={goBackImage} alt="GoBack" className={s.goBack} />
            </div>
          </span>

          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img src={signUpImage} alt="SignUp" className={s.signUp} />
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

