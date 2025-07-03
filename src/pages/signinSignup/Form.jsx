// Maybe
import { useState } from "react";
import { history } from "../../utils/History";
import s from "./styles.module.css";

// // You could just have one validate for both and loop through the form values
// const validate = (felids) => {
//   felids.foreach((felid) => {
//     if (felid.name === "email") {
//       // do whatever for the email.
//     }
//   })
// };

export const SignupForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    } else if (formData.firstName.length > 30) {
      newErrors.firstName = "First name cannot exceed 30 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    } else if (formData.lastName.length > 30) {
      newErrors.lastName = "Last name cannot exceed 30 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length > 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = "Password must include uppercase, lowercase, number, and symbol";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      history.push("/resources");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>

      <p className={s.subtitle}>Not registered?</p>

      <div className={s.inputGroup}>
        <label htmlFor="firstName" className={s.label}>First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          className={errors.firstName ? s.error : ""}
        />
        {errors.firstName && <div className={s.errorMsg}>{errors.firstName}</div>}
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="lastName" className={s.label}>Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          className={errors.lastName ? s.error : ""}
        />
        {errors.lastName && <div className={s.errorMsg}>{errors.lastName}</div>}
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="email" className={s.label}>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={errors.email ? s.error : ""}
        />
        {errors.email && <div className={s.errorMsg}>{errors.email}</div>}
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="password" className={s.label}>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className={errors.password ? s.error : ""}
        />
        {errors.password && <div className={s.errorMsg}>{errors.password}</div>}
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="password" className={s.label}>Confirm Password</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className={errors.confirmPassword ? s.error : ""}
        />
        {errors.confirmPassword && <div className={s.errorMsg}>{errors.confirmPassword}</div>}
      </div>

      <div className={s.buttonsContainer}>
        <button type="submit" className={s.primaryButtonSignup}>Register</button>
      </div>
    </form>
  );
};

export const SigninForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ 
    email: "",
    password: "" 
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      history.push("/resources");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      
      <p className={s.subtitle}>Welcome</p>

      <div className={s.inputGroup}>
        <label htmlFor="firstName" className={s.label}>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={errors.email ? s.error : ""}
        />
        {errors.email && <div className={s.errorMsg}>{errors.email}</div>}
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="firstName" className={s.label}>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className={errors.password ? s.error : ""}
        />
        {errors.password && <div className={s.errorMsg}>{errors.password}</div>}
      </div>

      <div className={s.buttonsContainer}>
        <button 
          type="button" 
          onClick={onSwitch} 
          className={s.switchButton}
        >
          Forgot the password? Click here
        </button>
        <button type="submit" className={s.primaryButtonSignin}>Enter</button>
      </div>
    </form>
  );
};