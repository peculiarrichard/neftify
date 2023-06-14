import React from 'react'
import Image from 'next/image'
import ConnectThumb from '/public/ConnectThumb.png'
import connecticon from '/public/connecticon.svg';
import Link from 'next/link';
import IssuingThumb from '/public/IssuingThumb.png'
import NodesThumb from '/public/NodesThumb.png'
import zkproofsThumb from '/public/zkproofsThumb.png'
import zkprooficon from '/public/zkprooficon.svg';
import nodesicon from '/public/nodesicon.svg';
import producticon from '/public/producticon.svg';

const Product = () => {
  return (
    <>
    <section className='mt-14'>
      <div className='w-[90%] mx-auto' data-aos='fade-up'>
      <div className="flex flex-col space-y-6 md:w-[40%]">
            <p className="text-lg text-indigo-500 font-mono tracking-tight uppercase">
              Products
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 tracking-tight">
              Multiple products for your business needs
            </h2>

          </div>
          </div>
        <div className='mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-x-8 lg:gap-y-10 mt-20 mb-10 h-full'>
            <Link href ='/connect' className='flex flex-col items-start justify-start gap-4 border rounded-xl px-2'>
              <div className='flex gap-2 justify-start items-center bg-blue-50 p-2 rounded-xl mt-2'>
                    <Image src ={connecticon} alt='icon'></Image>
                    <p className='text-gray-700 font-semibold text-sm'>Connect</p>
                </div>
                <p className='text-gray-700 leading-6 text-base text-left'>Prebuilt, drop-in wallet gateway optimized for conversion.</p>
                <Image className='' src={ConnectThumb}></Image>
                
            </Link>
            <Link href ='/nodes' className='flex flex-col items-start justify-start gap-4 border rounded-xl px-2'>
              <div className='flex gap-2 justify-start items-center bg-blue-50 p-2 rounded-xl mt-2'>
                    <Image src ={nodesicon} alt='icon'></Image>
                    <p className='text-gray-700 font-semibold text-sm'>Nodes</p>
                </div>
                <p className='text-gray-700 leading-6 text-base text-left'>The ultimate solution for un-compromised and scalable nodes.</p>
                <Image className='' src={NodesThumb}></Image>
                
            </Link>
            <Link href ='/issuing' className='flex flex-col items-start justify-start gap-4 border rounded-xl px-2'>
              <div className='flex gap-2 justify-start items-center bg-blue-50 p-2 rounded-xl mt-2'>
                    <Image src ={producticon} alt='icon'></Image>
                    <p className='text-gray-700 font-semibold text-sm'>Issuing</p>
                </div>
                <p className='text-gray-700 leading-6 text-base text-left'>Simplified wallet issuing process for your business.</p>
                <Image className='' src={IssuingThumb}></Image>
                
            </Link>
            <Link href ='/zkproofs' className='flex flex-col items-start justify-start gap-4 border rounded-xl px-2'>
              <div className='flex gap-2 justify-start items-center bg-blue-50 p-2 rounded-xl mt-2'>
                    <Image src ={zkprooficon} alt='icon'></Image>
                    <p className='text-gray-700 font-semibold text-sm'>ZkProofs</p>
                </div>
                <p className='text-gray-700 leading-6 text-base text-left'>Cloud computing API for zero-knowledge proof.</p>
                <Image className='' src={zkproofsThumb}></Image>
                
            </Link>
           
            
        </div>
        </section>
    </>
  )
}

export default Product