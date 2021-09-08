import { gsap, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function About() {
  let aboutText = useRef(null);
  let aboutTextEnd = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    const abouttextFast = aboutTextEnd.children[0];
    const abouttextSec = aboutTextEnd.children[2];
    gsap.from(abouttextFast, {
      duration: 10,
      opacity: 0,
      y: -110,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextFast,
        start: 'top bottom-=250',
        end: 'bottom bottom-=500',
        // markers: true,
      },
    });
    gsap.from(abouttextSec, {
      duration: 10,
      opacity: 0,
      y: 110,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextSec,
        start: 'top bottom-=250',
        end: 'bottom bottom-=500',
        // markers: true,
      },
    });
    console.log(abouttextSec);
  });
  return (
    <>
      <div className='px-2 md:px-4'>
        <div className='text-3xl md:text-5xl font-semibold text-blue-400 ml-2 capitalize mb-8'>
          about -
        </div>
        <div iv className='px-2 md:px-8 text-left'>
          <div
            className='text-gray-50 text-2xl md:text-4xl xl:text-8xl font-serif tracking-normal font-bold xl:font-medium'
            ref={(el) => (aboutTextEnd = el)}
          >
            <div className='leading-normal'>
              <span>a Hello Ripon</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum,
                <span className='text-red-400'> NEXT JS </span>
              </p>
            </div>
            <br />
            <div className='leading-normal'>
              <span>TOasdasd.</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
