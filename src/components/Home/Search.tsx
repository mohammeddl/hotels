import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function Search() {
  return (
    <div className=' dark:bg-gray-900 py-8 px-4 md:px-6'>
      <div className='max-w-8xl  bg-white dark:bg-gray-800 rounded-lg mx-7  p-6 md:p-8'>
        <h2 className='text-2xl font-bold mb-6'>Find your next adventure</h2>
        <form className='grid grid-cols-1 md:grid-cols-4 gap-14'>
          <div className='space-y-2'>
            <Label htmlFor='destination'>Going to</Label>
            <Input
              className='w-full'
              id='destination'
              placeholder='Where are you going?'
              type='text'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='dates'>Dates</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className='w-full flex justify-between items-center'
                  variant='outline'>
                  <span>Select dates</span>
                  <CalendarDaysIcon className='w-5 h-5' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-0 max-w-[276px]'>
                <Calendar mode='range' />
              </PopoverContent>
            </Popover>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='travelers'>Travelers</Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='1 traveler' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1 traveler</SelectItem>
                <SelectItem value='2'>2 travelers</SelectItem>
                <SelectItem value='3'>3 travelers</SelectItem>
                <SelectItem value='4'>4 travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-x-2 '>
            <Button
              className='px-20 mt-8 ml-7 bg-blue-700 hover:bg-blue-500'
              type='submit'>
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props) {
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
      <path d='M8 14h.01' />
      <path d='M12 14h.01' />
      <path d='M16 14h.01' />
      <path d='M8 18h.01' />
      <path d='M12 18h.01' />
      <path d='M16 18h.01' />
    </svg>
  );
}
