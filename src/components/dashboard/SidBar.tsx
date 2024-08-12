import Link from "next/link";
import {
  BookIcon,
  HotelIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  ViewIcon,
} from "lucide-react";

export default function SidBar() {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800 p-6 overflow-y-auto'>
        <div className='space-y-6'>
          <Link
            className='flex items-center gap-2 font-medium'
            href='dashboard'>
            <LayoutDashboardIcon className='w-6 h-6' />
            Dashboard
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='rooms'>
            <HotelIcon className='w-6 h-6' />
            Rooms
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='hotels'>
            <BookIcon className='w-6 h-6' />
            hotels
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <SettingsIcon className='w-6 h-6' />
            Settings
          </Link>
        </div>
      </div>
    </>
  );
}
