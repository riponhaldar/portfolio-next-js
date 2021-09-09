import Image from 'next/image';
import profilePic from '../../public/imgs.jpg';

function Projects() {
  return (
    <>
      <div className=' mt-8'>
        <div className='relative'>
          <div className='text-3xl md:text-5xl relative  font-semibold  text-indigo-50 ml-2 capitalize mb-8'>
            <p className='inline-block px-2  relative '>
              <span className='after__ele relative z-50'>Recent Project</span>
              <span className='absolute opacity-80 bg-purple-900	w-full h-2 md:h-4 left-0 bottom-5 md:bottom-0 z-0 '></span>
            </p>
          </div>
          <div className='text-gray-50  relative md:mx-12 mx-4 px-2'>
            <div className='flex flex-col items-end'>
              {/* card alls coppy */}
              <div className='card relative mb-20'>
                <Image
                  className=''
                  src={profilePic}
                  alt='Picture of the author'
                />
                <div className='project__details z-10 absolute top-10 md:top-32 '>
                  <div className=''>
                    <p className='text-gray-700 uppercase text-3xl font-serif'>
                      Prot folio website
                    </p>
                    <p className='text-gray-50 capitalize text-center text-2xl font-serif'>
                      useess
                    </p>
                    <p className='text-gray-50 capitalize text-1xl mt-5 text-right font-serif'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, doloremque error explicabo laborum eveniet dolore.
                    </p>
                  </div>
                </div>
              </div>
              {/* card alls coppy */}
            </div>
            <div className='flex flex-col items-start'>
              {/* card alls coppy */}
              <div className='card relative  mb-20 '>
                <Image
                  className=''
                  src={profilePic}
                  alt='Picture of the author'
                />
                <div className='project__details z-10 absolute top-10 md:top-32 '>
                  <div className=''>
                    <p className='text-gray-700 uppercase text-3xl font-serif'>
                      Prot folio website
                    </p>
                    <p className='text-gray-50 capitalize text-center text-2xl font-serif'>
                      useess
                    </p>
                    <p className='text-gray-50 capitalize text-1xl mt-5 text-right font-serif'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae, doloremque error explicabo laborum eveniet dolore.
                    </p>
                  </div>
                </div>
              </div>
              {/* card alls coppy */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
