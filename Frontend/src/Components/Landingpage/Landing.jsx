import React,{useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import Services from './Services'
import Hero from './Hero'
import Login from './Login'
import Questions from './Questions'

export default function Landing() {
  const serviceRef = useRef(null);
  const loginRef = useRef(null);
  const questionRef= useRef(null);
    const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
  
   <Header onServiceClick={() => scrollToSection(serviceRef)} 
        onLoginClick={() => scrollToSection(loginRef)}
        onQuestionClick={() => scrollToSection(questionRef)}/> 
   <Hero/>
   <div ref={serviceRef}><Services/></div>
   <div ref={loginRef}><Login/></div>
   <div ref={questionRef}><Questions/></div>
   <Footer/>
   
    </>
   
  )
}
