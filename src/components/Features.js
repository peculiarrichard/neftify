import React from 'react'
import Image from 'next/image'

const Features = ({icon1, icon2, icon3, icon4, title1, title2, title3, title4, para1, para2, para3, para4}) => {
  return (
    <>
        <div className='mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-x-8 lg:gap-y-10 mt-20 mb-10 h-full'>
            <div className='flex flex-col items-start gap-4'>
                <Image src={icon1} alt={title1} className='p-3 w-[2.8rem] rounded-xl bg-blue-200'></Image>
                <h3 className='text-gray-800 leading-8 font-semibold text-lg'>{title1}</h3>
                <p className='text-gray-700 leading-6 text-base'>{para1}</p>
            </div>
            <div className='flex flex-col  items-start gap-4'>
                <Image src={icon2} alt={title2} className='p-3 w-[2.8rem] rounded-xl bg-blue-200'></Image>
                <h3 className='text-gray-800 leading-8 font-semibold text-lg'>{title2}</h3>
                <p className='text-gray-700 leading-6 text-base'>{para2}</p>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <Image src={icon3} alt={title3} className='p-3 w-[2.8rem] rounded-xl bg-blue-200'></Image>
                <h3 className='text-gray-800 leading-8 font-semibold text-lg'>{title3}</h3>
                <p className='text-gray-700 leading-6 text-base'>{para3}</p>
            </div>
            <div className='flex flex-col items-start gap-4'>
                <Image src={icon4} alt={title4} className='p-3 w-[2.8rem] rounded-xl bg-blue-200'></Image>
                <h3 className='text-gray-800 leading-8 font-semibold text-lg'>{title4}</h3>
                <p className='text-gray-700 leading-6 text-base'>{para4}</p>
            </div>
        </div>
    </>
  )
}

export default Features