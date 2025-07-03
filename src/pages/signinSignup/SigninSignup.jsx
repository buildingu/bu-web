import { useState } from "react";
import { SigninForm, SignupForm } from "./Form";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";

import s from "./styles.module.css";

const SigninSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <Layout showFooter={false}>
      <main className={`${s.container} ${isSignUp ? s.signupBg : s.signinBg}`}>
        <nav className={s.navbar}>
          <img src="mockups/assets/homepage/logo_white.png" alt="Building-U Logo" className={s.logoImage} /> 

           <div className={s.signInUpContainer}>
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className={s.toggleButton}
            >
              <img 
                src={`/mockups/assets/homepage/btn_06-signup.png`} 
                alt={isSignUp ? "Switch to Sign In" : "Switch to Sign Up"} 
                className={s.signInUpImage} 
              />
            </button>
          </div>
        </nav>
        <div className={s.formContainer}>
          <section className={s.formSection}>
            {isSignUp ? (
              <div className={s.desktopTitleWrapper}>
                <img 
                  src="mockups/assets/homepage/title_signup.png" 
                  alt="Sign Up" 
                  className={s.signUpTitle} 
                />
              </div>
            ) : (
              <div className={s.desktopTitleWrapper}>
                <img 
                  src="mockups/assets/homepage/title_signin.png" 
                  alt="Sign In" 
                  className={s.signInTitle} 
                />
              </div>
            )}
            {isSignUp ? (
              <SignupForm onSwitch={() => setIsSignUp(false)} />
            ) : (
              <SigninForm onSwitch={() => setIsSignUp(true)} />
            )}
          </section>
        </div>
         <div className={s.poweredBy}>
            <span>Powered by</span>
            <div className={s.logos}>
              <img src="/mockups/assets/homepage/powerby.png" alt="Partner 1" />
              <img src="/mockups/assets/homepage/powerby.png" alt="Partner 2" />
              <img src="/mockups/assets/homepage/powerby.png" alt="Partner 3" />
              <img src="/mockups/assets/homepage/powerby.png" alt="Partner 4" />
            </div>
          </div>
      </main>
    </Layout>
  );
};
export default SigninSignup;
