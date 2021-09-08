import Link from 'next/link';
function Error() {
  return (
    <div className='text-center text-gray-50 text-8xl font-lora font-bold pt-8'>
      <p>404</p>
      <Link href='/'>
        <a className='text-3xl underline'>Go Back to Home pAge</a>
      </Link>
    </div>
  );
}

export default Error;

<p>404</p>;
