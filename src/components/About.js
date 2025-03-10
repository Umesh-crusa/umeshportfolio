import React from 'react'
import aboutimg from '../img/about image.jpg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      

       <div className='md:grid md:grid-cols-2 sm:py-16'>

         <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start
          py-6 md:py-0'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste doloremque hic nostrum placeat magni officiis ab officia odit? Natus nihil exercitationem architecto molestias repellat et at tempore. Excepturi temporibus, est architecto, numquam accusantium commodi magnam quas totam cumque quam sed veniam doloribus laudantium minima rem saepe molestias qui. Autem.


                </p>

            </div>

         </div>
              <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimg} alt="" width={300} height={300} />
       </div>
    </div>
  )
}

export default About
