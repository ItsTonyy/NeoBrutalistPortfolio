'use client'

import { Fragment } from 'react';
import Image from 'next/image';
import ImageCard from '@/components/ui/image-card';
import { ColourfulText } from '@/components/ui/colorful-text';
import { Star, Moon } from 'coolshapes-react';

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
          <a
            href='#aboutMe'
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105'
          >
            About Me
          </a>
          <a
            href='#projects'
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105'
          >
            Projects
          </a>
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

      {/*First Hero*/}
      <main id='main' className='flex justify-center items-center bg-brutalistBlue w-full h-dvh px-2'>
        <div className='flex flew-row w-full h-[90%] mx-8'>
          <div className='h-full w-1/2 flex items-center justify-center flex-col'>
            <div className='h-[50%] w-full flex flex-col justify-center pl-12'>
              <h2 className='text-2xl mb-2'>Hi, my name is</h2>
              <h1 className='text-6xl font-semibold mb-2'>Tony Terra Nova.</h1>
              <h1 className='text-6xl font-semibold'>And I <ColourfulText text='build things'/> for the web.</h1>
              <p className='mt-4 text-xl font-medium text-zinc-800'>I&apos;m a software engineer specializing in building
               (and occasionally designing) digital experiences. Currently, I&apos;m seeking my first
                opportunity in software engineering, specializing in web development.
              </p>
              
            </div>
          </div>
          <div className='h-full w-1/2 flex items-center justify-center'>
            <ImageCard imageUrl='/myImage.jpg'/>
            <Star noise={true} index={4} size={150} className='absolute top-52 right-40'/>
          </div>
        </div>
      </main>

      <div className='w-full border-[3px] border-black' />


      {/*Second Hero (About Me)*/}
      <section id='aboutMe' className='flex justify-center items-center bg-brutalistPurple w-full h-dvh px-2'>
        <div className='w-full h-[90%] mx-8 bg-purple-500/30'>
          <h1 className='text-5xl font-bold mb-2'>About Me</h1>
        </div>
      </section>

      <div className='w-full border-[3px] border-black' />

      {/*Second Hero (Projects)*/}
      <section id='projects' className='flex justify-center items-center bg-brutalistYellow w-full h-dvh px-2'>
        <div className='w-full h-[90%] mx-8 bg-yellow-500/30'>
          <h1 className='text-5xl font-bold mb-2'>Projects</h1>
        </div>
      </section>
    </>
  );
}
