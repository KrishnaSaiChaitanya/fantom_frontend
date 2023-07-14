import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="kenne-login-register_area">
        <div className="container">
          <div className="col-sm-12 col-md-12  col-xs-12">
            <form action="#">
              <div className="login-form">
                <h4 className="login-title">Register</h4>
                <div className="row">
                  <div className="col-md-6 col-12 mb--20">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="col-md-12">
                    <label>Email Address*</label>
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                  <div className="col-12">
                    <button
                      style={{ width: "100%" }}
                      className="kenne-register_btn"
                    >
                      Register
                    </button>
                    <h6 className="text-center p-3">Or</h6>
                    <Link to={"?#"} id="login-button">
                      <button
                        style={{ width: "100%" }}
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        className="kenne-register_btn"
                      >
                        Login
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
  );
}

export default SignUp;
