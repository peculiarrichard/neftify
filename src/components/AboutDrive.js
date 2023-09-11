import React from 'react'

const AboutDrive = () => {
  return (
    <>
        <section className='bg-[#171225] mt-[-5vw] pt-32'>
            <div className='w-[90%] mx-auto max-w-7xl'>
                <p className='font-mono uppercase text-lg text-cyan-300 tracking-tight mt-2' data-aos = 'fade-up' >What_drives_us?</p>
                <div className='flex flex-col lg:flex-row justify-between  gap-5'>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl md:text-3xl tracking-tight text-white font-bold'>Mission</h3>
                        <p className='text-slate-500 text-base md:text-lg mt-3'>Our mission is to empower businesses and individuals with secure, and easy onboarding to the new financial system. We are dedicated to fostering innovation, collaboration, and trust within the industry while contributing to the widespread adoption of blockchain technology.</p>
                    </div>
                     <div className='flex flex-col'>
                        <h3 className='text-2xl md:text-3xl tracking-tight text-white font-bold'>Vision</h3>
                        <p className='text-slate-500 text-base md:text-lg mt-3'>Our vision is to become the global leader in blockchain infrastructure, driving the transformation of industries through decentralized, transparent, and secure technology. We believe that passionate communities, can change the world for the better.</p>
                    </div>
                </div>
            </div>

            <div className="head">
        </div>
        </section>
    </>
  )
}

export default AboutDrive