import axios from 'axios';
import React,{useState} from 'react'
import InHeader from '../LoginsandModes/InHeader';
import Footer from '../Landingpage/Footer';
import '../../Styles/CreateUser.css'
import {jsPDF} from 'jspdf';
import DialougeBox from '../DialougeBox';
export default function CreateUser() {
  const [Userdata, setUser] = useState({
        name:"",phno:"",balance:0,address:""
  });
  const handleChange = (e)=>{
    e.preventDefault();
       const{name,value}=e.target;
       setUser({...Userdata,[name]:value});
  }
    const [showMessage, setShowMessage] = useState(false);
    const[content,setContent]=useState("");
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
        setContent(`successfully created new user with Accno ${result.data.user.accno}`);
        setShowMessage(true);
        setUser({name:"",phno:"",balance:0,address:""});
         generatePDF(result.data.user);
          
        }
      }
      catch(e)
      {
         setContent("Inalid data try again");
         setShowMessage(true);
      }
}
  const handleClose=()=>{
            setShowMessage(false);
           
  }
  return (
    <div className='create'>
      <InHeader/>
      <center className='create-head-txt'>Create User</center>
      <div className='create-div'>
      <div className='create-main'>
      <p>Enter user name:</p>
      <input type="text" placeholder='User name' name="name" value={Userdata.name} onChange={handleChange}/>
      <p>Enter phone number</p>
      <input type="number" placeholder='phone number' value={Userdata.phno} name="phno"onChange={handleChange}/>
      <p>Enter balance</p>
      <input type="number" placeholder='Balance' name="balance" value={Userdata.balance} onChange={handleChange}/>
      <p>Enter address:</p>
      <input type="text" placeholder='Address' name="address" value={Userdata.address} onChange={handleChange}/>
      <center className="create-submit" onClick={handleSubmit}>Submit</center>
      </div>
     
      </div>
       {showMessage && (
        <DialougeBox onClose={handleClose}>
         <p className='emp-box-p1'>{content}</p>
        </DialougeBox>
      )}
       <Footer/>
    </div>
  )
}
