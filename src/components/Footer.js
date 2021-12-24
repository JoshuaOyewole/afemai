import React from 'react'
import { NavLink } from 'react-router-dom'
import paymentsImg from '../img/payment.png'

function Footer() {
    return (
        <>
                <div className='footer md:flex bg-footer py-10 px-8 text-white font-Montserrat'>
            <div className='py-2'>
                <h3 className='footer-header uppercase font-Montserrat font-bold text-footerHeading text-sm'>
                    Connect with us
                </h3>
                <NavLink to='/terms' className='text-xs' >Terms and Condition</NavLink>
            </div>
            <div className='py-2'>
                <h3 className='footer-header uppercase font-Montserrat font-bold text-footerHeading text-sm'>
                    Know More
                </h3>
                <NavLink to='/terms'  className='text-xs'>About us</NavLink>
            </div>
            <div className='py-2'>
                <h3 className='footer-header uppercase font-Montserrat font-bold text-footerHeading text-sm'>
                    Company Information
                </h3>
                <li className='list-none text-xs'>No 5 Angle 90, Opposite FRSC Secretariat,
                        Auchi Edo-State.</li>
                    <li className='list-none text-xs'>07032054367</li>
            </div>
            <div className='py-2'>
                    <h3 className='footer-header uppercase font-Montserrat font-bold text-footerHeading text-xs'>
                    secure payment
                </h3>
                <img src={paymentsImg} alt="Get covered with our secured payment system" className='w-3/5'/>
            </div>
            </div>
            <p className='uppercase text-center py-4 bg-footer text-white text-xs'>
            2021 Afemai Motors. | all rights reserved.
            </p>
        </>
        
    )
}

export default Footer
