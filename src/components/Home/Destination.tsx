"use client";
import { useEffect, useRef, useState } from "react";
import { Text } from "../atoms/Text";
import { TopDestinationTexts } from "../particles/DataLists";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";

import agadir from "../../assets/agadir.png";
import casablanca from "../../assets/casa.png";
import fes from "../../assets/fes.png";
import marrakech from "../../assets/marakesh.png";
import rabat from "../../assets/rabat.png";
import tanger from "../../assets/tanger.png";
import chafchaouen from "../../assets/Chefchaouen.png";
import essaouira from "../../assets/Essaouira.png";

export default function Destination() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const images = [
    agadir,
    marrakech,
    casablanca,
    fes,
    rabat,
    essaouira,
    tanger,
    chafchaouen,
  ];

  const [getItinerary, setItinerary] = useState([]);

  const fetchItinerary = async () => {
    try {
      const response = await axios.get(
        "https://hotels-com-provider.p.rapidapi.com/v2/regions",
        {
          params: {
            query: "Maroc",
            domain: "AR",
            locale: "es_AR",
          },
          headers: {
            'x-rapidapi-key': 'adc18f9265msha05378245216634p16ee9fjsnc5363fe7309b',
            'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
          }
        }
      );
      console.log("API response:", response.data.data);
      setItinerary(response.data.data);
      console.log("Itinerary:", getItinerary);
    } catch (error) {
      console.log("Error fetching itinerary:", error);
    }
  };

  useEffect(() => {
    fetchItinerary();
  }, []);

  return (
    <section className='w-full h-auto flex flex-col items-center justify-center relative pb-6 lg:px-24 md:px-20 px-6 '>
      <Text as='h2' className='text-3xl font-bold tracking-tight'>
        {TopDestinationTexts.secondText}
      </Text>

      {/* Controllers  */}
      <div className='w-full flex justify-end gap-5 items-center md:px-6 px-3'>
        <Button
          onClick={previous}
          className='cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full'
          type='button'>
          <CaretLeft size={18} color='currentColor' />
        </Button>
        <Button
          onClick={next}
          className='cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full'
          type='button'>
          <CaretRight size={18} color='currentColor' />
        </Button>
      </div>

      {/* Slides  */}
      <div className='w-full h-auto mt-4'>
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {getItinerary &&
            getItinerary.slice(1, 9).map((itinerary, index) => (
              <div key={index} className='md:px-6 px-3'>
                <Card
                  cardClass='overflow-hidden shadow-md rounded-lg  cursor-pointer group'
                  imageAlt={images[index].src}
                  imageSrc={images[index].src}
                  imageWrapperClass='w-full h-[200px] overflow-hidden'
                  cover='group-hover:scale-125 transition duration-500 ease'
                  textWrapperClass='flex flex-col gap-4 w-full px-5 py-5'>
                  <div className='flex justify-between items-center'>
                    <Text as='h4' className='text-base font-medium text-color3'>
                      {itinerary.hierarchyInfo.country.name}
                    </Text>
                    <Text
                      as='small'
                      className=' text-color3 font-light text-sm'>
                      {itinerary.duration}
                    </Text>
                  </div>
                  <div className='w-full flex gap-4 items-center justify-between text-color3'>
                    <div className='flex gap-4'>
                      <AirplaneTilt size={20} color='currentColor' />
                      <Text
                        as='p'
                        className=' text-color3 font-light text-base'>
                        {itinerary.regionNames.primaryDisplayName}
                      </Text>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
}
