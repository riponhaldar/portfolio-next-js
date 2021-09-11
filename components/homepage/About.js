import { gsap, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function About() {
  let aboutText = useRef(null);
  let aboutTextEnd = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    const aboutTextt = aboutText.children[0];
    const aboutTextSpan = aboutText.children[1];
    const abouttextFast = aboutTextEnd.children[0];
    const abouttextSec = aboutTextEnd.children[2];
    tl.from(aboutTextSpan, {
      duration: 5,
      opacity: 0,
      x: -50,
      scrollTrigger: {
        scrub: true,
        trigger: aboutTextt,
        start: 'top bottom-=100',
        end: 'bottom bottom-=200',
        // markers: true,
      },
    });
    tl.from(aboutTextt, {
      duration: 10,
      opacity: 0,
      y: 50,
      scrollTrigger: {
        scrub: true,
        trigger: aboutTextt,
        start: 'top bottom-=100',
        end: 'bottom bottom-=200',
        // markers: true,
      },
    });
    tl.from(abouttextFast, 1.2, {
      duration: 15,
      y: 140,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextFast,
        start: 'top bottom-=250',
        end: 'bottom bottom-=200',
        // markers: true,
      },
    }).from(abouttextSec, 3, {
      duration: 15,
      y: 100,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextSec,
        start: 'top bottom-=100',
        end: 'bottom bottom-=200',
        // markers: true,
      },
    });
    console.log(abouttextSec);
  });
  return (
    <>
      <div className='px-2 md:px-4 mb-20'>
        <div className='text-3xl md:text-5xl relative font-comorant font-semibold  text-gray-800 ml-2 capitalize mb-8'>
          <p
            className='inline-block px-2  relative'
            ref={(el) => (aboutText = el)}
          >
            <span className='after__ele relative z-50'>About</span>
            <span className='absolute opacity-80 bg-purple-900	w-full h-3 md:h-4 left-0 bottom-0 md:bottom-0 z-0'></span>
          </p>
        </div>
        <div iv className='px-2 md:px-8 text-left'>
          <div
            className=' text-gray-800 text-2xl md:text-4xl xl:text-8xl font-averia tracking-normal font-bold xl:font-medium'
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
