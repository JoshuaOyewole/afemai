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
            <section className='min-h-screen bg-gray'>
                {/* Hello */}
            </section>
            <section className='min-h-screen mt-40'>
                <h2 className="header-title text-primary py-10 text-center text-3xl font-bold">
                    Top Available Routes
                </h2>
                {
                    TopRoutes.map(topRoute=>{
                        return <Route {...topRoute} key={topRoute.id} />
                    })
                }
            </section>
            <section className="promo flex flex-col pt-20">
                <img src={promoImg} className='-mb-9' alt="Enjoy up to 10% when
                    you book Online" />
                <div className="promo-text text-white bg-tertiary py-10 px-8">
                    <h4 className='font-poppins font-bold text-2xl'>Enjoy up to 10% when you book Online</h4>
                    <p className="text-secondary text-lg">
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
