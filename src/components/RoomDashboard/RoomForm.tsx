import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import RoomModal from "../dashboard/RoomModal";
import SidBar from "../dashboard/SidBar";
import axios from "axios";
import { leapfrog } from "ldrs";
import RoomModifModal from "../dashboard/RoomModifModal";
const IMAGE_BASE_URL = "http://localhost:8000/images/";

export default function RoomForm() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isModif, setIsModif] = useState<Boolean>(false);
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/rooms");
      console.log(response.data);
      setRooms(response.data.rooms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  if (!rooms) {
    return (
      <div>
        <l-leapfrog size='40' speed='2.5' color='black'></l-leapfrog>
      </div>
    );
  }

  return (
    <>
      <div className='flex-1 grid grid-cols-[240px_1fr] overflow-hidden'>
        <div className='bg-gray-100 dark:bg-gray-800 p-6 overflow-y-auto'>
          <SidBar />
        </div>
        <div className='mt-8 px-12'>
          <Card>
            <CardHeader className='flex items-center justify-between'>
              <CardTitle>Rooms</CardTitle>
              <Button size='icon' variant='outline'>
                <PlusIcon onClick={() => setIsOpen(true)} className='w-6 h-6' />
                <span className='sr-only'>Add Room</span>
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
                    <TableHead>Images</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rooms.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell>{room.number}</TableCell>
                      <TableCell>{room.room_type}</TableCell>
                      <TableCell>{room.price + "$"}</TableCell>
                      <TableCell>{room.status}</TableCell>
                      <TableCell>
                        <div className='flex gap-2'>
                          {room.images.map((image) => (
                            <Image
                              key={image.id}
                              alt='Room Image'
                              className='rounded-md object-cover'
                              height={64}
                              src={`${IMAGE_BASE_URL}${image.image_room}`}
                              style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                              }}
                              width={64}
                            />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className='text-right'>
                        <Button size='icon' variant='ghost'>
                          <DeleteIcon className='w-5 h-5' 
                          onClick={()=>setIsModif(true)}
                          />
                          <span className='sr-only'>Edit</span>
                        </Button>
                        <Button size='icon' variant='ghost'>
                          <TrashIcon className='w-5 h-5' />
                          <span className='sr-only'>Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <RoomModal
          isOpen={isOpen}
          closeModel={() => {
            setIsOpen(false);
          }}
        />
        <RoomModifModal
          isModif={isModif}
          closeModel={() => {
            setIsModif(false);
          }}
        />
      </div>
    </>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
