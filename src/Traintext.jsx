import React from 'react'

function Traintext (){
  return (
    <div className='train-box'>
            <div className='train-text'>
            <marquee>
            <p >Welcome to the Official portfolio of me, This platform is more than just a showcase of my projects; it's a reflection of my passion, dedication, and growth as a professional.</p>
            </marquee>
            </div>
            <div className='train-boxss'>
        <div tabIndex='1' className='train-first-box'>
        <div className='train-img'>
            <img src='signature.png' alt='_blank'/>
            </div>
            <h4>MORE ABOUT ME</h4>
            <h3>Credentials</h3>
        </div>
        <div tabIndex='1' className='train-first-box'>
        <div className='train-img'>
        <img src='desktop.png' alt='_blank'/>
        </div>
            <h4>SHOWCASE</h4>
            <h3>Projects</h3>
        </div>
        </div>
    </div>
  )
}

export default Traintext;