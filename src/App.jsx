import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Work  from './Work';
import Footer from './Footer';
function App(){
      const [homeOnOff, sethomeOnOff] = useState(true);
      const [contactOnOff, setcontactOnOff] = useState(false);
      const [workOnOff, setworkOnOff] = useState(false);

      function homeDekhao(){
        sethomeOnOff(true);
        setcontactOnOff(false);
        setworkOnOff(false);
      }
      function contactDekhao(){
        setcontactOnOff(true);
        sethomeOnOff(false);
        setworkOnOff(false);
      }
      function workDekhao(){
        setworkOnOff(true);
        setcontactOnOff(false);
        sethomeOnOff(false);
      }
  return (
  <>
    <Navbar homeShow={homeDekhao} contactShow={contactDekhao} workShow={workDekhao}/>
    {homeOnOff && <Home/>}
    {contactOnOff && <Contact/>}
    {workOnOff && <Work/>}
    <Footer/>
  </>
    
  )
}

export default App;
