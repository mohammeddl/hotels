import { HotelIcon } from "lucide-react";
import Link from "next/link";


export default function Nav() {

    return (
        <>

        <Link
        className='flex items-center gap-2 text-lg font-semibold md:text-base'
        href='#'>
        <HotelIcon className='w-6 h-6' />
        <span>Acme Hotel</span>
      </Link>
      <nav className='hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto'>
        <Link className='font-bold' href='#'>
          Dashboard
        </Link>
        <Link className='text-gray-500 dark:text-gray-400' href='#'>
          Rooms
        </Link>
        <Link className='text-gray-500 dark:text-gray-400' href='#'>
          Bookings
        </Link>
        <Link className='text-gray-500 dark:text-gray-400' href='#'>
          Guests
        </Link>
        <Link className='text-gray-500 dark:text-gray-400' href='#'>
          Reports
        </Link>
      </nav>
      </>
    )

}