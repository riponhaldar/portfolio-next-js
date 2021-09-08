import { gsap, TimelineLite } from 'gsap';
import { useEffect } from 'react';
function About() {
  let tl = new TimelineLite({ delay: 0.3 });
  useEffect(() => {});
  return (
    <>
      <div className='px-2 md:px-4'>
        <div className='text-gray-50 text-3xl md:text-5xl font-semibold capitalize mb-8'>
          about -
        </div>
        <div className='px-2 md:px-4 text-left'>
          <div className='text-gray-50 text-2xl md:text-4xl xl:text-6 xl font-serif tracking-normal font-bold xl:font-medium'>
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
