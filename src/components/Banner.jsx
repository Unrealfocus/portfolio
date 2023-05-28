import React from 'react';
import Image from 'next/image';
import image from '../assets/FB_IMG_16839742133212782-removebg-preview.png'
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../motion/variants'

const Banner = () => {
  return (
    <section className='flex  items-center' id="home">
      <div className="container mx-auto ">
        <div className='flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='text-[30px] font-bold leading-[0.8]
            lg:text-[50px]
            ' 
            >DANIEL <span>DESIGNER</span></motion.h1>
          <motion.div  
           variants={fadeIn('up',0.4)}d
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className='mb-6 text-[30px] lg:text-[40px]
          font-secondary font-semibold uppercase leading-[1]
          '>
            <span className='text-center mr-4'>I am a</span>
            <TypeAnimation
            sequence={['Developer',
            2000,
            'Forex Trader',
             2000,
            'Crypto Trader',
             2000
          ]}
          speed={20}
          className='text-accent'
          repeat={Infinity}
            />
          </motion.div>
          <motion.p
           variants={fadeIn('up',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0' 
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit commodi, sapiente laboriosam nisi accusamus repellat nihil, exercitationem neque veniam ad? Exercitationem assumenda quaerat perspiciatis
             aliquid maxime nulla temporibus molestias!</motion.p>
             <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.7}}
             className='flex max-w-max gap-x-6 items-center
             mb-12 mx-auto lg:mx-0
             '>
              <button className="btn btn-lg">contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio 
              </a>
             </motion.div>
             <motion.div 
              variants={fadeIn('up',0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.5}}
             className="flex text-[20px] gap-x-6 max-w-max mx-auto
             lg:mx-0
             ">
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaDribbble/></a>
             </motion.div>
        </div>
          <motion.div 
           variants={fadeIn('left',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
           className='flex-1 h-auto'>
            <Image src={image} alt="my image" className='rounded-full' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
