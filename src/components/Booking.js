import React from 'react'

function Booking() {
    return (
        <div className='booking shadow-xl rounded-2xl bg-white lg:mx-40 px-6 pt-6 pb-14'>
            <div className="flex justify-around header font-semibold mx-auto uppercase">
                <h3 className="book-a-seat">Book Now</h3>
                <h3 className="book-a-seat">Hire a Bus</h3>
                <h3 className="book-a-seat">Manage my Bookings</h3>
            </div>
            <div className="booking-type flex justify-between py-6">
                <button className='active py-2 px-10'>One Way</button>
                <button className='py-4 px-6'>Round Trip</button>
            </div>
            <div className="booking-form">
                <div className="form">
                    <div className='mx-auto'>
                        <label htmlFor="travelingTo" className='block mt-5 mb-2'>Travelling From</label>
                        <select id="cars" name="cars"  className='border py-2 px-4 w-full' required>
                            <option value="volvo" className='border py-2 px-4 w-full'>Auchi</option>
                            <option value="saab" className='border py-2 px-4 w-full'>Ekpoma</option>
                            <option value="fiat" className='border py-2 px-4 w-full'>Benin</option>
                            <option value="audi" className='border py-2 px-4 w-full'>Lagos</option>
                        </select>
                    </div>
                   <div className='mx-auto'>
                        <label htmlFor="travelingTo" className='block mt-5 mb-2'>Travelling to</label>
                        <select id="cars" name="cars"  className='border py-2 px-4 w-full' required>
                            <option value="volvo" className='border py-2 px-4 w-full'>Benin</option>
                            <option value="saab" className='border py-2 px-4 w-full'>Ekpoma</option>
                            <option value="fiat" className='border py-2 px-4 w-full'>Auchi</option>
                            <option value="audi" className='border py-2 px-4 w-full'>Lagos</option>
                        </select>
                   </div>
                   <div className='mx-auto grid-2 justify-around'>
                        <div className='mx-auto'>
                                <label htmlFor="travelingTo" className='block mt-5 mb-2'>Departure Date</label>
                                <input type="date" placeholder='Arrival Location' className='border py-2 w-full px-4'/>
                        </div>
                        <div className='mx-auto'>
                                <label htmlFor="travelingTo" className='block mt-5 mb-2'>Adult</label>
                                <input type="number" placeholder='1' className='border py-2 w-full px-4'/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <input type="submit" value="Book a Seat" className='bg-primary py-3 px-4 w-full text-white uppercase' />
                    </div>
                   
                  
                </div>
            </div>
        </div>
    )
}

export default Booking
