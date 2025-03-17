import axios from 'axios';
import React,{useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import '../Styles/CreateUser.css'
import {jsPDF} from 'jspdf';
export default function CreateUser() {
  const [Userdata, setUser] = useState({
        name:"",phno:"",balance:0,address:""
  });
  const handleChange = (e)=>{
    e.preventDefault();
       const{name,value}=e.target;
       setUser({...Userdata,[name]:value});
  }
  const generatePDF = (object) => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Core Banker', 20, 20);
  
    // Add content
    doc.setFontSize(12);
    doc.text(`Account number: ${object.accno}`, 20, 30);
    doc.text(`User name: ${object.name}`, 20, 40);
    doc.text(`Balance: ${object.balance}`, 20, 50);
    doc.text(`Phone Number: ${object.phno}`, 20, 60);
    doc.text(`Address: ${object.address}`, 20, 70);
    doc.text(`Account number ${object.accno}`, 20, 80);
  
    // Save PDF
    doc.save(`${object.name}'s account.pdf`);
  };
  const handleSubmit =async(e)=>{
      console.log(Userdata);
    
      
      try{
        const result= await axios.post("https://easybank-qgjy.onrender.com/bank/createuser",Userdata);
        if(result.data.success)
        {
          alert("successfully created user name");
          generatePDF(result.data.user);
          // console.log(result.data.user);
        }
      }
      catch(e)
      {

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
      <div className='create-sub-div'>
      <p className="create-submit" onClick={handleSubmit}>Submit</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
