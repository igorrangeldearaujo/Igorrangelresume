import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
            <div className='pt-16 md:pt-20'>
                <h1 className='text-4xl uppercase pl-16'>Hi, I'm Igor Rangel</h1>
                <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
                <ContactMe />
            </div>
            <div className='mx-2 md:px-8 px-20 ml-2'><img src='/images/igorrangel.png' /></div>
        </div>
    )

}
export default Hero
