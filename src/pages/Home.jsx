import React,{useEffect,useState} from 'react'
import ProfileSection from '../components/home/ProfileSection';
import Traintext from '../components/home/Traintext';
import Secondrow from '../components/home/Secondrow';
import Thirdrow from '../components/home/Thirdrow';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const homeImages = [
  'final1.jpg',
  'signature.png',
  'desktop.png',
  'p-e.png',
  'skills.png',
  'aca.png',
  'cv.png'
];

function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio-home-loaded') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    let active = true;

    Promise.all(homeImages.map((src) => new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    }))).then(() => {
      if (active) {
        sessionStorage.setItem('portfolio-home-loaded', 'true');
        setImagesLoaded(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      AOS.init({once: true});
      window.scrollTo(0, 0);
    }
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className='home-loader' role='status' aria-live='polite' aria-label='Loading portfolio'>
        <div className='home-loader-content'>
          <span className='home-loader-mark'>Rp</span>
          <span className='home-loader-line'></span>
        </div>
      </div>
    );
  }

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