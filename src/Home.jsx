import React from 'react'
import ProfileSection from './ProfileSection';
import Traintext from './Traintext';
import Secondrow from './Secondrow';
import Thirdrow from './Thirdrow';


function Home() {
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