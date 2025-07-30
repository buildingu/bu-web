import { Layout } from "../../components/layout";
import sections from "./sections";
import LandingSection from "./sections/landing/LandingSection";
import s from "./styles.module.css";

const Home = () => {

  // Here we use destructure sections to allow for easier styling for separating borders between sections. 
  // We could have used sections directly, but I found this easier to style.
  const Blog = sections[0];
  const Contribute = sections[1];
  const LetsTalkSection = sections[2];
  const Resources = sections[3];
  const S4YTSection = sections[4];

  return (
    <Layout>
      <main className={s.container}>
        <LandingSection />

        <div className={`${s.geometricDivider} ${s.landingToResources}`}></div>

        <Resources />

        <div
          className={`${s.geometricDivider} ${s.resourcesToContribute}`}
        ></div>

        <Contribute />

        <div className={`${s.geometricDivider} ${s.contributeToS4YT}`}></div>

        <S4YTSection />

        <div className={`${s.geometricDivider} ${s.s4ytToBlog}`}></div>

        <Blog />

        <div className={`${s.geometricDivider} ${s.blogToLetsTalk}`}></div>

        <LetsTalkSection />
      </main>
    </Layout>
  );
};

export default Home;
