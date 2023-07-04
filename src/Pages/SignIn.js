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
      <div class="kenne-login-register_area">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-xs-12 ">
              <form action="#">
                <div class="login-form">
                  <h4 class="login-title">Login</h4>
                  <div class="row">
                    <div class="col-md-12 col-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div class="col-12 mb--20">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div class="col-md-8">
                      <div class="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label for="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="forgotton-password_info">
                        <a href="#"> Forgotten pasward?</a>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button
                        style={{ width: "100%" }}
                        class="kenne-login_btn"
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
                          class="kenne-register_btn"
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
