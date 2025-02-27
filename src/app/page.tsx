import { Fragment } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center flex-row py-5 px-8'>
        <div>
          <h1 className='font-archivo text-3xl font-semibold select-none'>
            Tony Terra Nova
          </h1>
        </div>

        <div className='flex flex-row gap-10'>
          <h3
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105 '
          >
            About Me
          </h3>
          <h3
            className='text-lg transform transition-transform duration-100 hover:font-medium hover:underline
           hover:cursor-pointer hover:scale-105 '
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
    </>
  );
}
