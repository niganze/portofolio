import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
function Login() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // You can access the email and password values via the 'email' and 'password' variables
  };
  const toDashboard=()=>{
   navigate("/dashboard");
  }
  return (
    <div className="login_container">
      <h1>Login</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="button" onClick={toDashboard}>Login</button>
      {/* </form> */}
    </div>
  );
}

export default Login;
