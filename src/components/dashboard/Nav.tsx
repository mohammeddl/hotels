import { HotelIcon } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <header className='bg-gray-900 text-white px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <HotelIcon className='w-8 h-8' />
          <h1 className='text-xl font-bold'>Acme Hotel</h1>
        </div>
        <nav className='flex items-center gap-4'>
          <Link className='hover:underline' href='#'>
            Dashboard
          </Link>
          <Link className='hover:underline' href='#'>
            Rooms
          </Link>
          <Link className='hover:underline' href='#'>
            Bookings
          </Link>
          <Link className='hover:underline' href='#'>
            Reports
          </Link>
          <Link className='hover:underline' href='#'>
            Settings
          </Link>
        </nav>
      </header>
    </>
  );
}
