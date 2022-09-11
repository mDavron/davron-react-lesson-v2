import React, { Component } from "react";
import { FaGoogle, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

   submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  render() {

    return (
      <div className="form-container">
        <h2 className="form-title">LOGIN</h2>
        <form action="#" onSubmit={this.submitHandler}>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <label>
            <input type="checkbox"/>&nbsp;
            Remember me
          </label>
          <button type="submit"> LOGIN</button>
        </form>

        <div className="line"></div>
        <div className="social-icons">
          <FaGoogle />
          <FaFacebookF />
          <FaInstagramSquare />
        </div>
        <div className="links">
          <span>
            Need an account?
            <a href="#" onClick={this.props.goToSignUp}>
             SIGN UP
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
