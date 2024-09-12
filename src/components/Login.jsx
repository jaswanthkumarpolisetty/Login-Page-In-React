import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <Link to="/forgetpassword" className="forgot-pass-link">
                  Forgot password?
                </Link>
              </div>
              <div className="login-center-buttons">
                <button type="button">Login</button>
                <p className="login-bottom-p">
                       Don't have an account? <Link to="/signup">Sign Up</Link>
               </p>
              </div>
            </form>
            <div className="auth">
            Or
          </div>
          <button className="Oauth">
                  <img src={GoogleSvg} alt="" />
                  <h3>Log In with Google</h3>
                  
          </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
