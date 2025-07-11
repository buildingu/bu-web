import s from "./styles.module.css";
import { Layout } from "../../components/layout";
import Header from "./Header";
import Content from "./Content";

const BlogAndBeyond = () => {
  return (
    <Layout className={s.container}>
      <Header />

      <Content />

    </Layout>
  );
};

export default BlogAndBeyond;
