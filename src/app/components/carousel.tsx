'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For additional animations

export default function CarouselSection() {
    const contents = [
        {
            image: "/images/stake (2).png",
            title: "STAKE",
            description: "User generated content is referred to as NeXa - which is derived from NFT.",
        },
        {
            image: "/images/chess.png",
            title: "PLAY",
            description: "Users are able to create unique profiles showcasing their identity, interests, and/or expertise. Users can also customize their experience through preferences, settings, or feeds around their specific niche.",
        },
        {
            image: "/images/dice.png",
            title: "WIN",
            description: "Users engage with each other's content through likes, comments, shares, or reactions.",
        },  
    ];

    // State to track the currently selected content
    const [selectedContentIndex, setSelectedContentIndex] = useState(0);
    const [animation, setAnimation] = useState(false); // State for animation

    // Effect to set animation to true after initial render
    useEffect(() => {
        setAnimation(true);
    }, []);

    // Function to handle radio button change
    const handleRadioChange = (index: number) => {
        setAnimation(false); // Reset animation state
        setSelectedContentIndex(index);
        setTimeout(() => {
            setAnimation(true); // Trigger animation after state updates
        }, 0); // Timeout to allow re-render before animation
    };

    return (
        <div className="w-full lg:max-w-5xl mx-auto lg:min-h-[500px] bg-[#181818e9] rounded-md flex flex-col lg:flex-row md:px-20 lg:px-0 overflow-hidden lg:mt-20">
            {/* Image Section */}
            <motion.div 
                className="lg:w-2/5 w-full flex flex-col justify-center items-center p-4 image-section transition-transform duration-500 ease-in-out"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={animation ? { opacity: 1, scale: 1 } : {}} // Scale up with opacity when active
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={contents[selectedContentIndex].image} 
                    alt={contents[selectedContentIndex].title} 
                    layout='intrisic'
                    width={100}
                    height={100}
                    className={`w-3/5 md:w-2/5 lg:w-full h-auto rounded-md transition-opacity duration-500 ease-in-out opacity-100 lg:ml-16 ${animation ? 'animate-slide-up' : 'opacity-0'} 
                        ${selectedContentIndex === 0 ? 'w-full max-w-full' : 'w-[110%]'} 
                        lg:w-auto lg:max-w-none`} 
                />
            </motion.div>

            {/* Content Section with Transition */}
            <motion.div
                className="lg:w-2/5  flex flex-col justify-center items-start lg:p-4 px-10 content-section"
                initial={{ opacity: 0, x: 100 }} // Start content off-screen to the right
                animate={animation ? { opacity: 1, x: 0 } : {}} // Slide in when active
                transition={{ duration: 0.6 }}
            >
                <div className={`lg:flex lg:flex-col gap-3 ml-8`}>
                    <motion.h2
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }} // Slide text up from below
                        animate={animation ? { opacity: 1, y: 0 } : {}} // Slide into place
                        transition={{ duration: 0.4 }}
                    >
                        {contents[selectedContentIndex].title}
                    </motion.h2>
                    <motion.p
                        className="text-gray-300"
                        initial={{ opacity: 0, y: 20 }} // Slide description up from below
                        animate={animation ? { opacity: 1, y: 0 } : {}} // Animate into place
                        transition={{ duration: 0.6 }}
                    >
                        {contents[selectedContentIndex].description}
                    </motion.p>
                </div>
            </motion.div>

            {/* Radio Button Section */}
            <div className="lg:w-1/5 flex lg:flex-col justify-center items-end p-4 lg:pr-10 gap-x-4 mt-3 lg:mt-0">
                {contents.map((_, index) => (
                    <motion.div 
                        key={index} 
                        className="flex items-center mb-2"
                        initial={{ opacity: 0, scale: 0.8 }} // Radio buttons scale up and fade in
                        animate={animation ? { opacity: 1, scale: 1 } : {}} // Scale up when active
                        transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay
                    >
                        <input
                            type="radio"
                            name="carousel"
                            id={`content-${index}`}
                            className="hidden" // Hide default radio button
                            checked={selectedContentIndex === index}
                            onChange={() => handleRadioChange(index)}
                        />
                        <label 
                            htmlFor={`content-${index}`} 
                            className={`cursor-pointer flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 
                                ${selectedContentIndex === index ? 'bg-[#09FF22] scale-125' : 'bg-gray-400 scale-50'} 
                                border-2 ${selectedContentIndex === index ? 'border-[#09FF22]' : 'border-gray-400'} 
                                transform`}
                        ></label>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
