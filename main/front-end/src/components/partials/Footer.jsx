import s from "./styles.module.css";
import sponsor from "/images/partials/powerby.png";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.partner}>
        <div>
          <h2 className={s.powerbyt}>Powered by</h2>
        </div>

        <div className={s.sponsorRow}>
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
          <img
            src={sponsor}
            alt="sponsor"
            className={s.sponsor}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
