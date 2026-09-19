import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Photography.css';

const photographs = [
  {
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vintage camera ready for a photography session',
    title: 'Behind the lens',
    caption: 'Tools, texture, and the start of every frame.'
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wide mountain landscape beneath a dramatic sky',
    title: 'Open landscapes',
    caption: 'Finding scale and silence in the natural world.'
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    alt: 'Minimal portrait study with soft natural light',
    title: 'Portrait studies',
    caption: 'Small expressions that carry a complete story.'
  },
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
    alt: 'City street captured from an elevated viewpoint',
    title: 'City rhythm',
    caption: 'Movement, geometry, and everyday urban life.'
  },
  {
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
    alt: 'Delicate pink flowers photographed up close',
    title: 'Quiet details',
    caption: 'Colour and form discovered at a closer distance.'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    alt: 'Snow covered mountain beneath a starry night sky',
    title: 'After dark',
    caption: 'A slower pace for night skies and distant peaks.'
  }
];

function Photography() {
  useEffect(() => {
    AOS.init({ once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='photography-box'>
      <div className='photography-main'>
        <section
          data-aos='fade-up'
          data-aos-duration='1000'
          className='photography-intro'
        >
          <h4>WORKS I USED TO DO</h4>
          <h1>Photography</h1>
          <p>
            A collection of visual studies made with an eye for light,
            composition, and the small moments worth keeping.
          </p>
          <Link to='/' className='photography-back'>
            Back to home
          </Link>
        </section>

        <section className='photography-collage' aria-label='Photography collage'>
          {photographs.map((photograph, index) => (
            <figure
              data-aos='fade-up'
              data-aos-delay={`${index * 80}`}
              data-aos-duration='1000'
              className={`photography-tile photography-tile-${index + 1}`}
              key={photograph.title}
            >
              <img
                src={photograph.src}
                alt={photograph.alt}
                loading='lazy'
              />
              <figcaption>
                <h3>{photograph.title}</h3>
                <p>{photograph.caption}</p>
              </figcaption>
            </figure>
          ))}
          <a
            href='https://www.instagram.com/frame_sense_'
            target='_blank'
            rel='noreferrer'
            data-aos='fade-up'
            data-aos-delay='560'
            data-aos-duration='1000'
            className='photography-tile photography-social-tile'
            aria-label='Follow Frame Sense on Instagram'
          >
            <div className='photography-social-content'>
              <h4>FOLLOW THE LENS</h4>
              <h3>Frame Sense</h3>
              <p>More frames, behind-the-scenes moments, and recent work.</p>
              <span className='photography-social-link'>
                Visit Instagram
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path d='M7 17L17 7M17 7H8M17 7V16' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
              </span>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Photography;
