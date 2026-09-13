import React, { useState } from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

function CardOneAbout() {
  const [moredata, setmoredata] = useState(false);
  const btnUpdown = moredata ? 'button-svg' : 'button-svg-two';

  function hideshow() {
    setmoredata(!moredata);
  }

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" className="about-div-one">
        <div className="about-div-one-heading">
          <h1>| Experience &amp; Education |</h1>
        </div>
        <div className="about-div-one-content">
          <div className="inner-content">
            <p className="clg-name">
              <span><FiBriefcase size={24} /> Tata Consultancy Services (TCS)</span>
              <span className="yearr">Aug 2024 - Present</span>
            </p>
            {moredata && <p className="clg-stream">System Engineer - Frontend Engineer (React.js), Kolkata, India</p>}
            {moredata && <p className="clg-stream">Built reusable, scalable React components, responsive interfaces, and REST API integrations for EasyQuote and MyAccount.</p>}
            {moredata && <p className="clg-stream">Implemented Figma designs and collaborated in Agile/Scrum teams.</p>}
          </div>
          <div className="inner-content">
            <p className="clg-name">
              <span><FiBookOpen size={24} /> Jalpaiguri Government Engineering College</span>
              <span className="yearr">June 2024</span>
            </p>
            {moredata && <p className="clg-stream">B.Tech, Information Technology</p>}
            {moredata && <p className="clg-stream">CGPA: 8.5</p>}
            {moredata && <p className="clg-stream">Jalpaiguri, West Bengal</p>}
          </div>
          <div className="inner-content">
            <p className="clg-name">
              <span><FiBookOpen size={24} /> Regional Institute Of Printing Technology</span>
              <span className="yearr">June 2021</span>
            </p>
            {moredata && <p className="clg-stream">Multimedia Technology - Diploma</p>}
            {moredata && <p className="clg-stream">CGPA: 7.8</p>}
          </div>
        </div>
        <button onClick={hideshow} type="button">
          <span>
            <svg className={btnUpdown} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289L12.7071 14.7071Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default CardOneAbout;
