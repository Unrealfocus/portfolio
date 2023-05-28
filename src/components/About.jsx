import React from 'react';
// import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '@/motion/variants';

const About = () => {
const [ref,inView] = useInView({
  threshold:0.5
});

  return(  
  <section id="about" className='section' ref={ref} >
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-[142vh]'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top 
        "></motion.div>
         <motion.div
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
         className='flex-1 '>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h2 mb-4'> I'm a freelancer UX/Ui designer with about 5 years of experience.</h3>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis modi? Eius, necessitatibus sint. Delectus tenetur in reiciendis repellat itaque corporis excepturi rerum quibusdam aspernatur
             sunt. Vitae deserunt natus omnis.</p> 

             <div className='flex gap-x-8 items-center'>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
             </div>
         </motion.div>
      </div>
    </div>
     
  </section>);
};

export default About;
