import s from "./styles.module.css";
import { Layout } from "../../components/layout";
import Header from "./Header";

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

const BlogAndBeyond = () => {
  return (
    <Layout className={s.container}>
      <Header />

      <div>
        <img src={beyondImage} alt="Beyond" className={s.beyond} />
        <hr className={s.line} />
      </div>
    </Layout>
  );
};

export default BlogAndBeyond;
