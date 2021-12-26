import React from 'react'

function Booking() {
    return (
        <div className='booking shadow-xl rounded-2xl bg-white lg:mx-40 px-6 md:py-20 md:px-16 pt-6 pb-14 absolute xl:py-8'>
            <div className="flex justify-around header font-semibold mx-auto uppercase items-center md:text-lg font-Montserrat lg:justify-start">
                <button className=' py-2 grow basis-1/2 uppercase text-sm font-semibold md:text-lg '>Book Now</button>
                <button className=' py-2 px-1 font-semibold grow text-sm basis-1/2 uppercase md:text-lg'>Hire a Bus</button>
                <button className=' py-2 px-1 font-semibold grow text-sm basis-1/2 uppercase md:text-lg'>Manage Bookings</button>
            </div>
            <div className="booking-type flex justify-between py-6 lg:justify-start lg:px-10">
                <button className='active py-2 px-5 uppercase font-semibold md:text-md md:px-6 md:py-2'>One Way</button>
                <button className='py-2 px-5 uppercase font-semibold md:text-md md:px-6 md:py-2'>Round Trip</button>
            </div>
            <div className="booking-form lg:px-2 lg:pb-10">
                <form className="form shadow lg:px-8">
                    <div className="grid md:grid-cols-2">
                        <div className='md:mr-4'>
                            <label htmlFor="travelingTo" className='block mt-5 mb-2'>Travelling From</label>
                            <select id="cars" name="cars"  className='border py-2 px-4 w-full' required>
                                <option value="Auchi" className='border py-2 px-4 w-full'>Auchi</option>
                                <option value="Ekpoma" className='border py-2 px-4 w-full'>Ekpoma</option>
                                <option value="Benin" className='border py-2 px-4 w-full'>Benin</option>
                                <option value="Lagos" className='border py-2 px-4 w-full'>Lagos</option>
                            </select>
                        </div>
                        <div className=''>
                            <label htmlFor="travelingTo" className='block mt-5 mb-2'>Travelling to</label>
                            <select id="cars" name="cars"  className='border py-2 px-4 w-full' required>
                                <option value="Benin" className='border py-2 px-4 w-full'>Benin</option>
                                <option value="Ekpoma" className='border py-2 px-4 w-full'>Ekpoma</option>
                                <option value="Auchi" className='border py-2 px-4 w-full'>Auchi</option>
                                <option value="Lagos" className='border py-2 px-4 w-full'>Lagos</option>
                            </select>
                        </div>
                    </div>
                   <div className='mx-auto justify-around md:grid md:grid-cols-2 md:items-center'>
                        <div className='mx-auto md:mx-0 md:mr-4'>
                                <label htmlFor="travelingTo" className='block mt-5 mb-2'>Departure Date</label>
                                <input type="date" placeholder='Arrival Location' className='border py-2 w-full px-4'/>
                        </div>
                        <div className='mx-auto md:mx-0'>
                                <label htmlFor="travelingTo" className='block mt-5 mb-2'>Adult</label>
                                <input type="number" placeholder='1' className='border py-2 w-full px-4 shadow'/>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:justify-start mt-8 md:mt-16 lg:mt-8 lg:pb-8">
                        <input type="submit" value="Book Now" className='bg-primary py-2 md:py6 px-4 text-white uppercase hover:bg-400' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Booking
