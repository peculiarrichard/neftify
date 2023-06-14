import React from 'react'
import PageHero from '@/components/PageHero';
import connecticon from '/public/connecticon.svg';
import wireframe from '/public/wireframe.png';
import modal from '/public/modal.png';
import Features from '@/components/Features';
import optimized from '/public/optimized.svg';
import customizable from '/public/customizable.svg';
import newmarkets from '/public/newmarkets.svg';
import frameworkagnostic from '/public/frameworkagnostic.svg';
import Started from '@/components/Started';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import QuickSetup from '@/components/QuickSetup';
import Studio from '@/components/Studio';

const page = () => {
  const faqData = [
    {
      question: 'What is Neftify?',
      answer: 'A blockchain node is a computer that connects to a blockchain network and stores a copy of the entire blockchain ledger.'
    },
    {
      question: 'What is Neftify?',
      answer: 'Neftify is a platform for connecting your crypto wallet to your website.'
    }
  ]
  return (
   <>
    <section className='relative overflow-x-hidden pb-20'>
        <div className=' absolute z-0 bg-gradient-to-r from-white to-[#BBB7FF] top-0 left-0 h-full w-full lg:w-3/4 border rounded-bl-[3.75rem] lg:rounded-bl-none rounded-br-[500px]'>
        </div>
      <PageHero
        title="Connect"
        icon={connecticon}
        bigTitle='The easiest way to connect a crypto wallet.'
        paragraph='Neftify Connect is a prebuilt, drop-in wallet gateway optimized for conversion. Connect, sign in, and sign up your users from their web3 wallet easily and securely.'
        button='Get started'
        buttonLink='/register'
        heroImg1={wireframe}
        heroImg2={modal}
      ></PageHero>
      </section>
      <Features
      icon1={customizable}
      icon2={optimized}
      icon3={newmarkets}
      icon4={frameworkagnostic}
      title1='Customizable by design'
      title2='Optimized for conversion'
      title3='Unlock new markets'
      title4='Framework agnostic'
      para1='Use pre-defined themes or customize specific elements to match the look and feel of your site.'
      para2='Save development time and eliminate user confusion with built-in, error messages, state management, connection details, and more.'
      para3='Reach more users with more than 18 supported chains through a single integration. Easily manage connection methods from the Dashboard.'
      para4='Support all your favorite frameworks. Or plain Javascript, for rapid prototyping and flexible integration.'
      ></Features>
      <Started></Started>
      <Pricing></Pricing>
      <Faq questions={faqData}></Faq>
      <QuickSetup></QuickSetup>
      <Studio></Studio>
      <Footer></Footer>
   </>
  )
}

export default page