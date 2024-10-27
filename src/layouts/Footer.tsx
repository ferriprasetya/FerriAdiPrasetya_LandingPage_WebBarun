import { socialMedia } from '@/contents/socialMedia'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FooterLayout() {
  const year = new Date().getFullYear()
  return (
    <div className='flex flex-col-reverse justify-between gap-10 bg-dark p-6 sm:p-8 md:flex-row md:p-12 lg:p-16'>
      <div className='flex flex-col justify-between gap-4'>
        <Image
          height={78}
          width={136}
          src='/logo.svg'
          alt='logo'
          className='h-20 w-fit object-contain'
        />
        <div>
          <p>&copy; {year} Triton.</p>
          <p>
            Website & Design by{' '}
            <Link
              href='https://www.linkedin.com/in/ferri-adi-prasetya'
              target='_blank'
              className='font-medium'
            >
              Ferri
            </Link>
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:gap-8'>
        <h6 className='font-rc text-xl font-bold uppercase md:text-2xl'>
          Follow Us
        </h6>
        <div className='flex flex-col gap-4 md:gap-6'>
          {socialMedia.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target='_blank'
              className='flex items-center gap-5 rounded-full text-white md:text-lg'
            >
              <item.icon className='h-6 w-6' />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-4 md:w-1/3 md:gap-8'>
        <h6 className='font-rc text-xl font-bold uppercase md:text-2xl'>
          Our Address
        </h6>
        <p className='md:text-lg'>
          North Semolowaru, Sukolilo, Surabaya, East Java, Indonesia
        </p>
      </div>
    </div>
  )
}
