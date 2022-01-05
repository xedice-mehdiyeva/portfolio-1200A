import React from 'react'
import Typed from 'react-typed';
import backgroundImage from '../img/bg.jpg'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>

            <Typed
                strings={[
                    'Microsoft Certified Trainer',
                    'Microsoft Azure Developing Solutions Associate',
                    'MERN stack veb developer and instructor']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>

            </div>
            
        </div>
    )
}

export default Header
