import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '@/motion/variants';
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import Image from 'next/image';

const Work = () => {
  return(
  <section id="work" >
    <div className="container mx-auto">
       <div className='flex flex-col lg:flex-row gap-x-10'>
         <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
         className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest <br/>
              Work
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum, dolor sit amet 
              consectetur adipisicing elit. Minus itaque odio temporibus modi explicabo, molestiae perspiciatis. Nulla, eveniet id expedita laudantium quod illum mollitia 
              odio doloremque? Perferendis libero aliquid unde!
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl
          '>
            <div></div>
            <Image src={img1} alt="first image"
            className='group-hover:scale-125
            transition-all duration-500'
            />
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50
            text-gradient
            '>UI/UX Design</div>
            <div  className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-500 z-50
            '>
              <span>Project Title</span>
            </div>
          </div>
         </motion.div>
         <motion.div
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
         className='flex-1 flex flex-col gap-y-10'>
         <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl
          '>
            <div></div>
            <Image src={img2} alt="first image"
            className='group-hover:scale-125
            transition-all duration-500'
            />
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50
            text-gradient
            '>UI/UX Design</div>
            <div  className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-500 z-50
            '>
              <span>Project Title</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2
          border-white/50 rounded-xl
          '>
            <div></div>
            <Image src={img3} alt="first image"
            className='group-hover:scale-125
            transition-all duration-500'
            />
            <div className='absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50
            text-gradient
            '>UI/UX Design</div>
            <div  className='absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-500 z-50
            '>
              <span>Project Title</span>
            </div>
          </div>
          </motion.div>  
       </div>
    </div>
  </section>
  ); 
};

export default Work;
