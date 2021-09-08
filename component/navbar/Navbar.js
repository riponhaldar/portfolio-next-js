import Link from 'next/link';
// import { PixiPlugin } from 'gsap/PixiPlugin.js';
// gsap.registerPlugin(PixiPlugin);
function Navbar() {
  return (
    <>
      <div className='fixed w-full'>
        <div className='md:container mx-auto  px-6 md:px-16'>
          <div>
            <div className='flex justify-between mt-6 p-4   top-0 w-full items-center'>
              <div>
                <Link href='/'>
                  <a>
                    <p className='text-gray-50 font-bold text-xl'>RON</p>
                  </a>
                </Link>
              </div>
              <ul className='flex tracking-wide' id='nav'>
                <li className='pr-8 link overflow-hidden items-center py-2'>
                  <Link href='/work'>
                    <a className=' text-gray-50 overflow-hidden  relative  py-2 hover:text-gray-600'>
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
