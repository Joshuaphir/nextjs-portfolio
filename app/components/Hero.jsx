"use client"
import React from 'react'
import Image from 'next/image'
import HeroImage from '@/app/images/HeroImage1.png'
import { TypeAnimation } from 'react-type-animation';
import BlockchainIcon from './BlockchainIcon';
import AnimatedCybersecurityIcon from './animationComponents/AnimatedCybersecurityIcon';
import RotatingGlobalIcon from './animationComponents/RotatingGlobalIcon';
import PulsingNetworkingIcon from './animationComponents/PulsingNetworkingIcon';
import ComputerIcon from './ComputerIcon';

const Hero = () => {
  return (
    <section className='py-4'>
      <div className='grid grid-cols-1 sm:grid-cols-12 P-4'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-semiboldbold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'> Hi, I'm {""}</span>
            <TypeAnimation
              sequence={[
                'Joshua',
                1000, 
                'Web developer',
                1000,
                'Software Engineer',
                1000,
                'Data Scientist',
                1000,
                'Cybersec Specialist',
                1000,
                'network Engineer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-gray-300 text-base sm:text-lg mb-6 lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore corporis, debitis unde dolores deserunt magnam fuga nostrum mollitia 
              eveniet expedita hic eaque quisquam dicta repudiandae aliquid. Unde, distinctio veniam!
          </p>
          <div>
            <button className='px-6 w-full sm:w-fit py-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500-600 to-pink-500 hover:bg-slate-200 font-bold text-white mr-3'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-gray-100 mt-3 hover:bg-slate-200 text-gray-50 hover:text-gray-800 font-bold '>
              <span className='block bg-[#2E5077] hover:bg-slate-300 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        <div className='hidden sm:block col-span-5 place-self-center mt-4 md:mt-0 md:ml-3'>
          <div className='rounded-full bg-[#3B608D] md:bg-transparent lg:w-[500px] h-[310px] w-[310px]  lg:h-[400px] relative'>
            <Image
              src={HeroImage}
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />  
            <div className='hidden absolute top-0 left-0 z-10 md:block'>
              <AnimatedCybersecurityIcon />
            </div>
            <div className='hidden absolute top-10 left-9 md:block'>
              <PulsingNetworkingIcon />
            </div>
            <div className='hidden absolute top-0 right-0 md:block'>
              <PulsingNetworkingIcon />
            </div>
            <div className='hidden absolute bottom-7 left-28 md:block'>
              <RotatingGlobalIcon />
            </div>
            <div className='hidden absolute bottom-0 right-10 md:block'>
              <RotatingGlobalIcon />
            </div>
            <div className='hidden absolute top-10 right-20 md:block'>
              <RotatingGlobalIcon />
            </div>
            <div className='hidden absolute bottom-20 -left-24 md:block'>
              <ComputerIcon />
            </div>
            <div className='hidden absolute -top-3 left-64 md:block'>
              <BlockchainIcon />
            </div>
            <div className='hidden absolute bottom-24 left-24 md:block'>
              <PulsingNetworkingIcon />
            </div>
            <div className='hidden absolute bottom-16 -right-8 md:block'>
              <ComputerIcon />
            </div>
          </div>
          
        </div>
      </div>
      
        
    </section>
  )
}

export default Hero