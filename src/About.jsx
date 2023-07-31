import React from 'react'
import AboutProfile from './AboutProfile';
import CardOneAbout from './CardOneAbout';
import Skills from './Skills';
function About ()  {
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
            </div>
        </div>
    </div>
    </>
  );
}
export default About;