import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignIn() {
  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <div className="kenne-login-register_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xs-12 ">
              <form action="#">
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-md-12 col-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-12 mb--20">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label for="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="forgotton-password_info">
                        <a href="#"> Forgotten pasward?</a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        style={{ width: "100%" }}
                        className="kenne-login_btn"
                        onClick={() => notify()}
                      >
                        Login
                      </button>
                      <h6 className="text-center p-3">Or</h6>
                      <Link to={"?#"} id="login-button">
                        <button
                          style={{ width: "100%" }}
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                          className="kenne-register_btn"
                        >
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
