"use client";

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bed, Coffee, Search, Wifi } from "lucide-react"
import { Switch } from '@/components/ui/switch'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from '@/components/ui/carousel';
import Destination from '../Home/Destination';




export default function HotelListWithFilters() {

  const [rooms, setRooms] = useState<any[]>([]);

  const getRoomsDB = async () => {
    try{
    const response = await axios.get("http://localhost:8000/api/rooms");
    setRooms(response.data.rooms);
    console.log(response.data.rooms);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getRoomsDB();
  }
  , []);

    return (
        <div className="container my-10 mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Search Hotels</h2>
            <div className="relative">
              <Input type="text" placeholder="Search hotels..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div>
  <h3 className="text-lg font-semibold mb-2">Room Types</h3>
  <div className="space-y-2">
    <Label className="flex items-center space-x-2">
      <Switch id="deluxe" />
      <span className="h-4 w-4">🛏️</span>
      <span>Deluxe Room</span>
    </Label>
    <Label className="flex items-center space-x-2">
      <Switch id="standard" />
      <span className="h-4 w-4">🛏️</span>
      <span>Standard Room</span>
    </Label>
    <Label className="flex items-center space-x-2">
      <Switch id="suite" />
      <span className="h-4 w-4">🏨</span>
      <span>Suite</span>
    </Label>
  </div>
</div>
          
          <Button className=" bg-teal-500 hover:bg-teal-700 w-full">Apply Filters</Button>
        </div>
        

        <div>
          <h2 className="text-2xl font-bold mb-4">Available Hotels</h2>
          <div className="space-y-4">
            {rooms.map((room) => (
              <div key={room.id} className="border rounded-lg p-4 flex space-x-4">
                <Carousel className="">
              <CarouselContent>
                {room.images.slice(0, 3).map((image, idx) => (
                  <CarouselItem key={idx}>
                    <Image
                      alt={`Room ${image + 1}`}
                      className="object-cover "
                      height={128}
                      width={128}
                      src={"http://localhost:8000/images/"+ image.image_room}
                      style={{
                        
                        objectFit: "cover",
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{room.description}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">2 beds</span>
                    <Wifi className="h-4 w-4 text-gray-400 ml-2" />
                    <span className="text-sm text-gray-600">Free WiFi</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-lg font-bold">{room.price+"$"}</span>
                    <Button className='bg-teal-500 hover:bg-teal-700' size="default">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}