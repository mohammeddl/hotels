import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RoomModal({ isOpen, closeModel }) {
  console.log(isOpen);

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div
          className='absolute -top-8 inset-0 bg-black opacity-50'
          onClick={closeModel}></div>
        <div className='max-h-[90%]   rounded-lg z-50 w-1/2'>
          <div className='mt-8'>
            <Card>
              <CardHeader>
                <CardTitle>Add New Room</CardTitle>
              </CardHeader>
              <CardContent>
                <form className='grid grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='room-number'>Room Number</Label>
                    <Input id='room-number' type='number' />
                  </div>
                  <div className='space-y-2'>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select type' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Room Type</SelectLabel>
                          <SelectItem value='Standard'>Standard</SelectItem>
                          <SelectItem value='Deluxe'>Deluxe</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='room-price'>Price</Label>
                    <Input id='room-price' type='number' />
                  </div>
                  <div className='space-y-2'>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select for Availability' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Availability</SelectLabel>
                          <SelectItem value='Booked'>Booked</SelectItem>
                          <SelectItem value='available'>available</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='col-span-2 space-y-2'>
                    <Label htmlFor='room-images'>Room Images</Label>
                  <Input id="room-images" multiple type="file" />
                    <div className='flex gap-2'>
                      <Image
                        alt='Room Image'
                        className='rounded-md object-cover'
                        height={128}
                        src='/placeholder.svg'
                        style={{
                          aspectRatio: "128/128",
                          objectFit: "cover",
                        }}
                        width={128}
                      />
                      <Image
                        alt='Room Image'
                        className='rounded-md object-cover'
                        height={128}
                        src='/placeholder.svg'
                        style={{
                          aspectRatio: "128/128",
                          objectFit: "cover",
                        }}
                        width={128}
                      />
                      <Image
                        alt='Room Image'
                        className='rounded-md object-cover'
                        height={128}
                        src='/placeholder.svg'
                        style={{
                          aspectRatio: "128/128",
                          objectFit: "cover",
                        }}
                        width={128}
                      />
                      {/* <Input id="room-images" multiple type="file" /> */}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type='submit'>Save Room</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
