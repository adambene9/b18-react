import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {motion} from 'framer-motion'
import { delay } from 'motion'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const NavHandler = ()=> {
        setOpen(!open)
            if(open){
            document.body.style.overflow = 'unset';
        }else{
            document.body.style.oveflow = 'hidden'
        }
    }
  return (
    <div>
        <div className='bg-gray-900 py-3'>
            <motion.div
            initial={{opacity:0, y:-30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, delay:0.2}}
            className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center px-5'>
                        { /* Logo */}
                    <div className='font-bold text-[#ffbf00] text-4xl'>
                        B18
                    </div>
                { /* Logo */}
                <ul className='lg:flex gap-6 items-center font-semibold text-xl text-white hidden'>
                <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Rólunk</li>
                    <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Szolgáltatások</li>
                    <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Vélemények</li>
                    <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Kapcsolat</li>
                    <button className='bg-[#ffbf00] cursor cursor-pointer text-white px-4 py-2 rounded-md'>Írj nekünk!</button>
                </ul>
                    <Menu onClick={NavHandler} className='md:hidden text-white' />
                </div>
            </motion.div> 
            {
                open ? (
                    <nav className='md:hidden'>
                        <ul className='flex flex-col border-1 border-[#ffbf00] space-y-10 bg-gray-950 text-gray-300 w-[300px] h-[950px]
                        items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0'>
                            <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Rólunk</li>
                            <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Szolgáltatások</li>
                            <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Vélemények</li>
                            <li className='hover:text-[#ffbf00] cursor-pointer transition-all'>Kapcsolat</li>
                            <button className='bg-[#ffbf00] text-white px-4 py-2 rounded-md'>Írj nekünk!</button>
                            <X onClick={NavHandler} className='z-50 absolute top-0 right-10 border border-[#ffbf00] p-1 rounded-md' />
                        </ul>
                    </nav>
                ):null
            }
        </div>
    </div>
  )
}

export default Navbar