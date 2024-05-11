
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";


export default function Discover() {
  return (
    <section className='w-full pb-12'>
      <div className='container grid gap-10 px-4 md:px-6'>
        <div className='grid gap-4'>
          <h2 className='text-3xl font-bold tracking-tight'>Discover your new favourite stay</h2>
        </div>
        <Carousel
          className='w-full max-w-full'
          opts={{
            align: "start",
          }}
          orientation='horizontal'>
          <CarouselContent className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <CarouselItem className='pl-4'>
              <div className='relative group rounded-lg overflow-hidden'>
                <Link className='absolute inset-0 z-10' href='#'>
                  <span className='sr-only'>View Category</span>
                </Link>
                <img
                  alt='Shoes'
                  className='w-full aspect-square object-cover group-hover:opacity-50 transition-opacity'
                  height={300}
                  src='https://cdn.dribbble.com/userupload/10748403/file/original-8e51934ec5c09226f98f45035fd1efb8.jpg?resize=752x'
                  width={300}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h3 className='text-2xl font-bold text-white'>Shoes</h3>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className='relative group rounded-lg overflow-hidden'>
              <Link className='absolute inset-0 z-10' href='#'>
                <span className='sr-only'>View Category</span>
              </Link>
              <img
                alt='Tops'
                className='w-full aspect-square object-cover group-hover:opacity-50 transition-opacity'
                height={300}
                src='https://cdn.dribbble.com/userupload/10749614/file/original-726f5d3385f08ad454b1f5905126fa22.jpg?resize=752x'
                width={300}
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <h3 className='text-2xl font-bold text-white'>Tops</h3>
              </div>
            </CarouselItem>

            <CarouselItem className='pl-4'>
              <div className='relative group rounded-lg overflow-hidden'>
                <Link className='absolute inset-0 z-10' href='#'>
                  <span className='sr-only'>View Category</span>
                </Link>
                <img
                  alt='Accessories'
                  className='w-full aspect-square object-cover group-hover:opacity-50 transition-opacity'
                  height={300}
                  src='https://cdn.dribbble.com/userupload/10750325/file/original-891f4e3d715833ea6b7e4763e5a3bd86.jpg?resize=752x'
                  width={300}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h3 className='text-2xl font-bold text-white'>Accessories</h3>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className='pl-4'>
              <div className='relative group rounded-lg overflow-hidden'>
                <Link className='absolute inset-0 z-10' href='#'>
                  <span className='sr-only'>View Category</span>
                </Link>
                <img
                  alt='Pants'
                  className='w-full aspect-square object-cover group-hover:opacity-50 transition-opacity'
                  height={300}
                  src='https://cdn.dribbble.com/userupload/10749868/file/original-249b81d2af9e37319283bdb9ab2604ac.jpg?resize=752x'
                  width={300}
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h3 className='text-2xl font-bold text-white'>Pants</h3>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
