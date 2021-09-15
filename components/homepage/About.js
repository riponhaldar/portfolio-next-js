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
      y: 50,
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
      y: -140,
      opacity: 0,
      stagger: 0.8,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextFast,
        start: 'top bottom-=350',
        end: 'bottom bottom-=100',
        // markers: true,
      },
    }).from(abouttextSec, 1.8, {
      duration: 10,
      y: 150,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        scrub: true,
        trigger: abouttextSec,
        start: 'top bottom-=0',
        end: 'bottom bottom-=0',
        // markers: true,
      },
    });
  });
  return (
    <>
      <div className='px-2 md:px-4 mt-10 mb-20'>
        <div className='text-3xl md:text-5xl relative font-comorant font-semibold  text-gray-800 ml-2 capitalize mb-8'>
          <p
            className='inline-block px-2  relative'
            ref={(el) => (aboutText = el)}
          >
            <span className='after__ele relative z-50'>About</span>
            <span className='absolute opacity-80 bg-purple-200	w-full h-3 md:h-4 left-0 bottom-0 md:bottom-0 z-0'></span>
          </p>
        </div>
        <div iv className='px-2 md:px-8 text-left'>
          <div
            className=' text-gray-800 text-2xl md:text-4xl xl:text-8xl font-averia tracking-normal font-bold xl:font-medium'
            ref={(el) => (aboutTextEnd = el)}
          >
            <div className='leading-normal'>
              <span>Thank you for visiting this site.</span>
              <p>
                I m Web designer & choreographer in Niigata,Japan.
                <span className='text-red-400'> NEXT JS </span>
              </p>
            </div>
            <br />
            <div className='leading-normal'>
              <span>
                I am not good at urgent work, but I will do my best to undertake
                the work.
              </span>
              <p>
                I have been doing web design work for three years. After working
                for a design company for two years, I work as a freelancer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
