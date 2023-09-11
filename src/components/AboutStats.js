import React from 'react'

const AboutStats = () => {
  return (
    <>
        <section className='w-[90%] mx-auto max-w-7xl text-center'>
            <p className='font-mono uppercase text-lg text-indigo-500 tracking-tight' data-aos ='fade-up'>About_us</p>
            <h1 className='mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900' data-aos ="fade-up">Hi there, we are Neftify.</h1>
            <h2 className='mt-4 text-md md:text-3xl text-slate-500 max-w-4xl mx-auto' data-aos = "fade-up" data-aos-delay = '50'>We solve blockchain infrastructure for developers and companies so they can focus on solving problems for their customers.</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-10 mb-8 gap-0.5'>
                <div className='flex flex-col mt-2'>
                    <p className='text-sm font-semibold leading-6 text-gray-600'>Year Founded</p>
                    <h1 className='text-2xl md:text-6xl font-bold tracking-tight text-gray-900'>2022</h1>
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='text-sm font-semibold leading-6 text-gray-600'>Capital Raised</p>
                    <h1 className='text-2xl md:text-6xl font-bold tracking-tight text-gray-900'>$1.5M+</h1>
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='text-sm font-semibold leading-6 text-gray-600'>Customer Revenue</p>
                    <h1 className='text-2xl md:text-6xl font-bold tracking-tight text-gray-900'>2M+</h1>
                </div>
                <div className='flex flex-col mt-2'>
                    <p className='text-sm font-semibold leading-6 text-gray-600'>Industry Experience</p>
                    <h1 className='text-2xl md:text-6xl font-bold tracking-tight text-gray-900'>25+yrs</h1>
                </div>
            </div>
            
        </section>
         <div className="headerer ">
        </div>
    </>
  )
}

export default AboutStats