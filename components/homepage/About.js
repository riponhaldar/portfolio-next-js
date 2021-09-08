import { gsap, TimelineLite } from 'gsap';
// import { TimelineMax } from 'gsap/gsap-core';
import { useEffect } from 'react';
function About() {
  let tl = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    tl.from('.leading-tight', { y: 14, opacity: 0 });
  });
  return (
    <>
      <div className='px-4'>
        <div className='text-gray-50 text-3xl md:text-5xl font-semibold capitalize mb-8'>
          about -
        </div>
        <div className='pl-10 text-left'>
          <div className='text-gray-50 text-2xl md:text-4xl xl:text-8xl font-serif tracking-normal font-bold xl:font-medium'>
            <div className='leading-tight'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates perferendis beatae doloribus architecto doloremque
              soluta debitis illum asperiores ratione sapiente similique,
            </div>
            <br />
            <div className='leading-tight'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates perferendis beatae doloribus architecto doloremque
              soluta debitis illum asperiores ratione sapiente similique,
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
