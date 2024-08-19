import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeData = (e) => {
    if (e.target.name === "email") {
      setLoginData({
        ...loginData,
        email: e.target.value,
      });

      setErrors({
        ...errors,
        emailErr:
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
          "Invalid email format",
      });
    } else if (e.target.name === "password") {
      setLoginData({
        ...loginData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length < 8 && "Password must be at least 8 characters",
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      console.log("Form Submitted", loginData);
    }
  };

  return (
    <div
      className="container bg-dark text-white"
      style={{
        maxWidth: "400px",
        marginTop: "50px",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 className="mb-4">Login</h2>
      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.emailErr && "border-danger"}`}
            value={loginData.email}
            onChange={(e) => changeData(e)}
            name="email"
          />
          <p className="text-danger">{errors.emailErr}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${
                errors.passwordErr && "border-danger outline-danger"
              }`}
              value={loginData.password}
              onChange={(e) => changeData(e)}
              name="password"
            />
            <button
              type="button"
              className="btn btn-outline-secondary bg-white text-dark"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HidePassword" : "Show"}
            </button>
          </div>
          <p className="text-danger">{errors.passwordErr}</p>
        </div>
        <button
          type="submit"
          disabled={errors.emailErr || errors.passwordErr}
          className="btn btn-success w-100"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
