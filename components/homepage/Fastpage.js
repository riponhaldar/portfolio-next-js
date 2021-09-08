import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';

function Fastpage() {
  let content = useRef(null);
  let contentp = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    let wellcome = content.children[0].children[0];
    const website = wellcome.nextSibling;
    tl.staggerFrom([wellcome.children, website.children], 1.5, {
      y: 120,
      ease: Power3.easeOut,
      rotation: 10,
    }).from(contentp, 0.8, { y: 20, opacity: 0 });
  });
  return (
    <>
      <div className='sm:mt-32 z-50 mt-20 lg:px-8 block mb-20'>
        <div className='sm:mb-12 mb-4' ref={(el) => (content = el)}>
          <h1>
            <div className='text-center wellcome sm:mr-40 mr-16 text-gray-50  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl overflow-hidden font-sans font-bold'>
              <div className=''>Wellcome To</div>
            </div>
            <div className='text-center sm:ml-40 ml-16 text-gray-50  overflow-hidden  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl  font-sans font-bold'>
              <div>My Website</div>
            </div>
          </h1>
        </div>
        <p
          className='text-gray-400  text-center text-xl'
          ref={(el) => (contentp = el)}
        >
          -Frontend devopoloper
        </p>
      </div>
    </>
  );
}

export default Fastpage;
