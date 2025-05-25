import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/InHeader.css';
import Logout from './Logout';
export default function InHeader({onServiceClick,onLoginClick,onQuestionClick,Mode}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showmenu,setShowmenu]=useState(true);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className='inheader'>
      <p className='inhead-text'>Easy Bank</p>
    <Logout/>   
      </div>
  )
}
