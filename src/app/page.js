// "use client";
import Product from '@/components/Product';
import logo from '/public/logo.svg';
import MainHero from '@/components/MainHero';
import Documentation from '@/components/Documentation';

export default function Home() {
  return (
    <>
    <MainHero></MainHero>
    <Product></Product>
    <Documentation></Documentation>
    </>
    
  )
}
