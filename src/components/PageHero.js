import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PageHero = ({icon, title, bigTitle, paragraph, button, buttonLink, heroImg1, heroImg2 }) => {
  return (
    <>
        {/* <section className='relative overflow-x-hidden pb-20'>
        <div className=' absolute z-0 bg-gradient-to-r from-white to-[#BBB7FF] top-0 left-0 h-full w-full lg:w-3/4 border rounded-bl-[3.75rem] lg:rounded-bl-none rounded-br-[500px]'>
        </div> */}
        <div className='relative w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between mt-20 px-2' data-aos='fade-up'>
            <div className=' flex flex-col justify-between w-full lg:w-1/2'>
                <div className='flex gap-2 justify-start items-center'>
                    <Image src ={icon} alt='icon'></Image>
                    <p className='text-gray-700 font-semibold'>{title}</p>
                </div>
                <h2 className=' text-4xl md:text-6xl font-bold tracking-tight text-gray-800 mt-6'>{bigTitle}</h2>
                <p className='text-base text-gray-700 md:text-xl xl:text-xl mt-6 text-justify'>{paragraph}</p>
                <Link href={buttonLink} className='mt-6 self-start px-5 py-3 border text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700'>
                    <button>{button}</button>
                </Link>
            </div>
            <div className=' w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 lg:justify-end'>
                <Image src ={heroImg1} alt='heroImg' className='relative w-full md:w-[70%] lg:w-[90%] xl:w-[80%]' data-aos ='fade-up'></Image>
                <Image src ={heroImg2} alt='heroImg' className='absolute w-[50%] sm:w-[50%] lg:w-[28%] self-center justify-self-center' data-aos ='fade-up'></Image>
            </div>
        </div>
        {/* </section> */}
    </>
  )
}

export default PageHero