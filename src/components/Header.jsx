import React from 'react'
import Typed from 'react-typed';
import cv from '../fakeCV.pdf'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
            <h1>Web development and service management</h1>
            <Typed
            className='typed-text'
                strings={[
                    'Microsoft Certified Trainer',
                    'Microsoft Azure Developing Solutions Associate',
                    'MERN stack veb developer and instructor']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                   
                </Typed>
                    <a href={cv} className='downloadCV' download>CV-mi endir</a>
            </div>
            
        </div>
    )
}

export default Header
