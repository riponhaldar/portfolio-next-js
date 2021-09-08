import { TimelineLite, TweenMax, Power3 } from 'gsap';
// import { TimelineLite } from 'gsap/gsap-core';
import { useEffect, useRef } from 'react';
function Homehader() {
  // let app = useRef(null);
  let content = useRef(null);
  let contentt = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    const heaLineFrist = content.children[0];
    const heaLinelast = heaLineFrist.nextSibling;
    tl.staggerFrom(
      [heaLineFrist.children, heaLinelast.children],
      1,
      {
        y: 120,
        ease: Power3.easeOut,
        delay: 0.8,
        rotation: 4,
      },
      0.15,
      'Start'
    ).from([contentt], 0.7, {
      y: 22,
      opacity: 0,
    });
  });
  return (
    <>
      <div className='sm:mt-32 z-50 mt-20 lg:px-8 block mb-20'>
        <div className='sm:mb-12 mb-4' ref={(el) => (content = el)}>
          <div className='text-center sm:mr-40 mr-16 text-gray-50  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl overflow-hidden font-sans font-bold'>
            <div className=''>Wellcome To</div>
          </div>
          <div className='text-center sm:ml-40 ml-16 text-gray-50  overflow-hidden  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl  font-sans font-bold'>
            <div>My Website</div>
          </div>
        </div>
        <p
          className='text-gray-400  text-center text-xl'
          ref={(el) => (contentt = el)}
        >
          -Frontend devopoloper
        </p>
      </div>
    </>
  );
}

export default Homehader;
