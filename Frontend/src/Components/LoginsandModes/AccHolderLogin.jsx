import React, { useState } from 'react';
import '../../Styles/EmpLogin.css';
import Header from '../Landingpage/Header';
import axios from 'axios';
const AccHolderLogin = () => {
  const [formData, setFormData] = useState({
    accno: '',
    phno: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
  setShowPassword((prev) => !prev);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
       [name]: value === '' ? '' : Number(value)
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
   try{
      const response=await axios.post("http://localhost:5000/bank/userlogin",formData);
      if(response.data.success)
      {
        alert('successfully logined');
        window.location.href=`/accdash?accno=${formData.accno}`;
      }
      else{
        alert('invalid information');
      }
    }
    catch(error)
    {
      if (error.response) {
      if (error.response.status === 401) {
        alert('Invalid phno');
      } else if (error.response.status === 404) {
        alert('Account holder not found');
      } else {
        console.log('An error occurred: ' + error.response.status);
    }
  }
}
  
  };

  return (
    <>
    <Header Mode="Login" />
    <div className="login-container">
        
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Account Holder Login</h2>

        <input
          type="text"
          name="accno"
          placeholder="Account number"
          value={formData.accno}
          onChange={handleChange}
          required
        />

       <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    name="phno"
    placeholder="Phone number"
    value={formData.phno}
    onChange={handleChange}
    required
  />
  <span className="toggle-icon" onClick={togglePassword}>
    {showPassword ? '🙈' : '👁️'}
  </span>
</div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default AccHolderLogin;

