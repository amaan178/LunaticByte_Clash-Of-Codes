import React from 'react';
import './Signin.css';

function SignIn() {
  return (
    <div className="container">
      <form className="form">
        <span className="signup">Sign Up</span>
        <input type="email" placeholder="Name" className="form--input" />
        <input type="email" placeholder="Email address" className="form--input" />
        <input type="password" placeholder="Password" className="form--input" />
        <input type="password" placeholder="Confirm password" className="form--input" />
    
       
        <button className="form--submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignIn;
