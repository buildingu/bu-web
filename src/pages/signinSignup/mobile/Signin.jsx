import { SigninForm } from "../Form";
import { Layout } from "../../../components/layout";
import s from "../styles.module.css";

const Signin = () => {
  return (
    <Layout>
      <main className={`${s.container} ${s.signinBg}`}>
        <nav className={s.navbar}>
          <img 
            src="/mockups/assets/homepage/logo_white.png" 
            alt="Building-U Logo" 
            className={s.logoImage} 
          />
          <div className={s.signInUpContainer}>
            <Link to="/signup" className={s.toggleButton}>
              <img 
                src="/mockups/assets/homepage/btn_06-signup.png" 
                alt="Switch to Sign Up" 
                className={s.signInUpImage} 
              />
            </Link>
          </div>
        </nav>
        <div className={s.formContainer}>
          <div className={s.signInFormSection}>
            <SigninForm onSuccess={() => null} /> 
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Signin;
