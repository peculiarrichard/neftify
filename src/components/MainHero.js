import React from 'react'
import wireframe from '/public/wireframe.png';
import modal from '/public/modal.png';
import Link from 'next/link';
import Image from 'next/image';

const MainHero = () => {
  return (
    <>
        <section className='relative overflow-x-hidden pb-20'>
        <div className=' absolute z-0 bg-gradient-to-r from-white to-[#BBB7FF] top-0 left-0 h-full w-full lg:w-3/4 border rounded-bl-[3.75rem] lg:rounded-bl-none rounded-br-[500px]'>
        </div>
        <div className='relative w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between mt-20 px-2' data-aos='fade-up'>
            <div className=' flex flex-col justify-between w-full lg:w-1/2'>
                <h2 className=' text-4xl md:text-8xl font-bold tracking-tight text-gray-800 mt-6'>The gateway to blockchain infrastructure.</h2>
                <p className='text-base text-gray-700 md:text-xl xl:text-xl mt-6 text-justify'>We provide web3 infrastructure solutions for companies of all sizes with our set of tools and APIs.</p>
                <Link href='/register' className='mt-6 self-start px-5 py-3 border text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700'>
                    <button>Get Started</button>
                </Link>
            </div>
            <div className=' w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 lg:justify-end'>
                <Image src ={wireframe} className='relative w-full md:w-[70%] lg:w-[90%] xl:w-[80%]' data-aos ='fade-up'></Image>
                <Image src ={modal} className='absolute w-[50%] sm:w-[50%] lg:w-[28%] self-center justify-self-center' data-aos ='fade-up'></Image>
            </div>
        </div>
        </section>
    </>
  )
}

export default MainHero