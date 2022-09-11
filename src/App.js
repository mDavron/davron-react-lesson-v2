import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLogin: true,
  };
  handleClick = () => {
    this.setState(prev => ({isLogin: !prev.isLogin}));
  };
  render() {
    return (
      <div className="app">
        <div className="form-wrapper">
          {this.state.isLogin ? (
            <Login goToSignUp={this.handleClick} />
            ) : (
            <SignUp goToLogin={this.handleClick} />
          )}
        </div>
        <div className="counter-wrapper flex-column">
          <Counter />
          <Counter initialCount={5}/>
          <Counter initialCount={10}/> 
        </div>
      </div>
    );
  }
}

export default App;
