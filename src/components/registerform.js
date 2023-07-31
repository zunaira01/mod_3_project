
import React from "react";
import Header from "./header";
const Register = () => {
  return (
    <div className="register">
    <Header/>
    <div className="main">
      <div className="grid">
          <h2>We are ready to serve you differently.</h2>
          <span>Do you have an account?</span>
          <button>Login</button>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" />
            <br></br>
            <input type="email" placeholder="Email" />
            <br></br>
            <input type="password" placeholder="Password" />
            <br></br>
            <input type="text" placeholder="Name" />
            <br></br>
            <button>Register</button>
          </form>
        </div>
      </div>
      </div>
  );
};
export default Register;