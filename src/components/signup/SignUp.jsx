import React, { Component } from "react";
import { FaGoogle, FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import "./SignUp.css";
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
 
  submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
  };
  render() {

    return (
      <div className="form-container">
        <h2 className="form-title">SIGN UP</h2>
        <form action="#" onSubmit={this.submitHandler}>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">SIGN UP</button>
        </form>

        <div className="line"></div>
        <div className="social-icons">
          <FaGoogle />
          <FaFacebookF />
          <FaInstagramSquare />
        </div>
        <div className="links">
          <span>
            Already are user?
            <a href="#" onClick={this.props.goToLogin}>
              LOGIN
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default SignUp;
