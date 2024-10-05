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
import Image from "next/image";
import axios from "axios";

export default function RoomCarousel() {
  const [rooms, setRooms] = useState<any[]>([]);

  const countries = [
    { domain: "AR", locale: "es_AR", hotel_id: "1105156" },
    { domain: "FR", locale: "fr_FR", hotel_id: "1105157" },
    { domain: "US", locale: "en_US", hotel_id: "1105158" },
    { domain: "GB", locale: "en_GB", hotel_id: "1105159" },
    { domain: "DE", locale: "de_DE", hotel_id: "1105160" },
    { domain: "IT", locale: "it_IT", hotel_id: "1105161" },
    { domain: "ES", locale: "es_ES", hotel_id: "1105162" },
    { domain: "PT", locale: "pt_PT", hotel_id: "1105163" }
  ];

  const getDataForMultipleCountries = async () => {
    const results = [];

    for (let i = 0; i < countries.length; i++) {
      const { domain, locale, hotel_id } = countries[i];

      try {
        const response = await axios.get(
          "https://hotels-com-provider.p.rapidapi.com/v2/hotels/details",
          {
            params: {
              domain,
              hotel_id,
              locale,
            },
            headers: {
              "x-rapidapi-key": "adc18f9265msha05378245216634p16ee9fjsnc5363fe7309b",
              "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
            },
          }
        );
        results.push(response.data);
        console.log(`Data for ${domain} fetched successfully`, response.data);
      } catch (error) {
        console.log(`Error fetching data for ${domain}:`, error);
      }
    }

    setRooms(results);
    console.log("All country data:", results);
  };

  useEffect(() => {
    getDataForMultipleCountries();
  }, []);

  return (
    <div className="mx-24">
      <h2 className="text-3xl font-bold tracking-tight">
        Explore these unique stays
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-fit mx-auto py-12">
        {rooms.slice(0, 4).map((room, index) => (  
          <div className="rounded-lg overflow-hidden shadow-lg" key={index}>
            <Carousel className="w-full">
              <CarouselContent>
                {room.propertyGallery?.images?.slice(0, 3).map((image, idx) => (
                  <CarouselItem key={idx}>
                    <Image
                      alt={`Room ${index + 1}`}
                      className="object-cover w-full h-64"
                      height={500}
                      src={image?.image?.url ?? "/default-image.jpg"} 
                      style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                      }}
                      width={800}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold mb-2">Deluxe Room</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Spacious room with a king-size bed and stunning city views.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$199/night</span>
                <Button
                  className=" text-white bg-teal-500 hover:bg-teal-700"
                  size="sm"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
