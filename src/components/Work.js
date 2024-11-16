import React from 'react'
import slid1 from '../img/slide2.jpg'
import slid3 from '../img/slide3.jpg'
import slid4 from '../img/slide4.jpg'

const Work = () => {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto p-5 ' id='work'>
            <div className='pb-8'>
                <p className='text-4xl font-bold mb-4 primary-color'>Work</p>
                <p className='text-gray-300 font-bold'>Check out some of my recent work</p>

            </div>

        
        <div className=' grid sd:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#7b74fb91] group rounded-md flex justify-center
             items-center h-[300px] bg-cover'>

                <img src={slid3} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center '>
                  <span className='text-2xl font-bold text-white tracking-wider'> Project</span>

                   <a href="https://umesh-crusa.github.io/Crypto_currency/">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold
                    text-lg'>Live</button>
                   </a>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#7b74fb91] group rounded-md flex justify-center
             items-center h-[300px] bg-cover'>

                <img src={slid4} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center '>
                  <span className='text-2xl font-bold text-white tracking-wider'> Project</span>

                   <a href="/">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold
                    text-lg'>Live</button>
                   </a>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#7b74fb91] group rounded-md flex justify-center
             items-center h-[300px] bg-cover'>

                <img src={slid1} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center '>
                  <span className='text-2xl font-bold text-white tracking-wider'> Project</span>

                   <a href="/">
                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold
                    text-lg'>Live</button>
                   </a>
                </div>

            </div>

        </div>
      
    </div>
    </div>
  )
}

export default Work
