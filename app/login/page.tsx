/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EqU2B2pvSGU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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

export default function Login() {
  return (
    <div className='grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col items-center justify-center bg-gray-100 p-8 dark:bg-gray-800 lg:p-12'>
        <div className='flex items-center space-x-2'>
          <HotelIcon className='h-8 w-8 text-gray-900 dark:text-gray-50' />
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            Acme Hotels
          </h1>
        </div>
        <p className='mt-4 text-lg text-gray-500 dark:text-gray-400'>
          Discover the best hotels for your next adventure.
        </p>
      </div>
      <div className='flex items-center justify-center p-8 lg:p-12'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your email and password below to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='m@example.com' type='email' />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center justify-between'>
                <Label htmlFor='password'>Password</Label>
                <Link
                  className='text-sm font-medium text-gray-900 hover:underline dark:text-gray-50'
                  href='#'>
                  Forgot password?
                </Link>
              </div>
              <Input id='password' type='password' />
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='remember' />
              <Label className='text-sm font-medium' htmlFor='remember'>
                Remember me
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full' type='submit'>
              Sign in
            </Button>
            <div className='mt-4 text-center text-sm'>
              Don't have an account?
              <Link
                className='font-medium text-gray-900 hover:underline dark:text-gray-50'
                href='#'>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function HotelIcon(props) {
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
      <path d='M10 22v-6.57' />
      <path d='M12 11h.01' />
      <path d='M12 7h.01' />
      <path d='M14 15.43V22' />
      <path d='M15 16a5 5 0 0 0-6 0' />
      <path d='M16 11h.01' />
      <path d='M16 7h.01' />
      <path d='M8 11h.01' />
      <path d='M8 7h.01' />
      <rect x='4' y='2' width='16' height='20' rx='2' />
    </svg>
  );
}
