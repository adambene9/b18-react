import React, { useState } from 'react'
import AboutImg from '../assets/AboutImg.jpg'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const About = () => {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div className='bg-gray-950 py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-7 items-center'>
                <div className='md:w-1/2 space-y-5'>
                    <h1 className='font-bold text-4xl text-[#ffbf00]'>Rólunk</h1>
                    <p className='text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, fugiat eos voluptate ullam itaque in dolorem fugit minus, aliquam omnis libero placeat iusto, blanditiis ab! Quasi incidunt hic iure illum minus deserunt dolor dolorem magnam mollitia maiores quam placeat officiis tempora, itaque delectus! Voluptatum debitis illum culpa voluptatem nulla eaque.
                    </p>
                    <p className='text-gray-300'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, fugit corrupti recusandae laudantium voluptas nihil vero nostrum debitis culpa minima?
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <img src={AboutImg} alt="" className='rounded-lg' />
                </div>
            </div>
            <div className='mt-4'>
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className='flex gap-10'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#ffbf00]'>
                                {
                                    counterOn && <CountUp start={0} end={120} duration={2} delay={0} />
                                }
                                +
                            </h1>
                            <h3 className='text-sm text-gray-300'>Elégedett ügyfél</h3>  
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#ffbf00]'>
                                {
                                    counterOn && <CountUp start={0} end={200} duration={2} delay={0} />
                                }
                                +
                            </h1>
                            <h3 className='text-sm text-gray-300'>Sikeres Projekt</h3>    
                        </div>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='font-bold text-3xl md:text-4xl text-[#ffbf00]'>
                                {
                                    counterOn && <CountUp start={0} end={100} duration={2} delay={0} />
                                }
                                %
                                
                            </h1>
                            <h3 className='text-sm text-gray-300'>Elégedetség</h3>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    </div>
  )
}

export default About