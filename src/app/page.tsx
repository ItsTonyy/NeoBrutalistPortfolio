import { Fragment } from 'react';
import Image from 'next/image';
import ImageCard from '@/components/ui/image-card';
import { Star } from 'coolshapes-react';

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center flex-row py-5 px-8'>
        <div className='flex items-center'>
          <h1 className='font-archivo text-3xl font-semibold drop-shadow select-none'>
            &lt;Tony Terra Nova /&gt;
          </h1>
        </div>

        <div className='flex flex-row gap-10'>
          <h3
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105'
          >
            About Me
          </h3>
          <h3
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105'
          >
            Projects
          </h3>
          <a
            href='https://github.com/ItsTonyy'
            target='_blank'
            className='flex flex-row items-center gap-1 transform transition-transform duration-100 
            hover:font-medium hover:underline hover:cursor-pointer hover:scale-105 '
          >
            <Image src='/github-logo.png' alt='github logo' width={18} height={18} />

            <h3 className='text-lg'>GitHub</h3>
          </a>
        </div>
      </header>

      <div className='w-full border-2 border-black' />

      <main className='flex justify-center items-center bg-brutalistBlue w-full h-dvh px-2'>
        <div className='flex flew-row w-full h-[90%] mx-8'>
          <div className='h-full w-1/2 flex items-center justify-center flex-col'>
            <div className='h-[50%] w-full flex flex-col justify-center pl-12'>
              <h2 className='text-2xl mb-2'>Hi, my name is</h2>
              <h1 className='text-6xl font-semibold mb-2'>Tony Terra Nova.</h1>
              <h1 className='text-6xl font-semibold'>And I build things for the web.</h1>
              <p className='mt-4 text-lg'>I&apos;m a software engineer specializing in building
               (and occasionally designing) digital experiences. And currently, I&apos;m Seeking my first
                opportunity in software engineering, specializing in web development.
              </p>
              
            </div>
          </div>
          <div className='h-full w-1/2 flex items-center justify-center'>
            <ImageCard caption='Me on the beach' imageUrl='/myImage.jpg'/>
            
          </div>
        </div>
      </main>

      <div className='w-full border-2 border-black' />

      <main className='flex justify-center items-center bg-brutalistPurple w-full h-svh'>
        <div className='w-full h-[95%] mx-8 bg-brutalistLightPurple'></div>
      </main>
    </>
  );
}
