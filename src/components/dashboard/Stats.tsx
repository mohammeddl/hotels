"use client";
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import RoomModal from "./RoomModal";
import { useEffect, useState } from "react";

export default function Stats() {

  const [isOpen, setIsOpen] = useState<Boolean>(false);


useEffect(()=>{
  console.log(isOpen)
},[isOpen])


  return (
    <div className='flex-1 grid grid-cols-[240px_1fr] overflow-hidden'>
      <div className='bg-gray-100 dark:bg-gray-800 p-6 overflow-y-auto'>
        <div className='space-y-6'>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <LayoutDashboardIcon className='w-6 h-6' />
            Dashboard
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <HotelIcon className='w-6 h-6' />
            Rooms
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <BookIcon className='w-6 h-6' />
            Bookings
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <ViewIcon className='w-6 h-6' />
            Reports
          </Link>
          <Link className='flex items-center gap-2 font-medium' href='#'>
            <SettingsIcon className='w-6 h-6' />
            Settings
          </Link>
        </div>
      </div>
      <div className='p-8 overflow-y-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Occupancy Rate</CardTitle>
              <BarChartIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>82%</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Revenue</CardTitle>
              <DollarSignIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>$125,234</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Rooms</CardTitle>
              <HotelIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>120</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +3 new rooms this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Bookings</CardTitle>
              <BookIcon className='w-6 h-6 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-4xl font-bold'>1,234</div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='mt-8'>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Rooms</CardTitle>
              <Button size='icon' variant='outline'>
                <PlusIcon onClick={()=>setIsOpen(true)}  className='w-6 h-6' />
                <span  className='sr-only'>Add Room</span>
              </Button>
            </CardHeader>
              
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Room #</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>101</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell>$150</TableCell>
                    <TableCell>Available</TableCell>
                    <TableCell className='text-right'>
                      <Button size='icon' variant='ghost'>
                        <DeleteIcon className='w-5 h-5' />
                        <span className='sr-only'>Edit</span>
                      </Button>
                      <Button size='icon' variant='ghost'>
                        <TrashIcon className='w-5 h-5' />
                        <span className='sr-only'>Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>102</TableCell>
                    <TableCell>Deluxe</TableCell>
                    <TableCell>$250</TableCell>
                    <TableCell>Booked</TableCell>
                    <TableCell className='text-right'>
                      <Button size='icon' variant='ghost'>
                        <DeleteIcon className='w-5 h-5' />
                        <span className='sr-only'>Edit</span>
                      </Button>
                      <Button size='icon' variant='ghost'>
                        <TrashIcon className='w-5 h-5' />
                        <span className='sr-only'>Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>103</TableCell>
                    <TableCell>Suite</TableCell>
                    <TableCell>$350</TableCell>
                    <TableCell>Available</TableCell>
                    <TableCell className='text-right'>
                      <Button size='icon' variant='ghost'>
                        <DeleteIcon className='w-5 h-5' />
                        <span className='sr-only'>Edit</span>
                      </Button>
                      <Button size='icon' variant='ghost'>
                        <TrashIcon className='w-5 h-5' />
                        <span className='sr-only'>Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <RoomModal isOpen={isOpen} closeModel={()=> {setIsOpen(false)} }/>
      </div>
    </div>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1='12' x2='12' y1='20' y2='10' />
      <line x1='18' x2='18' y1='20' y2='4' />
      <line x1='6' x2='6' y1='20' y2='16' />
    </svg>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
    </svg>
  );
}

function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z' />
      <line x1='18' x2='12' y1='9' y2='15' />
      <line x1='12' x2='18' y1='9' y2='15' />
    </svg>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

function HotelIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M10 22v-6.57' />
      <path d='M12 11h.01' />
      <path d='M12 7h.01' />
      <path d='M14 15.43V22' />
      <path d='M15 16a5 5 0 0 0-6 0' />
      <path d='M16 11h.01' />
      <path d='M16 7h.01' />
      <path d='M8 11h.01' />
      <path d='M8 7h.01' />
      <rect x='4' y='2' width='16' height='20' rx='2' />
    </svg>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width='7' height='9' x='3' y='3' rx='1' />
      <rect width='7' height='5' x='14' y='3' rx='1' />
      <rect width='7' height='9' x='14' y='12' rx='1' />
      <rect width='7' height='5' x='3' y='16' rx='1' />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
  );
}

function ViewIcon(props) {
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
      <path d='M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z' />
      <path d='M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
      <path d='M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2' />
      <path d='M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2' />
    </svg>
  );
}
