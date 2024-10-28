import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <div
      id='about'
      className='bg-white px-6 pb-16 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pt-36'
    >
      <div className='relative mx-auto w-fit'>
        <h3 className='font-rc text-6xl font-bold uppercase text-primary lg:text-7xl'>
          About Us
        </h3>
        <Image
          height={80}
          width={200}
          src='/images/about/highlight.svg'
          alt='highlight'
          className='absolute right-0 top-0 h-16 w-fit -translate-y-1/2 translate-x-2/3 transform object-contain md:h-20 xl:h-24'
        />
      </div>

      <div className='flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between'>
        <div className='relative mr-auto mt-[16%] w-3/4 sm:w-1/2 md:mt-0 md:w-1/3'>
          <Image
            height={200}
            width={200}
            src='/images/about/boat2.webp'
            alt='boat'
            className='relative z-10 h-fit w-full'
          />
          <Image
            height={200}
            width={200}
            src='/images/about/img-ornament.svg'
            alt='ornament'
            className='absolute left-0 top-0 w-3/5 -translate-x-1/3 -translate-y-1/3 transform'
          />
        </div>
        <p className='max-w-3xl flex-1 text-center tracking-widest text-dark md:text-left md:text-xl lg:text-2xl xl:text-3xl'>
          <span className='font-semibold text-secondary'>Triton</span> is a
          pioneering RoboBoat team dedicated to pushing the boundaries of marine
          technology. Our team is composed of passionate engineers, scientists,
          and innovators who share a common vision of harnessing the power of
          robotics to explore and protect the oceans. We strive to create
          innovative solutions that address pressing challenges in marine
          science and engineering.
        </p>
      </div>
    </div>
  )
}
