import { Layout } from "../../components/layout";
import sections from "./sections";
import LandingSection from "./sections/landing/LandingSection";
import s from "./styles.module.css";

const Home = () => {
  const Blog = sections[0];
  const Contribute = sections[1];
  const LetsTalkSection = sections[2];
  const Resources = sections[3];
  const S4YTSection = sections[4];

  return (
    <Layout>
      <main className={s.container}>
        <LandingSection />
        <Resources />
        <Blog />
        <LetsTalkSection />
        <S4YTSection />
        <Contribute />
      </main>
    </Layout>
  );
};

export default Home;