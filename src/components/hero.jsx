import React from 'react'
import './hero.css'
import Navbar from './navbar'

const Hero = ({scrollToFaq, scrollToTestimonial}) => {
  return (
    <section className="m-2 m-md-3 position-relative" id='heroic-page'>
        <div className='image-section'>
            <img className='w-100' src="/assets/images/Homepage.jpg" alt="homepage" />
        </div>
        
        <div className='container caption position-absolute text-white'>We spend on-third of <br />our life at work</div>
        
        <div className="survey d-flex justify-content-around position-absolute bottom-0 end-0 bg-white">
          <div className="d-flex flex-column align-items-center">
          <p className="data mb-0">20+</p>
          <p className="description">Total Projects</p>
          </div>
          <div className="d-flex flex-column align-items-center">
          <p className="data mb-0">4.8M</p>
          <p className="description">Emission Served</p>
          </div>
          <div className="d-flex flex-column align-items-center">
          <p className="data mb-0">60+</p>
          <p className="description">Strategic Partner</p>
          </div>
        </div>
        <Navbar onFaqClick={scrollToFaq} onTestimonialClick={scrollToTestimonial} />
    </section>
  )
}

export default Hero;