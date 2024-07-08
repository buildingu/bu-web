import { Outlet } from "react-router-dom";
import { Layout } from "../../components/layout";
import s from "./styles.module.css";

const LetsTalk = () => {
  return (
    <Layout Header={Header} showFooter={false}>
      {/* The Outlet would reader the sub pages (about, ...) */}
      <Outlet /> 
    </Layout>
  );
};
export default LetsTalk;

// Stuff that is used access pages can go here, like the purple header.

const Header = () => {
  return <header className={s.header}>Header</header>;
};
