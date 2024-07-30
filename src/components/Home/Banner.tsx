export default function Banner() {
  return (
    <div className='bg-teal-500 mx-20 mb-8 rounded-2xl  py-16 px-4 md:px-8 lg:px-16 flex items-center justify-between'>
      <div className='text-center max-w-sm'>
        <h1 className='text-3xl font-bold text-white'>
          Find and book your perfect stay
        </h1>
        <p className='text-xl text-white mt-4'>
          Earn rewards on every night you stay
        </p>
      </div>
      <div className='flex justify-center space-x-4'>
        <div className='flex items-center space-x-1'>
          <svg
            className='h-8 w-8 text-white'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path d='M8.615 7.414a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414-1.414zM4 8a4 4 0 118 0 4 4 0 01-8 0z' />
          </svg>
          <p className='text-base text-white'>Earn rewards</p>
        </div>
        <div className='flex items-center space-x-1'>
          <svg
            className='h-8 w-8 text-white'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M5 3a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 5H5v7h10V8z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-base text-white'>Save with member prices</p>
        </div>
        <div className='flex items-center space-x-1'>
          <svg
            className='h-8 w-8 text-white'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M9 2a1 1 0 000 2h2a1 1 0 001-1V5l7 7a1 1 0 001.414.586l3-3a1 1 0 000-1.414L16 3a1 1 0 00-1.414-.586L9 2zM11 8a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-base text-white'>Free cancellation</p>
        </div>
      </div>
    </div>
  );
}
