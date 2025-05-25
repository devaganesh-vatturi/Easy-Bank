import React, { useState } from 'react';
import '../../Styles/EmpLogin.css';
import Header from '../Landingpage/Header';

const AccHolderLogin = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
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
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Add login logic here
  };

  return (
    <>
    <Header Mode="Login" />
    <div className="login-container">
        
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Employee Login</h2>

        <input
          type="text"
          name="employeeId"
          placeholder="Phone number"
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

        <button type="submit">
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default AccHolderLogin;

