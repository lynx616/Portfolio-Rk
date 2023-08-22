import React,{useEffect} from 'react'
import AboutProfile from './AboutProfile';
import CardOneAbout from './CardOneAbout';
import Skills from './Skills';
import Achivements from './Achivements';

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