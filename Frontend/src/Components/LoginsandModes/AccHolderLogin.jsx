import React, { useState } from 'react';
import '../../Styles/EmpLogin.css';
import Header from '../Landingpage/Header';
import axios from 'axios';
import DialougeBox from '../DialougeBox';
import Loading from '../Operations/Loading';
const AccHolderLogin = () => {
  const [formData, setFormData] = useState({
    accno: '',
    phno: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
    const[token,setToken]=useState(null);
    const[redirect,setRedirect]=useState(false);
    const[isLoading,setLoading]=useState(false);
    const[content,setContent]=useState("");
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
    setLoading(true);
    console.log('Login Data:', formData);
   try{
      const response=await axios.post("https://easybank-qgjy.onrender.com/bank/userlogin",formData);
      if(response.data.success)
      {
        setContent(`successfully logged in! Welcome ${formData.accno}`);
          setToken(response.data.token);
        setShowMessage(true);
        setRedirect(true);
      }
    }
    catch(error)
    {
     
      if (error.response) {
      if (error.response.status === 401) {
        setContent(`Invalid Phone number!`);
        setShowMessage(true);
        setFormData({accno:"",phno:""});
      } else if (error.response.status === 404) {
       setContent(`Invalid Account number!`);
        setShowMessage(true);
        setFormData({accno:"",phno:""});
      } else {
        console.log('An error occurred: ' + error.response.status);
    }
  }
}
finally{
   setLoading(false);
}
  
  };
  const handleClose=()=>{
            setShowMessage(false);
            if(redirect){
               let data=btoa(formData.accno)
                 window.location.href=`/accdash?info=${data}&token=${token}`;
            }
           
  }

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

export default AccHolderLogin;