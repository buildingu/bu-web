import s from "./styles.module.css";

// This is the 'default' orange header that is used across the project.
const Header = () => {
  return (
    <header>
      {/* <nav className={s.navbar}>
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
      </nav> */}
    </header>
  );
};

export default Header;
