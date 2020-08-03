import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
const Hero = () => {
    return(
        <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
            <div className='pt-16 md:pt-20'>
                <h1 className='text-4xl uppercase pl-16'>Hi, I'm Igor Rangel</h1>
                <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
                <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
                    <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase  p-2'>Contact Me</h3>
                    <p className='text-center md:text-left'>
                        <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
                        <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6'/>
                        <FaFacebook  className='text-5xl md:text-6xl inline-block'/>
                        <br />
                        <span className='inline-block mt-4'>or drop a line: igorrangeldearaujo@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className='mx-2 px-12 ml-2'><img src='/images/igor-rangel.png'/></div>
        </div>
    )
    
}
export default Hero
