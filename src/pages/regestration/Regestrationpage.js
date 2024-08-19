import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    nameErr: "",
    usernameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setUserData({ ...userData, email: value });
      setErrors({
        ...errors,
        emailErr:
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && "Invalid email format",
      });
    } else if (name === "name") {
      setUserData({ ...userData, name: value });
      setErrors({
        ...errors,
        nameErr: value.length === 0 && "This Field Is Required",
      });
    } else if (name === "username") {
      setUserData({ ...userData, username: value });
      setErrors({
        ...errors,
        usernameErr:
          value.length === 0
            ? "This Field Is Required"
            : /\s/.test(value) && "Username cannot contain spaces",
      });
    } else if (name === "password") {
      setUserData({ ...userData, password: value });
      setErrors({
        ...errors,
        passwordErr:
          value.length < 8
            ? "Password must be at least 8 characters long."
            : !/[a-z]/.test(value)
            ? "Password must contain at least one lowercase letter."
            : !/[A-Z]/.test(value)
            ? "Password must contain at least one uppercase letter."
            : !/\d/.test(value)
            ? "Password must contain at least one digit."
            : !/[!@#$%^&*]/.test(value)
            ? "Password must contain at least one special character."
            : "",
      });
    } else if (name === "confirmPassword") {
      setUserData({ ...userData, confirmPassword: value });
      setErrors({
        ...errors,
        confirmPasswordErr:
          value !== userData.password && "Passwords do not match",
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    if (
      !errors.emailErr &&
      !errors.nameErr &&
      !errors.usernameErr &&
      !errors.passwordErr &&
      !errors.confirmPasswordErr
    ) {
      console.log("Form Submitted", userData);
      // Add form submission logic here
    }
  };

  return (
    <div
      className="container bg-dark text-white p-4"
      style={{
        maxWidth: "450px",
        marginTop: "50px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label className="form-label text-white">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.emailErr && "is-invalid"}`}
            value={userData.email}
            onChange={(e) => changeData(e)}
            name="email"
            placeholder="Enter your email"
          />
          <div className="invalid-feedback">{errors.emailErr}</div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Name</label>
          <input
            type="text"
            className={`form-control ${errors.nameErr && "is-invalid"}`}
            value={userData.name}
            onChange={(e) => changeData(e)}
            name="name"
            placeholder="Enter your full name"
          />
          <div className="invalid-feedback">{errors.nameErr}</div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Username</label>
          <input
            type="text"
            className={`form-control ${errors.usernameErr && "is-invalid"}`}
            value={userData.username}
            onChange={(e) => changeData(e)}
            name="username"
            placeholder="Choose a username"
          />
          <div className="invalid-feedback">{errors.usernameErr}</div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            type="password"
            className={`form-control ${errors.passwordErr && "is-invalid"}`}
            value={userData.password}
            onChange={(e) => changeData(e)}
            name="password"
            placeholder="Create a password"
          />
          <div className="invalid-feedback">{errors.passwordErr}</div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPasswordErr && "is-invalid"
            }`}
            value={userData.confirmPassword}
            onChange={(e) => changeData(e)}
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <div className="invalid-feedback">{errors.confirmPasswordErr}</div>
        </div>
        <button
          disabled={
            errors.emailErr ||
            errors.nameErr ||
            errors.usernameErr ||
            errors.passwordErr ||
            errors.confirmPasswordErr
          }
          type="submit"
          className="btn btn-primary w-100"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
