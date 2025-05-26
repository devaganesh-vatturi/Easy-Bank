import React, { useState } from 'react';
import '../../Styles/EmpLogin.css';
import Header from '../Landingpage/Header';
import axios from 'axios';
const EmpLogin = () => {
  const [formData, setFormData] = useState({
    employeeId:"",
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
  setShowPassword((prev) => !prev);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
     [name]: name === "employeeId" ? Number(value) : value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    try{
      const response=await axios.post("https://easybank-qgjy.onrender.com/bank/emplogin",formData);
      if(response.data.success)
      {
        alert('successfully logined');
        window.location.href='/empdash';
      }
    }
    catch(e)
    {
      if(e.response)
      {
        alert('invalid credientials');
      }
      else{
        console.log(e);
      }
    }

    
  };

  return (
    <>
    <Header Mode="Login" />
    <div className="login-container">
        
      <div className="login-form" >
        <h2>Employee Login</h2>

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />

       <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    required
  />
  <span className="toggle-icon" onClick={togglePassword}>
    {showPassword ? '🙈' : '👁️'}
  </span>
</div>

        <button onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
    </>
  );
};

export default EmpLogin;
