import React from "react";

function Form() {
  return (
    <form className="form">
      <h1> LOGIN</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="enter your email to login your account"
        />
        <input type="password" placeholder="enter your password" />
        <button type="submit" className="login">
          Login
        </button>
        <div className="bottom-input">
          <button type="button">forget password</button>
          <button> register </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
