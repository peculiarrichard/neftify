import Link from 'next/link'
import React from 'react'

const Started = () => {
  return (
    <>
    <section className='mx-auto w-[90%] bg-[#0F101B] rounded-3xl' data-aos='fade-up'> 
        <div className='flex flex-col items-center justify-center text-center xl:w-3/5 mx-auto py-16 md:py-20 my-16 px-8 sm:px-0'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Ready to get started?</h2>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Get in touch or create an account</h2>
            <p className='mt-4 text-lg leading-6 text-gray-200'>Create an account and start integrating crypto wallets to your application. <br></br> Or, contact us to design a custom package for your business.</p>
            <Link href='/signup' className='mt-6 px-5 py-3 border text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-200'>
                <button>Get Started</button>
            </Link>
        </div>
        </section>
    </>
  )
}

export default Started