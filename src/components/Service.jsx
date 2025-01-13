import React from 'react'
import service from '../assets/service.png'
import {motion} from "framer-motion"

const Service = () => {
    const serviceJson = [
        {
            "name": "Villany",
            "description": "Új és régi épületek villanyszerelése",
            "icon": service,
        },
        {
            "name": "Villany",
            "description": "Új és régi épületek villanyszerelése",
            "icon": service,
        },
        {
            "name": "Villany",
            "description": "Új és régi épületek villanyszerelése",
            "icon": service,
        },
        {
            "name": "Villany",
            "description": "Új és régi épületek villanyszerelése",
            "icon": service,
        },
    ]
  return (
    <div className='bg-gray-900 pt-10 pb-20 px-5 md:px-0'>
        <div className='max-w-7xxl mx-auto'>
            <h1 className='text-center font-bold text-4xl pb-12 text-[#ffbf00]'>Szolgáltatások</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    serviceJson.map((item) => {
                        return <motion.div 
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1, delay:0.2}}
                        className='relative'>
                                <div className='absolute -inset-0 blur bg-[#ffbf00]'></div>
                                <div className='border rounded-md relative flex flex-col space-y-3 bg-[#ffd24d] hover:bg-[#ffbf00] hover:transition-all p-7'>
                                    <img src={item.icon} alt="" className='w-20 rounded-full' />
                                    <h3 className='font-semibold text-xl text-center'>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                </motion.div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Service