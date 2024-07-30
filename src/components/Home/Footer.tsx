import Link from "next/link";
import LogoHotel from "../../assets/logo.png";
import Image from 'next/image';

export default function Footer() {

  return (
    <footer className='bg-muted py-12'>
      <div className='container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col items-start gap-4'>
          <Link href='#' className='flex items-center gap-2' prefetch={false}>
          <Image src={LogoHotel} alt="Hotel Acme" width={150} height={40} />
          </Link>
          <div className='space-y-2 text-muted-foreground'>
            <p>123 Main St, Anytown USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@hotelacme.com</p>
          </div>
        </div>
        <div className='grid gap-2'>
          <h4 className='text-lg font-medium'>About</h4>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Our Story
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Our Team
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Careers
          </Link>
        </div>
        <div className='grid gap-2'>
          <h4 className='text-lg font-medium'>Rooms</h4>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Room Types
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Special Offers
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Photo Gallery
          </Link>
        </div>
        <div className='grid gap-2'>
          <h4 className='text-lg font-medium'>Amenities</h4>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Spa &amp; Wellness
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Dining
          </Link>
          <Link
            href='#'
            className='text-muted-foreground hover:underline'
            prefetch={false}>
            Events &amp; Meetings
          </Link>
        </div>
      </div>
      <div className='container mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row'>
        <p>&copy; 2024 Hotel Acme. All rights reserved.</p>
        <nav className='flex gap-4'>
          <Link href='#' className='hover:underline' prefetch={false}>
            Privacy Policy
          </Link>
          <Link href='#' className='hover:underline' prefetch={false}>
            Terms of Service
          </Link>
          <Link href='#' className='hover:underline' prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
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

function XIcon(props) {
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
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}
