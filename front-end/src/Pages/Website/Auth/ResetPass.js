import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import Logo from "./logo.png";
import axios from "axios";
import { User } from "../Context/UserContext";
import "./Auth.css";
import Footer from "../../../component/Footer";

export default function ResetPass() {
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
      let res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      const token = res.data.data.token;
      cookie.set("Bearer", token);
      const userDetails = res.data.data.user;
      user.setAuth({ token, userDetails });
      nav("/");
      console.log(user.auth);
    } catch (err) {
      if (err.response.status === 422) {
        setError(true);
      }
      console.log(err);
      setAccept(true);
    }
  }
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100 px-3 pt-4">
        <div className="justify-content-center my-auto row w-100">
          <div className="col-md-8 col-lg-6  col-xlg-4">
            <div >
              <div className="text-center mb-3 mb-md-4">
                <h1>
                  <img src={Logo} alt="" />
                </h1>
              </div>
              <div className="text-center mb-4">
                <h5>Reset Password</h5>
                <p>Re-Password with Dashonic..</p>
              </div>
              <div className="text-center mb-4 alert alert-success fade show" role="alert">
                Enter your Email and instructions will be sent to you!
                </div>
              <form onSubmit={submit} className="mt-4  custom-form">
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
               
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-info w-100 btn-secondary text-light"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
