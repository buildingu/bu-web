import s from "./section.module.css";
import lizardImage from "../../../../assets/images/resourcespage/lizard_glass.png";
import squareImage from "../../../../assets/images/resourcespage/orng_square.png";
import bulletEduc from "../../../../assets/images/resourcespage/btn_01-educ.png";
import bulletOpport from "../../../../assets/images/resourcespage/btn_02-opport.png";
import bulletContest from "../../../../assets/images/resourcespage/btn_03-contest.png";
import mobileEduc from "../../../../assets/images/resourcespage(phone)/btn-01_education.png";
import mobileOpport from "../../../../assets/images/resourcespage(phone)/btn-02_opportunities.png";
import mobileContest from "../../../../assets/images/resourcespage(phone)/btn-03_contests.png";
import mobileLizard from "../../../../assets/images/resourcespage(phone)/lizard.png";
import resource from "../../../../assets/images/menupage/02-btn-resources (1).png";

const ResourcesSection = () => {
  return (
    <section className={s.resourcesSection} id="resourcesSection">
      {/* Desktop Version */}
      <div className={s.resourcesDesktop}>
        <div className={s.resourcesTitle}>
          <p className={s.resourcesTitleText}>Resources</p>
          <hr className={s.resourcesTitleLine} />
        </div>
        <div className={s.resourcesContent}>
          <div className={s.lizardContainer}>
            <img src={lizardImage} alt="lizard" className={s.resourcesLizard} />
          </div>
          <div className={s.resourcesTextbox}>
            <img src={squareImage} alt="resources" className={s.resourcesBox} />
            <p className={s.resourcesTextboxText}>What are resources?</p>
          </div>
          <div className={s.resourcesBulletWrapper}>
            <img src={bulletEduc} alt="Education" className={s.resourcesBullets} />
            <img src={bulletOpport} alt="Opportunities" className={s.resourcesBullets} />
            <img src={bulletContest} alt="Contests" className={s.resourcesBullets} />
          </div>
        </div>
        <div className={s.resourcesBg}></div>
      </div>

      {/* Mobile Version */}
      <div className={s.resourcesMobile}>
        <div className={s.resourcePhoneBar}>
          <img
            src={resource}
            alt="BuildingU Logo"
            className={s.resourceBarLogo}
          />
        </div>
        <div className={s.resourcesBlue}>
          <img src={mobileEduc} alt="Education" className={s.resourcesOptions} />
          <img src={mobileOpport} alt="Opportunities" className={s.resourcesOptions} />
          <img src={mobileContest} alt="Contests" className={s.resourcesOptions} />
        </div>
        <div className={s.resourcesPink}>
          <p className={s.resourcesPinkText}>What are resources?</p>
          <img src={mobileLizard} alt="lizard" className={s.resourcesPinkLizard} />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;