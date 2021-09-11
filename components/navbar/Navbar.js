import Link from 'next/link';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
function Navbar() {
  let navLinks = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    const mainNavLinks = gsap.utils.toArray(navLinks);
    mainNavLinks.forEach((navs) => {
      tl.from(
        navs,
        2,
        { y: -10, x: -10, ease: Power3.easeOut, opacity: 0 },
        0.2
      );
    });
  });

  return (
    <>
      <div className='fixed w-full z-50 ' ref={(el) => (navLinks = el)}>
        <div className='md:container mx-auto  px-6 md:px-16'>
          <div>
            <div className='flex justify-between mt-2 p-4 top-0 w-full items-center'>
              <div>
                <Link href='/'>
                  <a>
                    <p className='text-gray-50 font-bold text-xl'>RON</p>
                  </a>
                </Link>
              </div>
              <ul className='nav flex tracking-wide'>
                <li className='link overflow-hidden items-center py-2 pr-8 block '>
                  <Link href='/work'>
                    <a className=' text-gray-50 overflow-hidden  relative py-2  hover:text-gray-600'>
                      Work
                    </a>
                  </Link>
                </li>
                <li className='pr-8 link overflow-hidden py-2'>
                  <Link href='/about'>
                    <a className='text-gray-50 overflow-hidden	 relative  py-2 hover:text-gray-600'>
                      About
                    </a>
                  </Link>
                </li>
                <li className='md:pr-8 pr-4 link overflow-hidden py-2'>
                  <Link href='/contact'>
                    <a className='text-gray-50 overflow-hidden relative py-2 hover:text-gray-600'>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
