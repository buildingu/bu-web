import s from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import resource from "../../assets/images/homepage/btn_01-resources.png";
import blog from "../../assets/images/homepage/btn_02-blog.png";
import talk from "../../assets/images/homepage/btn_03-lets.png";
import dollar from "../../assets/images/homepage/btn_04-dollars.png";
import contribute from "../../assets/images/homepage/btn_05-contrib.png";
import signup from "../../assets/images/homepage/btn_06-signup.png";
import logo from "../../assets/images/homepage/logo_white.png";
import menu from "../../assets/images/menupage/01-logo-button-normal-white.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={s.header}>
      <nav className={s.navLinksWrapper}>
        <div className={s.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={`${s.navLinks} ${isMobileMenuOpen ? s.showMenu : ""}`}>
          <Link to="/" className={`${s.flexItems}`}>
            <img src={resource} alt="resource" />          
          </Link>
          <Link to="/" className={`${s.flexItems}`}>
            <img src={blog} alt="blog" />
          </Link>
          <Link to="/" className={`${s.flexItems}`}>
            <img src={talk} alt="talk" />
          </Link>
          <Link to="/" className={`${s.flexItems}`}>
            <img src={dollar} alt="dollar" className={`${s.dollarIMG}`} />
          </Link>
        </div>

        <div className={`${s.navLinks} ${isMobileMenuOpen ? s.showMenu : ""}`}>
          <div className={`${s.flexItems}`}>
            <Link to="/">
              <img
                src={contribute}
                alt="contribute"
                style={{ maxWidth: "7rem" }}
              />
            </Link>
          </div>
          <Link to="/" className={`${s.flexItems}`}>
            <img src={signup} alt="signup" style={{ maxWidth: "7rem" }} />
          </Link>
        </div>
        <div className={`${s.menuIcon}`} onClick={toggleMobileMenu}>
          <img src={menu} alt="menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
