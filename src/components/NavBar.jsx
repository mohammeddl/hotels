import Link from "next/link";


export default function NavBar() {
  return (
    <header className='bg-[#ffffff] rounded-b-xl shadow-md'>
      <nav className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
        <Link className='text-lg font-bold' href='#'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <div className='flex items-center gap-4'>
          <Link
            className='rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-300'
            href='#'>
            Tradition
          </Link>
          <Link
            className='rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-300'
            href='#'>
            Sign in
          </Link>
          <Link
            className='rounded-md text-white bg-blue-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-300'
            href='#'>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
