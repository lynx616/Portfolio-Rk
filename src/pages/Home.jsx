import React,{useEffect} from 'react'
import ProfileSection from '../components/home/ProfileSection';
import Traintext from '../components/home/Traintext';
import Secondrow from '../components/home/Secondrow';
import Thirdrow from '../components/home/Thirdrow';

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