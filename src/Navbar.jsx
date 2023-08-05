import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar({homeShow, contactShow, workShow, aboutShow}){


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
                <Link exact to='/'><li tabIndex={1} role='button' onClick={homeShow}>Home</li></Link>
                <Link exact to='/about'><li tabIndex={1} role='button' onClick={aboutShow}>About</li></Link>
                <Link exact to='/work'><li tabIndex={1} role='button' onClick={workShow}>Works</li></Link>
                <Link exact to='/contact'><li tabIndex={1} role='button' onClick={contactShow}>Contact</li></Link>
            </ul>
        </div>
        <div>
        <a href='https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fm%2Fin%2Frudra-karmakar-b31a2b232&trk=login_reg_redirect' target='_blank'>
            <button className="btn">Know More!</button>
            </a>
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
