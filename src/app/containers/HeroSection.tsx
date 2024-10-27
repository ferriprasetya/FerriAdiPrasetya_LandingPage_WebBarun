import { achievements } from '@/contents/hero-section'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='py-[10%]'>
      <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-8 md:w-1/2'>
          <div className='flex flex-col gap-1'>
            <h3 className='font-caveat text-4xl font-bold lg:text-5xl xl:text-7xl'>
              Hello World!
            </h3>
            <div className='relative flex w-fit gap-4 font-rc text-5xl font-bold uppercase md:gap-8 lg:text-6xl xl:text-8xl'>
              <Image
                height={80}
                width={200}
                src='/images/hero-section/arrow.svg'
                alt='arrow'
                className='absolute -right-10 top-0 h-12 w-fit -translate-y-1/2 transform object-contain lg:h-14 xl:h-20'
              />
              <h1 className='whitespace-nowrap'>We Are</h1>
              <h1 className='relative z-10 bg-secondary px-2 font-extrabold italic md:px-3'>
                Triton
              </h1>
            </div>
          </div>
          <p className='text-xl lg:text-2xl'>
            Conquering the waves, one race one win. Our team is dedicated to
            pushing the boundaries of marine technology and achieving excellence
            in RoboBoat competitions.
          </p>
        </div>
        <div className='relative hidden flex-1 md:block'>
          <Image
            height={200}
            width={200}
            src='/images/hero-section/square-ornament.svg'
            alt='boat'
            className='absolute right-0 top-0 w-2/3 max-w-sm -translate-y-[20%] translate-x-1/2 transform object-contain md:w-4/5 lg:w-2/3'
          />
          <Image
            height={200}
            width={200}
            src='/images/hero-section/boat.webp'
            alt='boat'
            className='relative z-10 -mr-6 ml-auto w-2/3 max-w-sm object-contain sm:-mr-8 md:mr-0 md:w-4/5 lg:w-2/3'
          />
        </div>
      </div>

      <div className='mt-20 flex justify-between gap-4'>
        <div className='flex w-1/4 flex-col gap-4 sm:gap-8 md:w-1/2 md:flex-row md:items-end xl:pt-0'>
          {achievements.map((achievement, index) => (
            <div
              key={`${achievement.name}-${index}`}
              className='flex flex-col justify-center gap-1 md:items-center'
            >
              <p className='font-rc text-4xl font-bold uppercase italic text-secondary md:text-5xl lg:text-6xl xl:text-7xl'>
                {achievement.value}
              </p>
              <p className='text-xl md:text-center lg:text-2xl'>
                {achievement.name}
              </p>
            </div>
          ))}
        </div>

        <div className='relative flex-1 md:hidden'>
          <Image
            height={200}
            width={200}
            src='/images/hero-section/square-ornament.svg'
            alt='boat'
            className='absolute right-0 top-0 w-2/3 max-w-sm -translate-y-[20%] translate-x-1/2 transform object-contain md:w-4/5 lg:w-2/3'
          />
          <Image
            height={200}
            width={200}
            src='/images/hero-section/boat.webp'
            alt='boat'
            className='relative z-10 -mr-6 ml-auto w-2/3 max-w-sm object-contain sm:-mr-8 md:mr-0 md:w-4/5 lg:w-2/3'
          />
        </div>
      </div>
    </div>
  )
}
