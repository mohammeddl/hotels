import { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

export default function RoomModifModal({ isModif, closeModel }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("number", data.room_number);
    formData.append("room_type", data.room_type);
    formData.append("price", data.price);
    formData.append("status", data.availability);
    formData.append("hotel_id", data.Hotels);

    images.forEach((file) => {
      formData.append("room_images[]", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/rooms",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      swal("Good job!", "Room created successfully!", "success");
      closeModel();
    } catch (error) {
      console.error(error);
      swal("Error", "Failed to create room", "error");
    }
  };

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
    const [hotels, setHotels] = useState([]);

    const getHotels = async () => {
        const response = await axios.get("http://localhost:8000/api/hotels");
        setHotels(response.data);
      };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  useEffect(() => {
    getHotels();
  }, []);


  if (!isModif) return null;
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div
          className='absolute -top-8 inset-0 bg-black opacity-50'
          onClick={closeModel}></div>
        <div className='max-h-[90%] rounded-lg z-50 w-1/2'>
          <div className='mt-8'>
            <Card>
              <CardHeader>
                <CardTitle>Modify Room</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='grid grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='room-number'>Room Number</Label>
                    <Input
                      {...register("room_number", { required: true })}
                      id='room_number'
                      type='number'
                    />
                    {errors.room_number && <span>This field is required</span>}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='room-type'>Room Type</Label>
                    <Select
                      onValueChange={(value) => setValue("room_type", value)}>
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
                    {errors.room_type && <span>This field is required</span>}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='room-price'>Price</Label>
                    <Input
                      {...register("price", { required: true })}
                      id='room-price'
                      type='number'
                    />
                    {errors.price && <span>This field is required</span>}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='room-availability'>Availability</Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("availability", value)
                      }>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select availability' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Availability</SelectLabel>
                          <SelectItem value='Booked'>Booked</SelectItem>
                          <SelectItem value='available'>Available</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.availability && <span>This field is required</span>}
                  </div>
                  <div className=' space-y-2'>
                    <Label htmlFor='room-images'>Room Images</Label>
                    <Input
                      {...register("room_images")}
                      id='room_images'
                      multiple
                      type='file'
                      onChange={handleImageUpload}
                    />
                    <div className='flex gap-2 flex-wrap'>
                      {imagePreviews.map((src, index) => (
                        <div key={index} className='relative'>
                          <Image
                            alt='Room Image'
                            className='rounded-md object-cover'
                            height={128}
                            src={src}
                            style={{
                              aspectRatio: "128/128",
                              objectFit: "cover",
                            }}
                            width={128}
                          />
                          <button
                            type='button'
                            className='absolute top-0 right-0 text-black rounded-full p-1'
                            onClick={() => handleRemoveImage(index)}>
                            &#10005;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='Hotels'>Hotels</Label>
                    <Select
                      onValueChange={(value) => setValue("Hotels", value)}>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Select Hotels' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Hotels</SelectLabel>
                          {hotels.map((hotel) => (
                            <SelectItem key={hotel.id} value={hotel.id}>
                              {hotel.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.Hotels && <span>This field is required</span>}
                  </div>
                  <CardFooter className='col-span-2'>
                    <Button type='submit'>Save Room</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
