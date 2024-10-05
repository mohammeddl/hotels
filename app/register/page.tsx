'use client';

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  image: File | null;
}

export default function Register() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('image', file); 
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      // Create form data for API without FormData()
        const submitData = new FormData();
        submitData.append('name', data.name);
        submitData.append('email', data.email);
        submitData.append('password', data.password);
        submitData.append('image', data.image);

      // Send API request
      const response = await axios.post('http://localhost:8000/api/register', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        setSuccessMessage("User created successfully!");
        setErrorMessage(null);
        router.push('/login');
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'User creation failed');
      setSuccessMessage(null);
    }
  };

  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-gray-100' style={{ height: '100vh' }}>
      {/* Left side placeholder */}
      <motion.div 
        className='flex items-center justify-center bg-gray-200'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-teal-600'>Join Us!</h1>
          <p className='mt-4 text-lg'>Start your journey by creating an account</p>
        </div>
      </motion.div>

      {/* Right side with form */}
      <motion.div 
        className='flex items-center justify-center p-8 lg:p-12 bg-white'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ height: '100vh' }}
      >
        <Card className='w-full max-w-md shadow-lg'>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-3xl font-bold'>Create an Account</CardTitle>
            <CardDescription>
              Please fill in the details below to sign up.
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <CardContent className='space-y-4'>
              {/* Name input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' placeholder='John Doe' type='text' className='transition-all hover:bg-gray-50 focus:ring-2 focus:ring-teal-500' 
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </motion.div>

              {/* Email input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='you@example.com' type='email' className='transition-all hover:bg-gray-50 focus:ring-2 focus:ring-teal-500' 
                  {...register("email", { required: "Email is required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/, message: "Invalid email" } })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </motion.div>

              {/* Password input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' className='transition-all hover:bg-gray-50 focus:ring-2 focus:ring-teal-500' 
                  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </motion.div>

              {/* Image Upload input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor='image'>Profile Picture</Label>
                <Input id='image' type='file' accept='image/*' onChange={handleImageChange} />
                {imagePreview && (
                  <div className="mt-4">
                    <Image
                      src={imagePreview}
                      alt="Profile Preview"
                      width={150}
                      height={150}
                      className="rounded-full border-2 border-teal-500"
                    />
                  </div>
                )}
              </motion.div>
            </CardContent>

            <CardFooter>
              {/* Error or Success Message */}
              {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
              {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

              {/* Register button */}
              <motion.div 
                className='w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button className='w-full bg-teal-500 hover:bg-teal-600 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-600' type='submit'>
                  Sign Up
                </Button>
              </motion.div>
              
              {/* Login link */}
              <motion.div 
                className='mt-4 text-center text-sm'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Already have an account?&nbsp;
                <Link className='font-medium text-teal-600 hover:underline' href='/login'>
                  Sign in
                </Link>
              </motion.div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
