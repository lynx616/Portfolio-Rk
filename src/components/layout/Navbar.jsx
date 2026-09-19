import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

function Navbar(){
    const [burgerClick, setburgerClick] = useState(false);

    function toggleMenu() {
        setburgerClick((current) => !current);
    }

    function closeMenu() {
        setburgerClick(false);
    }

    const navOnOff = burgerClick ? 'navOn':'navOff';
    const checkedOnOff = burgerClick ? 'burgerOn':'burgerOff';
  return (
    <div className='nav-box'>
        <div className='brand-heading'><h2>Rudra's Portfolio</h2><h3>-Rp-</h3><ThemeToggle/></div>
        <div>
            <ul id='main-navigation' className={navOnOff}>
                <Link exact to='/'><li tabIndex={1} role='button' onClick={closeMenu}>Home</li></Link>
                <Link exact to='/about'><li tabIndex={1} role='button' onClick={closeMenu}>About</li></Link>
                <Link exact to='/work'><li tabIndex={1} role='button' onClick={closeMenu}>Works</li></Link>
                <Link exact to='/contact'><li tabIndex={1} role='button' onClick={closeMenu}>Contact</li></Link>
            </ul>
        </div>
        <div>
        <a href='https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fm%2Fin%2Frudra-karmakar-b31a2b232&trk=login_reg_redirect' target='_blank' rel="noreferrer">
            <button className="btn">Know More!</button>
            </a>
        </div>
        <div className='burger-box'>
        <button
          type='button'
          className={checkedOnOff}
          aria-label={burgerClick ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls='main-navigation'
          aria-expanded={burgerClick}
          onClick={toggleMenu}
        >
          <span id='span-one'></span>
          <span id='span-two'></span>
          <span id='span-three'></span>
        </button>
        </div>
        
    </div>
  )
}
export default Navbar;
