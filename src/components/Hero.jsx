import React from 'react'
import bg from '../assets/bg1.jpg'
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <div style={{
            height: '600px',
            backgroundImage: `url(${bg})`,
            overlay: '#111111',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
        }}
            className='relative z-10'>
            <div className='absolute inset-0 bg-black opacity-35'></div>
            <div className='relative max-w-7xl mx-auto'>
                <div className='flex lg-h-[650px] justify-center items-center lg:pt-0 pt-20'>
                    <div className='flex flex-col space-y-8 justify-center items-center text-center
                    px-5 md:px-0'>
                        <motion.h3
                         initial={{opacity:0, x:-100}}
                         whileInView={{opacity:1, x:0}}
                         transition={{duration:1, delay:0.5}}
                        className='text-white text-lg lg:text-xl'>B18 Villanyszerelő Bt.</motion.h3>
                        <motion.h1
                         initial={{opacity:0, x:-100}}
                         whileInView={{opacity:1, x:0}}
                         transition={{duration:1, delay:0.9}}
                         className='text-4xl text-white lg:text-6xl font-bold'>Lépj be a digitális térbe <br /> <span className='text-[#ffbf00]'> és merülj el!</span></motion.h1>
                        <motion.p 
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:1.5}}
                        className='text-sm text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dignissimos omnis dicta nobis saepe magnam libero earum eveniet tempore? Ut?</motion.p>
                        <div></div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Hero