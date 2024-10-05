'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import imageLogin from "@/src/assets/imageLogin.png"; 
import { useRouter } from "next/navigation"; 
import { setUser } from "@/src/redux/slices/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        dispatch(setUser({ user, token }));
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-gray-100' style={{ height: '100vh' }}>
      {/* Left side with GIF */}
      <motion.div 
        className='flex items-center justify-center bg-gray-200'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ height: '100vh' }}
      >
        <Image
          src={imageLogin} 
          alt='Hotels GIF'
          width={400}
          height={500}
          className=" w-full " 
        />
      </motion.div>

      <motion.div 
        className='flex items-center justify-center p-8 lg:p-12 bg-white'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ height: '100vh' }}
      >
        <Card className='w-full max-w-md shadow-lg'>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-3xl font-bold'>Welcome Back!</CardTitle>
            <CardDescription>
              Please enter your email and password to log in.
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className='space-y-4'>
              {/* Email input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  placeholder='you@example.com'
                  type='email'
                  className='transition-all hover:bg-gray-50 focus:ring-2 focus:ring-teal-500'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              {/* Password input */}
              <motion.div 
                className='grid gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                  <Link className='text-sm font-medium text-teal-600 hover:underline' href='#'>
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  className='transition-all hover:bg-gray-50 focus:ring-2 focus:ring-teal-500'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </motion.div>

              {/* Remember me */}
              <motion.div 
                className='flex items-center space-x-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Checkbox id='remember' />
                <Label className='text-sm font-medium' htmlFor='remember'>
                  Remember me
                </Label>
              </motion.div>

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </CardContent>

            <CardFooter>
              {/* Sign in button */}
              <motion.div 
                className='w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className='w-full bg-teal-500 hover:bg-teal-600 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-600' type='submit'>
                  Sign in
                </Button>
              </motion.div>
              
              {/* Signup link */}
              <motion.div 
                className='mt-4 text-center text-sm'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Don&apos;t have an account?&nbsp;
                <Link className='font-medium text-teal-600 hover:underline' href='#'>
                  Sign up
                </Link>
              </motion.div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
