'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section>
        <div className="lg:max-w-5xl mx-auto lg:min-h-[300px] lg:mt-10 mt-14 md:px-24 lg:px-0 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
                animate={{ opacity: 1, y: 0 }} // End at full opacity and original position
                transition={{ duration: 0.5 }} // Duration of the animation
            >
                <h1 className="lg:text-5xl text-3xl text-center lg:px-16 font-bold font-raleway px-2">
                  
                    <br/>
                    Take charge of your winning potential by joining exciting 
                   <span className='text-[#09FF22] ml-5'>
                   Games
                   </span>
                   <br/>
                   <span className='text-2xl'>Earn in crypto and control the outcome to maximize your rewards. Participate now and win big!
                   </span>
                </h1>
                <div className='flex justify-center items-center pt-6'>
                <Link href={'#'} className='py-5 px-20 border border-white rounded-lg hover:bg-[#191919] hover:text-[#09FF22] hover:border-[#09FF22]'>
                    PLAY
                </Link>
                </div>
            </motion.div>
        </div>
        </section>
    );
}
