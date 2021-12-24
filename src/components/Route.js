import React from 'react'

function Route({routeImg, routePrice, destination, location}) {

    return (
        <figure className='mx-auto px-12 rounded mt-8'>
            <img src={routeImg} alt={`${location} to ${destination}`} className='mx-auto shadow-lg h-full w-full'/>
            <figcaption className='mx-auto bg-gray py-4 px-6 shadow-lg'>
                <p className="route font-Montserrat">{location} to {destination}</p>
                <p className="price font-Montserrat font-extrabold">from N{routePrice}</p>
            </figcaption>
        </figure>
    )
}

export default Route
