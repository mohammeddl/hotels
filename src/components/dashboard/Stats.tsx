import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function Stats() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 p-4 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>Total Rooms</CardTitle>
              <HotelIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>120</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +5 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                Occupancy Rate
              </CardTitle>
              <PercentIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>82%</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>Revenue</CardTitle>
              <DollarSignIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$125,432</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>Bookings</CardTitle>
              <CalendarIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,234</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +8% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='mt-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>
                Create New Room
              </CardTitle>
              <PlusIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <form className='grid gap-4'>
                <div className='grid gap-2'>
                  <Label htmlFor='room-number'>Room Number</Label>
                  <Input id='room-number' type='text' />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='room-type'>Room Type</Label>
                  <Select id='room-type'>
                    <option value=''>Select Room Type</option>
                    <option value='standard'>Standard</option>
                    <option value='deluxe'>Deluxe</option>
                    <option value='suite'>Suite</option>
                  </Select>
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='room-price'>Price</Label>
                  <Input id='room-price' type='number' />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='room-availability'>Availability</Label>
                  <Select id='room-availability'>
                    <option value=''>Select Availability</option>
                    <option value='available'>Available</option>
                    <option value='occupied'>Occupied</option>
                    <option value='maintenance'>Maintenance</option>
                  </Select>
                </div>
                <Button className='w-full' type='submit'>
                  Create Room
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  );
}

function DollarSignIcon(props) {
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

function HotelIcon(props) {
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

function PercentIcon(props) {
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
      <line x1='19' x2='5' y1='5' y2='19' />
      <circle cx='6.5' cy='6.5' r='2.5' />
      <circle cx='17.5' cy='17.5' r='2.5' />
    </svg>
  );
}

function PlusIcon(props) {
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
