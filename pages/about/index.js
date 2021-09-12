import Head from 'next/head';
import Image from 'next/image';
import ripon1st from '../../public/ripon1st.jpg';
function about() {
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
    <>
      <Head>
        <title>ripon - about</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/mack_herry.png' />
      </Head>

      <div className='lg:container mx-auto lg:px-6 p-5  md:px-16 z-50'>
        <div className='mt-72 z-50'>
          <div className='sm:pl-10 pl-0 mb-20'>
            <div className='text-gray-900 font-domine sm:text-4xl text-lg font-bold '>
              <span className='overflow-hidden'>hello there,</span> <br />
              <span>My name is</span> <br />
              <span className='overflow-hidden underline text-red-400'>
                Ripon Haldar &
              </span>
              <br />
              <span> I am an Fronetend Developer</span>
            </div>
          </div>

          <div className='lg:h-screen sm:mt-20 mt-5 sm:mb-8 '>
            <div className='sm:float-right block lg:w-1/3 sm:mr-8 mb-10'>
              <div className='text-3xl mb-2'>HI,</div>
              <div className='mb-4 text-lg leading-7'>
                Lorem ipsum dolor sit amet consectetur,adipisicing elit.
                Quibusdam, totam? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quibusdam, totam? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Quibusdam, totam? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Quibusdam, totam?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, totam?
              </div>
              <div className='text-lg leading-7'>
                Lorem ipsum dolor sit amet consectetur,adipisicing elit.
                Quibusdam, totam? Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quibusdam, totam? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </div>
            </div>
          </div>
          <div className='lg:-mt-48 relative'>
            <div className='sm:flex sm:justify-between sm:w-full '>
              <div className='text-gray-800 font-bold font-serif '>
                <span> PROGRAMMING LANGUAGES & OTHERS :</span>
              </div>
              <div className='flex text-gray-500 font-bold font-sans uppercase sm:leading-loose leading-7   mt-4 '>
                <ul className='mr-8'>
                  <li>
                    <span>-HTML/Css</span>
                  </li>
                  <li>
                    <span>-Sass</span>
                  </li>
                  <li>
                    <span>-Tailwindcss</span>
                  </li>
                  <li>
                    <span>-Bootstrap</span>
                  </li>
                </ul>
                <ul className='mr-8'>
                  <li>
                    <span>-React Js</span>
                  </li>
                  <li>
                    <span>-Next Js</span>
                  </li>
                  <li>
                    <span>-Node Js</span>
                  </li>
                  <li>
                    <span>-MongoDb</span>
                  </li>
                  <li>-React Js</li>
                </ul>
                <ul className='sm:mr-10'>
                  <li>
                    <span> -Gsap</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='xl:w-10/12	sm:flex sm:justify-between mt-4'>
              <div className='text-gray-800 font-bold font-serif '>
                <span> TOOLS:</span>
              </div>
              <div className='flex text-gray-500 font-bold font-sans uppercase sm:leading-loose leading-7 pl-10  flo mt-4 '>
                <ul className='mr-8'>
                  <li className=''>
                    <span>-Vs Code</span>
                  </li>
                  <li className=''>
                    <span>-Photoshop</span>
                  </li>
                  <li className=''>
                    <span>-Figma</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*srer*/}
            <div className='absolute sm:top-72 md:top-64 lg:top-0 top-10 z-0'>
              <div className='flex flex-wrap'>
                {allIcons.map((icons) => {
                  return (
                    <div key={icons.id} className='sm:pl-20 pl-10 mb-3'>
                      <img
                        className='icons opacity-5 sm:w-28  w-14'
                        src={icons.url}
                        alt=''
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/*srer*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
