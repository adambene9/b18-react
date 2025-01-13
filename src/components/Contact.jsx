import React from 'react'
import {Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='bg-gray-950'>
      <div className='max-w-7xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 min-h-screen'>
        {/* header */}
        <motion.h2
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, delay:0.2}}
        className='text-3xl md:text-4xl font-bold text-[#ffbf00] mb-4 text-center'>Lépj velünk kapcsolatba!</motion.h2>
        <motion.p
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1.5, delay:0.4}}
        className='text-gray-300 text-center max-w-xl mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque nam autem atque ex odit commodi tempora reiciendis eius laudantium.</motion.p>
        <div className='grid md:grid-flow-col gap-10'>
          {/*contact form*/ }
          <motion.div
          initial={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1, delay:0.4}}
          className='bg-[#ffd24d] shadow-xl shadow-[#ffbf00] rounded-lg p-8 md:p-12 max-w-xl md:w-[400px]'>
            <form className='flex flex-col space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Teljes név</label>
                <input type="text" id='name' className='mt-1 p-3 block w-full text-white border-2 border-[#ffbf00] bg-gray-900 rounded-md shadow-sm sm:text-sm'
                placeholder='John Doe' />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-900'>Email</label>
                <input type="email" id='email' className='mt-1 p-3 block w-full text-white border-2 border-[#ffbf00] bg-gray-900 rounded-md shadow-sm sm:text-sm'
                placeholder='pelda@email.hu' />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-900'>Email</label>
                <textarea rows='4' id='message' className='mt-1 p-3 block w-full text-white border-2 border-[#ffbf00] bg-gray-900 rounded-md shadow-sm sm:text-sm'
                placeholder='Írj nekünk...' />
              </div>
              <button className='bg-[#ffd24d] text-white py-2 px-4 rounded-md shadow-md hover:bg-black'>Üzenet küldése</button>
            </form>
          </motion.div>
          {/* location and map*/}
          <motion.div
          initial={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1, delay:0.4}}
          className='bg-[#ffd24d] shadow-xl shadow-[#ffbf00] rounded-lg p-8 md:p-12 max-w-3xl w-full flex
          flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8'>
            <div className='flex-1'>
              <h3 className='text-2xl font-semibold mb-4'> Címünk</h3>
              <div className='text-gray-950 flex gap-2 items-center'>
                <MapPin fill='#ffbf00' className='text-gray-900' />
                  <p>
                    1201, Budapest <br />
                    Nagy Győri utca 18
                  </p>
              </div>
              <div className='text-gray-950 flex gap-2 items-center'>
                <Phone fill='#ffbf00' className='text-gray-900' />
                  <p className='text-gray-950 mt-4'>
                    Telefon: (70) 123-456
                  </p>
              </div>
              <div className='text-gray-950 flex gap-2 items-center'>
                <Mail fill='#ffbf00' className='text-gray-900' />
                  <p className='text-gray-950'>
                    Email: b18@b18.hu
                  </p>
              </div>
            </div>
            <div>
              {/* placeholder for google maps */}
              <div className='w-full h-64 bg-gray-300 rounded-lg'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d674.6984716141155!2d19.101345706228695!3d47.43546225714968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shu!4v1736201454969!5m2!1sen!2shu"
              className='w-full h-full rounded-lg'
              width="600"
              height="450"
              allowfullscreen=""
              aria-hidden="false"
              tabIndex='0'
              loading="lazy"
              ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact