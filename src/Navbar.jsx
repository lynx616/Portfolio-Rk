import React, {useState} from 'react'

function Navbar({homeShow, contactShow, workShow}){


    const [burgerClick, setburgerClick] = useState(false);

        console.log("show");
    function show(){
            setburgerClick(!burgerClick);
            console.log(burgerClick);
    }
    
    const navOnOff = burgerClick ? 'navOn':'navOff';

    const checkedOnOff= burgerClick ? 'burgerOn':'burgerOff' ;
    

  return (
    <div className='nav-box'>
        <div><h2>Rudra's Portfolio</h2><h3>-Rp-</h3></div>
        <div>
            <ul id='big-nav' className={navOnOff}>
                <li tabIndex={1} role='button' onClick={homeShow}>Home</li>
                <li tabIndex={1} role='button'>About</li>
                <li tabIndex={1} role='button' onClick={workShow}>Works</li>
                <li tabIndex={1} role='button' onClick={contactShow}>Contact</li>
            </ul>
        </div>
        <div>
            <button className="btn">Know More!</button>
        </div>
        <div className='burger-box'>
        <label role='button' tabIndex={1} className={checkedOnOff} for="burger">
  			<input onClick={show} type="button" id="burger"/>
  					<span id='span-one'></span>
  					<span id='span-two'></span>
 					<span id='span-three'></span>
                </label>
        </div>
        
    </div>
  )
}
export default Navbar;
