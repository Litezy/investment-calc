import React from 'react'
import logo from '../assets/fundsimg.png'

const Header = () => {

    return (
        <div>
            <div className="w-[80%] mt-10 mx-auto text-center flex flex-col items-center ">
                <img className='img w-[30%] ' src={logo} alt="investment-logo" />
                <h1 className='text-white text-2xl font-bold'>Investment Calculator</h1>
            </div>

        </div>
    )
}

export default Header