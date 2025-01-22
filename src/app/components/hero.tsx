// 'use client';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Hero() {
//     return (
//         <section>
//         <div className="lg:max-w-5xl mx-auto lg:min-h-[300px] lg:mt-10 mt-14 md:px-24 lg:px-0 overflow-hidden">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
//                 animate={{ opacity: 1, y: 0 }} // End at full opacity and original position
//                 transition={{ duration: 0.5 }} // Duration of the animation
//             >
//                 <h1 className="lg:text-5xl text-3xl text-center lg:px-16 font-bold font-raleway px-2">
                  
//                     <br/>
//                    Buy Airtime and Data with crypto
//                    <br/>
//                    <span className='text-2xl'>Purchasing of Airtime and Data made easy!
//                    </span>
//                 </h1>
//                 <div className='flex justify-center items-center pt-6'>
//                 <Link href={'#'} className='py-5 px-20 border border-white rounded-lg hover:bg-[#191919] hover:text-[#2c76d1] hover:border-[#2c76d1]'>
//                 $ Purchase
//                 </Link>
//                 </div>
//             </motion.div>
//         </div>
//         </section>
//     );
// }


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
                    {/* Logos Section */}
                    <div className="flex justify-center space-x-8 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/MTN_Group_logo.svg"
                            alt="MTN"
                            className="h-10"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Airtel_logo_2018.svg/800px-Airtel_logo_2018.svg.png"
                            alt="Airtel"
                            className="h-10"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Glo_logo.svg/1024px-Glo_logo.svg.png"
                            alt="Glo"
                            className="h-10"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Etisalat_logo_2019.svg/1024px-Etisalat_logo_2019.svg.png"
                            alt="Etisalat"
                            className="h-10"
                        />
                    </div>

                    <h1 className="lg:text-5xl text-3xl text-center lg:px-16 font-bold font-raleway px-2">
                        <br />
                        Buy Airtime and Data with crypto
                        <br />
                        <span className='text-2xl'>
                            Purchasing of Airtime and Data made easy!
                        </span>
                    </h1>

                    <div className='flex justify-center items-center pt-6'>
                        <Link href={'/connectwallet'} className='py-5 px-20 border border-white rounded-lg hover:bg-[#191919] hover:text-[#2c76d1] hover:border-[#2c76d1]'>
                            $ Purchase
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
