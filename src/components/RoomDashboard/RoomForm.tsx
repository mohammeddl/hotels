import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "@/src/redux/slices/RoomSlice";
import axios from "axios";
import RoomModal from "../dashboard/RoomModal";
import RoomModifModal from "../dashboard/RoomModifModal";
import SidBar from "../dashboard/SidBar";
import Swal from "sweetalert2";
import { dotWave } from 'ldrs'
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
import { DeleteIcon, PlusIcon, TrashIcon } from "lucide-react";

const IMAGE_BASE_URL = "http://localhost:8000/images/";

export default function RoomForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModif, setIsModif] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);

  console.log('rooms', rooms);
  console.log('loading', loading);

  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/rooms");
      dispatch(setRooms(response.data.rooms));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteRoom = async (id) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:8000/api/rooms/${id}`)
              .then((response) => {
                console.log(response.data);
                getRooms();
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              })
              .catch((error) => {
                console.log(error);
                swalWithBootstrapButtons.fire({
                  title: "Error!",
                  text: "There was a problem deleting the room.",
                  icon: "error",
                });
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const openModifModal = (room) => {
    setSelectedRoom(room);
    setIsModif(true);
  };

  useEffect(() => {
    getRooms();
  }, []);

  if (loading) {
    return (
      <div>
        <l-dot-wave size='47' speed='1' color='black'></l-dot-wave>
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
                          <DeleteIcon
                            className='w-5 h-5'
                            onClick={() => openModifModal(room)}
                          />
                          <span className='sr-only'>Edit</span>
                        </Button>
                        <Button size='icon' variant='ghost'>
                          <TrashIcon
                            className='w-5 h-5'
                            onClick={() => deleteRoom(room.id)}
                          />
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
          room={selectedRoom}
        />
      </div>
    </>
  );
}
