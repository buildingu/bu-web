import { useState } from "react";
import { SigninForm, SignupForm } from "./Form";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";

import s from "./styles.module.css";

// - It doesn't toggle, desktop and mobile pages.
// - Desktop is one page and it combined (page: /signin-signup) (Both sign in and sign up is here for desktop BUT you just REUSE the form.).
// - Mobile single pages for the forms. (page: /signin and /signiup).
// - Move the header and footer to partial components.
// - Css try to do the "path-to" way of doing css.
// - Some image in the google drive are dumb, like the title as a image, just use text and css.

// On desktop, when the screen gets smaller just make the forms stack on top of each other (try flex-wrap)
// On mobile it would just be normal, two different pages.

const SigninSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Layout showFooter={false}>
      <main className={`${s.container} ${isSignUp ? s.signupBg : s.signinBg}`}>
        <nav className={s.navbar}>
          <img
            src="mockups/assets/homepage/logo_white.png"
            alt="Building-U Logo"
            className={s.logoImage}
          />

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
          <section className={s.formSection} aria-labelledby="signInTxt">
            <h1 id="signInTxt">Sign In</h1>
            <SignupForm />
          </section>
          <section aria-labelledby="signUpTxt" style={{ position: "relative", zIndex: 1 }}>
            <div
              className={s.backgroundSkew}
              style={{
                position: "absolute",
                top: 0,
                left: "-120px",
                backgroundColor: "var(--c-blue)",
                transform: "skew(-25deg)",
                width: "calc(100% + 120px)",
                height: "100%",
                zIndex: -1
              }}
            />

            <h1 id="signUpTxt">Sign Up</h1>
            <SigninForm />
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
