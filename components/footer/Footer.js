import Link from 'next/link';
import Image from 'next/image';
function Footer() {
  const social = [
    { id: '01', name: 'Github', url: 'https://github.com/riponhaldar' },
    { id: '02', name: 'LinkedIn', url: 'https://github.com/riponhaldar' },
    { id: '03', name: 'Twitter', url: 'https://github.com/riponhaldar' },
    { id: '04', name: 'Inistagram', url: 'https://github.com/riponhaldar' },
  ];
  const allIcons = [
    { id: '1', url: '/icons/html5.svg' },
    { id: '2', url: '/icons/css3.svg' },
    { id: '3', url: '/icons/sass.svg' },
    { id: '4', url: '/icons/tailwindcss.svg' },
    { id: '5', url: '/icons/bootstrap.svg' },
    { id: '6', url: '/icons/react.svg' },
    { id: '7', url: '/icons/nextdotjs.svg' },
    { id: '8', url: '/icons/nodedotjs.svg' },
    { id: '9', url: '/icons/github.svg' },
    { id: '10', url: '/icons/visualstudiocode.svg' },
    { id: '11', url: '/icons/adobepremierepro.svg' },
    { id: '12', url: '/icons/adobexd.svg' },
  ];

  return (
    <div className='md:container mx-auto  px-6 md:px-16 mt-4 sm:mt-10 relative py-4'>
      <div className='sm:flex justify-between'>
        <div className='z-10'>
          <ul>
            {social.map((socialMe) => {
              return (
                <Link key={socialMe.id} href={socialMe.url}>
                  <a target='_blank'>
                    <li className='mb-8  lg:text-5xl sm:text-3xl text-2xl cursor-pointer text-gray-500 capitalize align-middle '>
                      <span className='mr-8 text-lg  font-comorant '>
                        {socialMe.id}
                      </span>
                      <span className='hover:underline'>{socialMe.name}</span>
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className='sm:mt-20 mt-10 z-10'>
          <div className='cursor-pointer'>
            <Link href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqtLBRpsfMvnZPhrBzFhzWVHTgcsHNgQVdFvcptrrSMhJgZbPllXTNsVFPkWxLJTgGQDB'>
              <a
                target='_blank'
                className='sm:text-3xl text-2xl text-gray-500 font-bold '
              >
                <span>riponahaldar006@gmail.com</span>
              </a>
            </Link>
          </div>
          <div className='sm:mt-8 mt-4 text-4xl text-gray-600 font-comorant font-bold'>
            +91 - 7001186809
          </div>
        </div>
      </div>
      <div>
        <div className='text-center text-xl font-bold mt-10 font-comorant'>
          ©RiponHaldar <span className='font-comorant'>-2021</span>{' '}
        </div>
      </div>
    </div>
  );
}

export default Footer;
