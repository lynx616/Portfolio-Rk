import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Work  from './pages/Work';
import About from './pages/About';
import Footer from './components/layout/Footer';
import Error from './pages/Error';
// import Skills from './components/about/Skills';
// import CardOneAbout from './components/about/CardOneAbout';
import { Route, Routes } from 'react-router-dom';
function App(){
      // const [homeOnOff, sethomeOnOff] = useState(true);
      // const [contactOnOff, setcontactOnOff] = useState(false);
      // const [workOnOff, setworkOnOff] = useState(false);
      // const [aboutOnOff, setaboutOnOff] = useState(false);

      // function homeDekhao(){
      //   sethomeOnOff(true);
      //   setcontactOnOff(false);
      //   setworkOnOff(false);
      //   setaboutOnOff(false);
      // }
      // function contactDekhao(){
      //   setcontactOnOff(true);
      //   sethomeOnOff(false);
      //   setworkOnOff(false);
      //   setaboutOnOff(false);
      // }
      // function workDekhao(){
      //   setworkOnOff(true);
      //   setcontactOnOff(false);
      //   sethomeOnOff(false);
      //   setaboutOnOff(false);
      // }
      // function aboutDekhao(){
      //   setaboutOnOff(true);
      //   setworkOnOff(false);
      //   setcontactOnOff(false);
      //   sethomeOnOff(false);
      // }

  return (
  <>
  {/* age router sikhte hoto > < */}
    <Navbar/>
    <Routes>
    
      <Route exact path='/' Component={Home}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/work' Component={Work}/>
      <Route exact path='/contact' Component={Contact}/>
      <Route path='*' Component={Error}/>
      {/* <Route exact path='/about/skills' Component={Skills}/>
      <Route exact path='/about/academics' Component={CardOneAbout}/> */}
 
    </Routes>
    <Footer/>
    {/* <Navbar homeShow={homeDekhao} contactShow={contactDekhao} workShow={workDekhao} aboutShow={aboutDekhao}/>
    {homeOnOff && <Home/>}
    {contactOnOff && <Contact/>}
    {workOnOff && <Work/>}
    {aboutOnOff && <About/>}
    <Footer/> */}
  </>
    
  )
}

export default App;
