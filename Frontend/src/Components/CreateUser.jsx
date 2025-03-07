import axios from 'axios';
import React,{useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import '../Styles/CreateUser.css'
export default function CreateUser() {
  const [Userdata, setUser] = useState({
        name:"",phno:"",balance:0,address:"",password:""
  });
  const handleChange = (e)=>{
    e.preventDefault();
       const{name,value}=e.target;
       setUser({...Userdata,[name]:value});
  }
  const handleSubmit =async(e)=>{
      console.log(Userdata);
      if(Userdata.password.length>6){
      
      try{
        const result= await axios.post("https://easybank-qgjy.onrender.com/bank/createuser",Userdata);
        if(result.data.success)
        {
          alert("successfully created user name");
        }
      }
      catch(e)
      {

      }
  }
  else{
    alert('invalid password');
  }
}
  return (
    <div className='create'>
      <Header/>
      <div className='create-main'>
      <p>Enter user name:</p>
      <input type="text" placeholder='User name' name="name" onChange={handleChange}/>
      <p>Enter phone number</p>
      <input type="number" placeholder='phone number' name="phno"onChange={handleChange}/>
      <p>Enter balance</p>
      <input type="number" placeholder='Balance' name="balance"onChange={handleChange}/>
      <p>Enter address:</p>
      <input type="text" placeholder='Address' name="address" onChange={handleChange}/>
      <p>Enter password:</p>
      <input type="text" placeholder='Password' name="password" onChange={handleChange}/>
      <div className='create-sub-div'>
      <p className="create-submit" onClick={handleSubmit}>Submit</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
