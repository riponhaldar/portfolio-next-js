import Card from './Card';

function Projects() {
  return (
    <>
      <div className=' mt-8'>
        <div className='relative'>
          <div className='text-3xl md:text-5xl relative  font-semibold  text-indigo-50 ml-2 capitalize mb-8'>
            <p className='inline-block px-2  relative '>
              <span className='after__ele relative z-50'>Recent Project</span>
              <span className='absolute opacity-80 bg-purple-900	w-full h-3 md:h-4 left-0 bottom-1 md:bottom-0 z-0 '></span>
            </p>
          </div>
          <div className='text-gray-50  relative md:mx-12 mx-4 px-2'>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
