"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SidBar from "../dashboard/SidBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import HotelsIndex from "./HotelsIndex";

export default function CreateHotel() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();
    

      const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.hotelName);
        formData.append("address", data.Location);
        formData.append("city", data.city);
        try{
            const response = await axios.post('http://localhost:8000/api/hotels',formData);
            if(response.status === 201){
                swal('Success','Hotel created successfully','success');
                setValue('hotelName','');
                setValue('Location','');
                setValue('city','');
            }
        }catch(error){
            swal('Error','An error occurred, please try again','error');
        }
    }
        
      

  return (
    <div className='flex-1 grid grid-cols-[240px_1fr] overflow-hidden'>
      <div className='bg-gray-100 dark:bg-gray-800 p-6 overflow-y-auto'>
        <SidBar />
      </div>
      <main className='flex-1 p-4 sm:p-6'>
        <div className='grid gap-6 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Create Hotel</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='grid gap-4'
              onSubmit={handleSubmit(onSubmit)}>
                <Input label='Hotel Name' placeholder='Enter hotel name' 
                {...register('hotelName',{required: true})}/>
                {errors.hotelName && <span className='text-red-500'>This field is required</span>}
                <Input label='Location' placeholder='Enter hotel location' 
                 {...register('Location',{required: true})}/>
                 {errors.Location && <span className='text-red-500'>This field is required</span>}
                <Input
                  label='City'
                  placeholder='Enter city'
                    {...register('city',{required: true})}
                />
                {errors.city && <span className='text-red-500'>This field is required</span>}
                <Button type='submit'>Create Hotel</Button>
              </form>
            </CardContent>
          </Card>
          <div className='grid gap-4'>
            <Card>
              <CardHeader>
                <CardTitle>Hotel Statistics</CardTitle>
              </CardHeader>
              <CardContent className='grid gap-4'>
                <div className='flex items-center justify-between'>
                  <div>Total Hotels</div>
                  <div className='font-medium'>125</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div>Average Rooms per Hotel</div>
                  <div className='font-medium'>45</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div>Total Room Capacity</div>
                  <div className='font-medium'>5,625</div>
                </div>
              </CardContent>
            </Card>
           <HotelsIndex />
          </div>
        </div>
      </main>
    </div>
  );
}
