import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Header.css';
export default function Header({onServiceClick,onLoginClick,onQuestionClick,Mode}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showmenu,setShowmenu]=useState(true);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  useEffect(() => {
  if (Mode === "Login") {
    setShowmenu(false);
  } else {
    setShowmenu(true);
  }
}, [Mode]);
  const gomain=(e)=>{
    window.location.href='/';
  }
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = 'hidden'; 
  //   } else {
  //     document.body.style.overflow = 'auto';   
  //   }
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [menuOpen]);
  return (
    <div className='header'>
      <p className='head-text' onClick={gomain}>Easy Bank</p>
      {showmenu && <>
      <div className="menu-icon" onClick={toggleMenu}>
      <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg"/>
        </div>
          
      <div className={`head-line ${menuOpen ? 'show' : ''}`}>
        
         <>
       <p className='head-line-p' onClick={onServiceClick}>Services</p>
       <p className='head-line-p' onClick={onLoginClick}>Login</p>
        <p className='head-line-p' onClick={onQuestionClick}>Questions</p>
       <p className='head-line-p'>About us</p>
       </>
         
      </div>
      </>
     }
      </div>
  )
}
