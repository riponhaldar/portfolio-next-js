import Head from 'next/head';
import About from '../components/homepage/About';
import Homehader from '../components/HomePage/homeHeader';
export default function Home() {
  return (
    <>
      <Head>
        <title>ripon haldar</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/mack_herry.png' />
      </Head>
      <div className='cursor absolute w-2 h-2 bg-gray-200 rounded-full "transition duration-100 ease-in-out'></div>

      <div className='lg:container mx-auto lg:px-6 p-5  md:px-16 z-50'>
        <Homehader />
        <About />
      </div>
      <div className=''>
        <div className='absolute w-px h-full top-0 left-0 bg-gray-800 z-0'></div>
        <div className='absolute w-px h-full top-0 left-1/4 bg-gray-800'></div>
        <div className='absolute w-px h-full top-0 left-2/4 bg-gray-800 z-0'></div>
        <div className='absolute w-px h-full top-0 left-3/4 bg-gray-800 z-0'></div>
        <div className='absolute w-px h-full top-0 right-0 bg-gray-800 z-0'></div>
      </div>
    </>
  );
}
