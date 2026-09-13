import React, { useEffect, useRef, useState } from 'react';

function PortfolioNotice() {
  const [isOpen, setIsOpen] = useState(true);
  const continueButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    continueButtonRef.current?.focus();

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='portfolio-notice-backdrop'>
      <section
        className='portfolio-notice'
        role='dialog'
        aria-modal='true'
        aria-labelledby='portfolio-notice-title'
        aria-describedby='portfolio-notice-message'
      >
        <h2 id='portfolio-notice-title'>2023 portfolio — currently being refactored.</h2>
        <p id='portfolio-notice-message'>
          The site is currently being refactored, but you can still explore my old work as usual.
        </p>
        <button ref={continueButtonRef} type='button' onClick={() => setIsOpen(false)}>
          Continue
        </button>
      </section>
    </div>
  );
}

export default PortfolioNotice;
