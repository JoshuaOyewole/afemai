import React from 'react'

function Contact() {
    return (
        <section className='contact-us md:flex py-20 px-8'>
            <div className="text-section">
                <h2 className="text-heading text-primary  pb-5 text-center text-3xl font-bold font-poppins">
                    Need to talk to us?
                </h2>
                <p className="secondary-heading font-Montserrat">
                    We are always available to assist you. Our contact centre agents are available 24/7 to support you. 
                </p>
            </div>
            <div className="form-section">
                <h3 className="tertiary-header uppercase hidden md:flex">
                get in touch
                </h3>
                <div className="md:flex">
                    <div className="form-control my-6">
                        <input type="text" name="fullnames" id="fullnames" placeholder='Fullnames' className='border py-3 w-full px-4 focus:border-primary'/>
                    </div>
                    <div className="form-control my-6">
                        <input type="number" name="tel" id="tel" className='border py-3 w-full px-4 focus:border-primary' placeholder='Phone Number'/>
                    </div>
                    <div className="form-control my-6">
                        <textarea name="msg" id="msg" placeholder='Enter your Message' className=' py-4 w-full px-4 resize-none border'></textarea>
                    </div>
                    <input type="submit" value="Submit" className='uppercase bg-primary px-10 py-3 text-white focus:border-primary'/>
                </div>
                
            </div>
        </section>
    )
}

export default Contact
