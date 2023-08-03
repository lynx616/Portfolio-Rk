import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Work  from './Work';
import About from './About';
import Footer from './Footer';
function App(){
      const [homeOnOff, sethomeOnOff] = useState(true);
      const [contactOnOff, setcontactOnOff] = useState(false);
      const [workOnOff, setworkOnOff] = useState(false);
      const [aboutOnOff, setaboutOnOff] = useState(false);

      function homeDekhao(){
        sethomeOnOff(true);
        setcontactOnOff(false);
        setworkOnOff(false);
        setaboutOnOff(false);
      }
      function contactDekhao(){
        setcontactOnOff(true);
        sethomeOnOff(false);
        setworkOnOff(false);
        setaboutOnOff(false);
      }
      function workDekhao(){
        setworkOnOff(true);
        setcontactOnOff(false);
        sethomeOnOff(false);
        setaboutOnOff(false);
      }
      function aboutDekhao(){
        setaboutOnOff(true);
        setworkOnOff(false);
        setcontactOnOff(false);
        sethomeOnOff(false);
      }

  return (
  <>
    <Navbar homeShow={homeDekhao} contactShow={contactDekhao} workShow={workDekhao} aboutShow={aboutDekhao}/>
    {homeOnOff && <Home/>}
    {contactOnOff && <Contact/>}
    {workOnOff && <Work/>}
    {aboutOnOff && <About/>}
    <Footer/>
  </>
    
  )
}

export default App;
