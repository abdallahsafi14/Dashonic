import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { User } from "../Context/UserContext";
import "./Auth.css";
import Footer from "../../../component/Footer";
import { startTransition } from 'react';
import { useTranslation } from "react-i18next";

export default function Login() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [accept, setAccept] = useState(false);
  const [Error, setError] = useState(false);

  // Use Navigate
  const nav = useNavigate();

  // Set Cookies
  const cookie = new Cookies();

  // auth
  const user = useContext(User);

  // submit function
  async function submit(e) {
    e.preventDefault();
    setAccept(true);
  
    try {
       startTransition(() => {
        // Wrap the async updates with startTransition
        axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: password,
        }).then((res) => {
          const token = res.data.data.token;
          cookie.set("Bearer", token);
          const userDetails = res.data.data.user;
          user.setAuth({ token, userDetails });
          nav("/");
          console.log(user.auth);
        });
      });
    } catch (err) {
      if (err.response.status === 422) {
        setError(true);
      }
      console.log(err);
      setAccept(true);
    }
  }
  

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100 px-3 pt-4">
        <div className="justify-content-center my-auto row w-100">
          <div className="col-md-8 col-lg-6  col-xlg-4">
            <div>
              <div className="text-center mb-3 mb-md-4">
                <h1>
                  <img src={Logo} alt="" />
                </h1>
              </div>
              <div className="text-center mb-4">
                <h5>{t("login.login header" )}</h5>
                <p>{t("login.get account" )}</p>
              </div>
              <form onSubmit={submit} className="mt-4 pt-2 custom-form">
                {/* Email */}
                <div className="form-floatings mb-3">
                  <div className="form-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <input
                    type="email"
                    className="form-control"
                    id="input-email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* password */}
                <div className="form-floatings mb-3">
                  <div className="form-icon">
                    <i className="fas fa-regular fa-lock"></i>
                  </div>

                  <input
                    type="password"
                    className="form-control"
                    id="input-password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {password.length < 8 && accept && (
                  <p className="error">
                    Password must be more than 8 character
                  </p>
                )}

                <div className="text-start d-flex rememberMe">
                  <input type="checkbox" id="check" />
                  <label className="ms-1" htmlFor="check">
                  {t("login.remember" )}
                  </label>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-info w-100 btn-secondary text-light"
                  >
                    {t("login.login" )}
                  </button>
                  {accept && Error && (
                    <p className="error">Wrong email or password</p>
                  )}
                </div>
              </form>
              <div className="text-center mt-4">
                <Link
                  to="/auth-resetpassword-basic"
                  className="text-muted text-decoration-underline"
                >
                  {t("login.forget password" )}
                </Link>
              </div>
              <div className="mt-5 text-center">
                <p>
                {t("login.don't have account" )}
                  <Link
                    className="fw-medium ms-1 text-decoration-underline"
                    to="/signUp"
                    >
                    {t("login.signup" )}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
