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

export default function Header() {
  return (
    <>
      <div className={s.navbar}>
        <div>
          <img src={logoImage} alt="Logo" className={s.logo} />
        </div>
        <div className={s.navLinks}>
          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img
                src={resourcesImage}
                alt="Resources"
                className={s.resources}
              />
            </div>
          </span>

          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img src={blogImage} alt="Resources" className={s.blog} />
            </div>
          </span>

          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img src={letImage} alt="Let" className={s.let} />
            </div>
          </span>

          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img src={dollarsImage} alt="Dollars" className={s.dollars} />
            </div>
          </span>
        </div>

        <div className={s.navLinks_2}>
          <span className={s.imageWithColor}>
            <div className={s.coloredBlock}>
              <img
                src={contributeImage}
                alt="Contribute"
                className={s.contribute}
              />
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

