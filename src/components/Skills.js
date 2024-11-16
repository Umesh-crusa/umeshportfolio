import React from 'react'
import html from '../img/html.jpg'
import css from '../img/css.jpg'
import react from '../img/reactjs.jpg'
import tailwinds from '../img/tailwindcss.jpg'
import javascript from '../img/javascript.jpg'


const Skills = () => {
  return (
    <div className=' border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cold-4
      place-items-center md:flex md:justify-between md:items-center'>


        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
         My<br/>
         Tech<br/> 
         Stack</h2>

         <div className='flex flex-col items-center m-4 sm:my-0 w-[800px] md:w-[100px]'>
          <img src={html} alt=""  width={100} height={100}/>
          <p  className='my-2  font-bold '>CSS</p>
         </div>

         <div className='flex flex-col items-center m-4 sm:my-0 w-[800px] md:w-[100px]'>
          <img src={css} alt="" width={100} height={100} />
          <p  className='my-2   font-bold'>HTML</p>
         </div>
                 
         <div className='flex flex-col items-center m-4 sm:my-0 w-[800px] md:w-[100px]'>
          <img src={javascript} alt="" width={100} height={100} />
          <p  className='my-2   font-bold'>javascript</p>
         </div>
                
         <div className='flex flex-col items-center m-4 sm:my-0 w-[800px] md:w-[100px]'>
          <img src={react} alt=""  width={100} height={100}/>
          <p  className='my-2  font-bold '>React</p>
         </div>

         <div className='flex flex-col items-center m-4 sm:my-0 w-[800px] md:w-[100px]'>
          <img src={tailwinds} alt="" width={100} height={100} />
          <p  className='my-2   font-bold'>Taildwinds css</p>
         </div>

      
    </div>
  )
}

export default Skills
