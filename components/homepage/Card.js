import Image from 'next/image';
import profilePic from '../../public/Screenshot.png';
import Link from 'next/link';
function Card() {
  const imagsCard = {
    position: 'absolute',
    width: '780px',
    height: ' 488px',
    right: '50%',
    left: '50%',
    top: '150px',
    'margin-left': '44px',
    'border-radius': ' 10px',
    filter: 'brightness(0.75) sepia(0.7) hue-rotate(-5deg) saturate(3.5)',
  };
  return (
    <>
      <div className='relative md:flex mt-20 justify-between'>
        <div className='xl:mr-20 mr-10 mb-10'>
          <p className='text-red-100 text-2xl capitalize  font-serif mb-4'>
            Teletype for Atom
          </p>
          <span className='text-red-100 text-base'></span>
          <div className='text-gray-100 mt-4'>#React #NExt #tailwindCss</div>
          <ul className='flex mt-4'>
            <li className='mr-2'>
              <Link href=''>
                <a className='bg-gray-50 py-1 px-2 font-bold text-red-800 rounded'>
                  Live
                </a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a className='bg-gray-50 py-1 px-2 font-bold text-red-800 rounded'>
                  scrose
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image src={profilePic} />
        </div>
      </div>
    </>
  );
}

export default Card;
