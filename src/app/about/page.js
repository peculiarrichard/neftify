import AboutAccomplish from '@/components/AboutAccomplish'
import AboutDrive from '@/components/AboutDrive'
import AboutHero from '@/components/AboutHero'
import AboutStarted from '@/components/AboutStarted'
import AboutStats from '@/components/AboutStats'
import AboutValues from '@/components/AboutValues'
import React from 'react'

const page = () => {
  return (
    <>
        <AboutHero></AboutHero>
        <AboutStats></AboutStats>
        <AboutStarted></AboutStarted>
        <AboutDrive></AboutDrive>
        <AboutValues></AboutValues>
        <AboutAccomplish></AboutAccomplish>
    </>
  )
}

export default page