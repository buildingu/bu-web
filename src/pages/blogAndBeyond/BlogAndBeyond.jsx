import { Layout } from "../../components/layout";
import Blog from "./Blog";

import s from "./styles.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="/images/downtou-logo.png"
        alt="down to u logo"
        className={s.logo1}
      />
      <img
        src="/images/weare-logo.png"
        alt="we are a building-u blog"
        className={s.logo4}
      />
      <img
        src="/images/btn_go-back.png"
        alt="blog and beyond"
        className={s.logo2}
      />
      <img src="/images/btn_06-signup.png" alt="sign in" className={s.logo3} />
    </header>
  )
}

const BlogAndBeyond = () => {
  return (
    <Layout className={s.container} Header={Header} showFooter={false}>
      <Blog />
    </Layout>
  );
};

export default BlogAndBeyond;
