import React,{useEffect} from 'react'
import ProfileSection from './ProfileSection';
import Traintext from './Traintext';
import Secondrow from './Secondrow';
import Thirdrow from './Thirdrow';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({once: true});
  }, []);
  return (
    <>
    <div className='home-box'>
        <div className='home-main'>
            <ProfileSection/>
             <Traintext/>
            <Secondrow/>
            <Thirdrow/>
          
        </div>
    </div>
    </>
  )
}

export default Home;