import React from 'react'
import Booking from '../components/Booking'
import Navbar from '../components/Navbar'
import Route from '../components/Route'
import Slideshow from '../components/Slideshow'
import TopRoutes from '../TopRoutes'
import promoImg from '../img/promoImg.png'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Slideshow />
            <Booking />
            <section className='min-h-screen bg-gray blank'>
                {/* Hello */}
            </section>
            <section className=' mt-40 pb-20'>
                <h2 className="header-title text-primary py-10 text-center text-3xl font-bold">
                    Top Available Routes
                </h2>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:px-16 lg:px-20">
                {
                    TopRoutes.map(topRoute=>{
                        return <Route {...topRoute} key={topRoute.id} />
                    })
                }
                </div>
            </section>
            <section className="promo flex flex-col pt-20 md:bg-tertiary md:pb-10 ">
                <img src={promoImg} className='-mb-9 md:w-1/2 md:m-auto' alt="Enjoy up to 10% when
                    you book Online" />
                <div className="promo-text text-white bg-tertiary py-10 px-8 text-center">
                    <h4 className='font-Montserrat font-bold text-2xl md:text-5xl'>Enjoy up to 10% when you book Online</h4>
                    <p className="text-secondary text-lg md:text-4xl font-Montserrat md:pt-6">
                        www.afemaimotor.com
                    </p>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}   

export default Home
