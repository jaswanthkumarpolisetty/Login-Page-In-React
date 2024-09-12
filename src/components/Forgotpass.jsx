import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const Forgotpass = () => {
  const [ showPassword1, setShowPassword1 ] = useState(false);
  const [ showPassword2, setShowPassword2 ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Create Password</h2>
            <form>
            <div className="forget-pass-input-div">
                <input type={showPassword1 ? "text" : "password"} placeholder="Create Password" />
                {showPassword1 ? <FaEyeSlash onClick={() => {setShowPassword1(!showPassword1)}} /> : <FaEye onClick={() => {setShowPassword1(!showPassword1)}} />}
                
              </div>
              <div className="forget-pass-input-div">
                <input type={showPassword2 ? "text" : "password"} placeholder="Confirm Password" />
                {showPassword2 ? <FaEyeSlash onClick={() => {setShowPassword2(!showPassword2)}} /> : <FaEye onClick={() => {setShowPassword2(!showPassword2)}} />}
                
              </div>

              <div className="next-center-buttons">
                <button type="button">Next</button>
              </div>
            </form>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
