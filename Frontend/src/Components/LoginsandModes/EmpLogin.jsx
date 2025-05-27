import React, { useState } from 'react';
import '../../Styles/EmpLogin.css';
import Header from '../Landingpage/Header';
import axios from 'axios';
import DialougeBox from '../DialougeBox';
import Loading from '../Operations/Loading';
const EmpLogin = () => {
  const [formData, setFormData] = useState({
    employeeId:"",
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const[redirect,setRedirect]=useState(false);
  const[content,setContent]=useState("");
  const[isLoading,setLoading]=useState(false);
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
    setLoading(true);
    console.log('Login Data:', formData);
    try{
      const response=await axios.post("https://easybank-qgjy.onrender.com/bank/emplogin",formData);
      if(response.data.success)
      {
        setContent(`successfully logged in! Welcome ${formData.employeeId}`);
        setShowMessage(true);
        setRedirect(true);
        
      }
    }
    catch(e)
    {
      if(e.response)
      {
        setContent(`Invalid credientials!`);
        setShowMessage(true);
        setFormData({employeeId:"",password:""});
      }
      else{
        console.log(e);
      }
    }
    finally
    {
      setLoading(false);
    }

    
  };
  const handleClose=()=>{
            setShowMessage(false);
            if(redirect){
                 window.location.href='/empdash';
            }
           
  }
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
        <p className='login-pwd-key'>Emp id: 12345, Pwd: 12345</p>
      </div>
       {showMessage && (
        <DialougeBox onClose={handleClose}>
         <p className='emp-box-p1'>{content}</p>
        </DialougeBox>
      )}
       {
            isLoading && <Loading data={"Loading....."}/>
          } 
    </div>
    </>
  );
};

export default EmpLogin;
