import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '@/motion/variants';
const services = [
  {
    name:'UI/UX Design',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit quam voluptate officiis temporibus, vero odit eius quidem libero nihil maiores officia? Consequatur aliquid officia dolorem', 
    link:'Learn more', 
  },
  {
    name:'Discord Manager',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit quam voluptate officiis temporibus, vero odit eius quidem libero nihil maiores officia? Consequatur aliquid officia dolorem', 
    link:'Learn more', 
  },
  {
    name:'Forex Trader',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit quam voluptate officiis temporibus, vero odit eius quidem libero nihil maiores officia? Consequatur aliquid officia dolorem', 
    link:'Learn more', 
  },
]

const Services = () => {
  return (
    <section id="services" className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
           variants={fadeIn('right',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-contain bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0
          '>
            <h2 className="h2 text-accent mb-6">
               What I Do
            </h2>
            <h3 className="h3 max-w-[455px]">
              I'm a freelance UI/UX Designer and Discord manger with 5years of experience. 
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}
          className='flex-1'>
            <div>
              {services.map((services,index)=>{
                const {name,description,link}=services;
                return (
                  <div className="border-b border-white/20 
                  h-[170px] mb-[38px] flex
                  " key={index}>
                      <div className="max-w-[476px]">
                        <h4 className="tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight">
                          {description}
                        </p>
                      </div>
                      <div>
                        <div className="flex flex-col flex-1 items-end">
                          <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center 
                          itemss-center">
                            <BsArrowUpRight/>
                          </a>
                          <a href="#" className="text-gradient  text-sm">
                            {link}
                          </a>
                        </div>
                      </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
