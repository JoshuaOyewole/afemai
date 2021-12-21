import React from 'react'

function Booking() {
    return (
        <div className='booking shadow rounded-2xl bg-white lg:mx-40 px-6 py-6 '>
            <div className="flex justify-around header font-semibold mx-auto uppercase">
                <h3 className="book-a-seat">Book Now</h3>
                <h3 className="book-a-seat">Hire a Bus</h3>
                <h3 className="book-a-seat">Manage my Bookings</h3>
            </div>
            <div className="booking-type flex justify-between py-6">
                <button className='active py-4 px-10'>One Way</button>
                <button className='py-4 px-6'>Round Trip</button>
            </div>
            <div className="booking-form">
                <div className="form">
                    <div className='mx-auto'>
                        <label htmlFor="travelingTo">Travelling From</label>
                        <input type="text" placeholder='Departure Location' className='border py-2 px-4 w-full'/>
                    </div>
                   <div className='mx-auto'>
                        <label htmlFor="travelingTo">Travelling to</label>
                            <input type="text" placeholder='Arrival Location' className='border py-2 w-full px-4'/>
                   </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Booking
