import { SignupForm } from "../Form";
import { Layout } from "../../../components/layout";
import s from "../styles.module.css";

const Signup = () => {
  return (
    <Layout>
      <main className={`${s.container} ${s.signupBg}`}>
        <nav className={s.navbar}>
          <img 
            src="/mockups/assets/homepage/logo_white.png" 
            alt="Building-U Logo" 
            className={s.logoImage} 
          />
          <div className={s.signInUpContainer}>
            <Link to="/signin" className={s.toggleButton}>
              <img 
                src="/mockups/assets/homepage/btn_06-signin.png" 
                alt="Switch to Sign In" 
                className={s.signInUpImage} 
              />
            </Link>
          </div>
        </nav>
        <div className={s.formContainer}>
          <div className={s.signUpFormSection}>
            <SignupForm onSuccess={() => null} /> 
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Signup;
