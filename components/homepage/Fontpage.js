import { TweenMax, TimelineLite, Power3, Back } from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
function Fontpage() {
  let fontName = useRef(null);
  let cat = useRef(null);
  let iye = useRef(null);
  let ess = useRef(null);
  let aaa = useRef(null);
  let tt = useRef(null);
  let ii = useRef(null);
  let vv = useRef(null);
  let ee = useRef(null);

  // let text = textSplit.split(' ');
  // console.log(text);
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    let wellcome = fontName.children[0];
    const website = fontName.children[1];
    const welcome = fontName.children[2];
    tl.staggerFrom(wellcome.children, 1.8, {
      y: 130,
      delay: 1,
      ease: Power3.easeOut,
      rotation: 2,
      stagger: 0.2,
      opacity: 0,
    })
      .from(
        website.children,
        1.8,
        {
          y: 130,
          ease: Power3.easeOut,
          rotation: 2,
        },
        '-=1.6'
      )
      .from(
        [welcome.children[0], welcome.children[1]],
        1.6,
        {
          y: 140,
          ease: Power3.easeOut,
          rotation: 2,
        },
        '-=1.6'
      )
      .from(
        [
          cat.children,
          iye.children,
          ess.children,
          aaa.children,
          tt.children,
          ii.children,
          vv.children,
          ee.children,
        ],
        1.3,
        {
          x: 100,
          delay: 1,
          ease: Back.easeOut,
          stagger: 0.2,
        },
        '-=3'
      );
  });
  return (
    <>
      <div className='lg:px-8 h-screen mb-20 sm:mb-1'>
        <div className='sm:mb-12 mb-4 mt-20'>
          <div className='pt-10  mb-16'>
            <div
              className='lg:text-8xl sm:text-7xl text-5xl  font-playfair'
              ref={(el) => (fontName = el)}
            >
              <div className='overflow-hidden '>
                <div> FRONT-END </div>
              </div>
              <div className='overflow-hidden'>
                <div> DEVELOPER</div>
              </div>
              <div className='overflow-hidden mt-4 text-gray-400 sm:text-5xl text-3xl'>
                <div> wellcome</div>
                <div className='text-gray-400'> to my portfolio</div>
              </div>
            </div>
          </div>
          <div className='pt-20'>
            <div className='float-left '>
              <img
                className='text-gray-400'
                src='/circule.svg'
                width={100}
                height={100}
                alt='asd'
              />
            </div>
            <div className='float-right lg:text-8xl sm:text-7xl text-5xl font-playfair '>
              <div className='kss_class flex uppercase tracking-wider'>
                <div className='overflow-hidden' ref={(el) => (cat = el)}>
                  <div>C</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (iye = el)}>
                  <div>R</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (ess = el)}>
                  <div>e</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (aaa = el)}>
                  <div>a</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (tt = el)}>
                  <div>t</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (ii = el)}>
                  <div>i</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (vv = el)}>
                  <div>v</div>
                </div>
                <div className='overflow-hidden' ref={(el) => (ee = el)}>
                  <div>e</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   <div className='sm:mb-12 mb-4' ref={(el) => (content = el)}>
          <h1>
            <div className='text-center wellcome sm:mr-40 mr-16 text-gray-800  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl overflow-hidden font-domine font-bold'>
              <div className=''>Wellcome To</div>
            </div>
            <div className='text-center sm:ml-40 ml-16 text-gray-800  overflow-hidden  xl:text-9xl lg:text-8xl sm:text-6xl text-4xl  font-domine font-bold'>
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
        */}
      </div>
    </>
  );
}

export default Fontpage;
