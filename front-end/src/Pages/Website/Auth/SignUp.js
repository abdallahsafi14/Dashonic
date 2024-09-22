import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { User } from "../Context/UserContext";
import "./Auth.css"
import Footer from "../../../component/Footer"

export default function SignUp() {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [passwordR, setPasswordR] = useState(``);
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
      let res = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userDetails = res.data.data.user;
      user.setAuth({ token, userDetails });
      nav("/");
      console.log(user.auth);
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      console.log(err);
      setAccept(true);
    }
  }
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100 px-3">
        <div className="justify-content-center my-auto row w-100">
          <div className="col-md-8 col-lg-6  col-xlg-4">
            <div>
              <div className="text-center mb-3 mb-md-4">
                <h1>
                  <img src={Logo} alt="" />
                </h1>
              </div>
              <div className="text-center mb-4">
                <h5>Register Account</h5>
                <p>Get your free Dashonic account now.</p>
              </div>
              <form onSubmit={submit} className="mt-4 custom-form">
                {/* Name */}
                <div className="form-floatings mb-3">
                  <div className="form-icon">
                  <i class="fas fa-light fa-user-group"></i>
                  </div>
                 
                  <input
                    type="text"
                    className="form-control"
                    id="input-name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {name.length < 2 && accept && (
                  <p className="error">Name must be more than 2 character</p>
                )}
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
                {emailError && accept && (
                  <p className="error">Email has already been taken</p>
                )}
                {/* password */}
                <div className="form-floatings mb-3">
                  <div className="form-icon">
                  <i class="fas fa-regular fa-lock"></i>
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
                {/*  confirm password*/}
                <div className="form-floatings mb-3">
                  <div className="form-icon">
                  <i class="fas fa-regular fa-lock"></i>
                  </div>
                  
                  <input
                    type="password"
                    className="form-control"
                    id="input-rePassword"
                    placeholder="Enter Email"
                    value={passwordR}
                    onChange={(e) => setPasswordR(e.target.value)}
                  />
                </div>
                {passwordR === !password && accept && (
                  <p className="error">Password does not match</p>
                )}
                <div className="text-start">
                  <p>
                    By registering you agree to the Dashonic
                    <Link className="ms-1 text-decoration-underline" to="#">
                      Terms of Use
                    </Link>
                  </p>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-info w-100 btn-secondary text-light"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <p>
                Already have an account ? 
                <Link className="fw-medium ms-1 text-decoration-underline" to="/login">
                 Signin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
