"use client";

import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/list",
        {
          params: {
            domain: "AE",
            locale: "en_GB",
            hotel_id: "1105156",
            sort_order: "NEWEST_TO_OLDEST",
            page_number: "5",
          },
          headers: {
            "X-RapidAPI-Key":
              "adc18f9265msha05378245216634p16ee9fjsnc5363fe7309b",
            "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
          },
        }
      );
      setRooms(response);
      console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='mx-24'>
      <h2 className=' text-3xl font-bold tracking-tight'>
        Explore these unique stays
      </h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-fit mx-auto  py-12'>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem>
                <img
                  alt='Room 1'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 1'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 1'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='p-4 bg-white dark:bg-gray-950'>
            <h3 className='text-xl font-bold mb-2'>Deluxe Room</h3>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Spacious room with a king-size bed and stunning city views.
            </p>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold'>$199/night</span>
              <Button className="bg-blue-700 text-white hover:bg-blue-500" size='sm'>Book Now</Button>
            </div>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem>
                <img
                  alt='Room 2'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 2'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 2'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='p-4 bg-white dark:bg-gray-950'>
            <h3 className='text-xl font-bold mb-2'>Premium Suite</h3>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Luxurious suite with a separate living area and private balcony.
            </p>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold'>$299/night</span>
              <Button size='sm'>Book Now</Button>
            </div>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem>
                <img
                  alt='Room 3'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 3'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 3'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='p-4 bg-white dark:bg-gray-950'>
            <h3 className='text-xl font-bold mb-2'>Family Suite</h3>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Spacious suite with a separate living area and two bedrooms.
            </p>
            <div className='flex items-center justify-between'>
              <span className='text-2xl  font-bold'>$349/night</span>
              <Button size='sm'>Book Now</Button>
            </div>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden shadow-lg'>
          <Carousel className='w-full'>
            <CarouselContent>
              <CarouselItem>
                <img
                  alt='Room 4'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 4'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt='Room 4'
                  className='object-cover w-full h-64'
                  height={500}
                  src='/placeholder.svg'
                  style={{
                    aspectRatio: "800/500",
                    objectFit: "cover",
                  }}
                  width={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='p-4 bg-white dark:bg-gray-950'>
            <h3 className='text-xl font-bold mb-2'>Penthouse Suite</h3>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Luxurious penthouse suite with panoramic city views.
            </p>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold'>$499/night</span>
              <Button size='sm'>Book Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
