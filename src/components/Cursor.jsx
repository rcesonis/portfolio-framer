import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', positionElement);

    return () => {
      window.removeEventListener('mousemove', positionElement);
    };
  }, []);

  return <div className='big' ref={cursorRef}></div>;
};

export default Cursor;
