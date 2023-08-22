import React from 'react'
import { Link } from 'react-router-dom';

function Traintext (){
 
  return (
    <div className='train-box'>
            <div
            data-aos="fade-up"
            data-aos-duration="1000"
             className='train-text'>
            <marquee>
            <p >Welcome to the Official portfolio of Rudra Karmakar, This platform is more than just a showcase of my projects, it's a reflection of my passion, dedication, and growth as a professional.</p>
            </marquee>
            </div>
            <div  className='train-boxss'>
        <div data-aos="fade-up"
    data-aos-duration="1000" tabIndex='1' className='train-first-box'>
        <Link exact to='/about'>
        <div className='train-img'>
            <img src='signature.png' alt='_blank'/>
            </div>
            <h4>MORE ABOUT ME</h4>
            <h3>Credentials</h3>
            </Link>
        </div>
        <div data-aos="fade-up"
    data-aos-duration="1000" tabIndex='1' className='train-first-box'>
        <Link exact to='/work'>
        <div className='train-img'>
        <img src='desktop.png' alt='_blank'/>
        </div>
            <h4>SHOWCASE</h4>
            <h3>Projects</h3>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Traintext;