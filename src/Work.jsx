import React, {useState} from 'react'
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ProjectTitle from './ProjectTitle';
import RowTwo from './RowTwo';
import RowOne from './RowOne';
import RwoZero from './RwoZero';
import RwoZeroSec from './RwoZeroSec';
import RowOneSec from './RowOneSec';
import RowTwoSec from './RowTwoSec';


function Work(){

  const [dropdekha, setdropdekha] = useState(false);
  function drop(){
      setdropdekha(!dropdekha);
  }
  const dropUpDown= dropdekha ?  'drop-up':'drop-down';
  return (
    <>
    <div id='work-id' className='work-box'>
        <div className='work-main'>
        <ProjectTitle/>
        <SecondCard/>
           <FirstCard/>
           <RwoZero/>
          
           <RowOne/>
           <RowTwo/>
           
        </div>
      <div className={dropUpDown}> 
      <span onClick={drop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" id="mainIconPathAttribute"></path> </svg>
      </span>
      </div>  
      {dropdekha && <div className='work-main-sec-div'>
           <RowOneSec/>
           <RwoZeroSec/>
           <RowTwoSec/>
      </div>}
    </div>
    </>
  );
}
export default Work;