import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RoomModal( isOpen, closeModel) {

    if (!isOpen) return null;
  return (
    <>:
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
                <Label htmlFor='room-type'>Room Type</Label>
                <Select id='room-type'>
                  <option value='standard'>Standard</option>
                  <option value='deluxe'>Deluxe</option>
                  <option value='suite'>Suite</option>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='room-price'>Price</Label>
                <Input id='room-price' type='number' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='room-availability'>Availability</Label>
                <Select id='room-availability'>
                  <option value='available'>Available</option>
                  <option value='booked'>Booked</option>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button  type='submit'>Save Room</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
