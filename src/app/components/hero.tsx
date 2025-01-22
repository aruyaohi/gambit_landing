'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-8">
      <div className="lg:max-w-6xl mx-auto lg:min-h-[400px] lg:mt-10 mt-14 px-6 md:px-24 lg:px-0 overflow-hidden text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Hero Heading */}
          <h1 className="lg:text-6xl text-4xl font-bold font-raleway leading-tight tracking-tight">
            Seamlessly Buy Airtime & Data
            <br />
            <span className="text-[#2c76d1]">Using Crypto</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            The easiest and most secure way to top up your phone or data plan. 
            Fast, reliable, and crypto-friendly.
          </p>
          <div className="flex justify-center items-center mt-8">
  <Link
    href={'/connectwallet'}
    className="py-4 px-10 lg:px-16 text-lg font-semibold text-white bg-gradient-to-r from-[#2c95d1] via-[#2c76d1] to-purple-300 rounded-lg backdrop-blur-md bg-opacity-70 hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
  >
   Get Started
  </Link>
</div>

        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="absolute -top-10 -right-10 w-72 h-72 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full filter blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
}
