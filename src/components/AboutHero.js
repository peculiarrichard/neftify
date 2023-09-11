import React from 'react'

const AboutHero = () => {
  return (
    <>
        <section className='bg-abouthero bg-no-repeat bg-center relative overflow-hidden bg-[#171225] mb-20'>
            <div className='top-0 left-0 w-full h-28 bg-gradient-to-b from-fuchsia-800 to-transparent opacity-10'></div>
            <div className='mx-auto max-w-7xl pt-12 pb-52 relative'>
              <div className='flex flex-col items-center md:max-w-3xl mx-auto'>
                <p className='uppercase text-[#77EFFF] font-mono' data-aos ="fade-up">Welcome_to_Neftify</p>
                <h1 className='text-4xl tracking-tight text-center font-bold text-white md:text-7xl' data-aos = "fade-up" data-aos-delay="100">The gateway between the internet and blockchain</h1>
              </div>
              </div>
              <svg class="-bottom-[2px] left-0 absolute w-full" viewBox="0 0 1511 207" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M691.616 195.752c41.042 10.329 91.607 10.329 132.649 0L1452.68 37.604c27.42-6.902 47.81-17.715 58.32-30.295v199.189H0V0c7.934 15.66 30.596 29.398 63.206 37.605l628.41 158.147Z" fill="#fff"></path></svg>
            
        </section>
    </>
  )
}

export default AboutHero