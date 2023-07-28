import React from 'react'
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ProjectTitle from './ProjectTitle';
import RowTwo from './RowTwo';
import RowOne from './RowOne';
import RwoZero from './RwoZero';


function Work(){
  return (
    <>
    <div className='work-box'>
        <div className='work-main'>
        <ProjectTitle/>
        <SecondCard/>
           <FirstCard/>
           <RwoZero/>
          
           <RowOne/>
           <RowTwo/>
           
        </div>
      <div className='drop-down'></div>  
    </div>
    </>
  );
}
export default Work;