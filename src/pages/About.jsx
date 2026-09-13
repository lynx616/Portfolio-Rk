import React,{useEffect} from 'react'
import AboutProfile from '../components/about/AboutProfile';
import CardOneAbout from '../components/about/CardOneAbout';
import Skills from '../components/about/Skills';
import Achivements from '../components/about/Achivements';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About ()  {
  useEffect(() => {
    AOS.init({once: true});
  }, []);
  return (
    <>
    <div className='about-box'>
        <div className='about-main'>
            <div className='about-left'>
              <AboutProfile/>
              
            </div>
            <div className='about-right'>
            
           
                <CardOneAbout/>
                <Skills/>
                <Achivements/>
         
            </div>
        </div>
    </div>
    </>
  );
}
export default About;