import { useState } from 'react'
import React from 'react'
import './about.css'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const [seeMore, setSeeMore] = useState(false);
    const navigate = useNavigate();

    const handleReadMore = () => {
        setSeeMore(true)
    }

    const handleBack = () => {
        navigate('/')
    }

  return (
    <main className='container-md my-5' id='about-section'>
        <section className='about-left-section'>
            <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
            <div className='about-content'>
                <h1>About</h1>
                <p>At Lofi, we specialize in crafting beautiful, sustainable, and durable wooden homes that blend tradition with modern living. 
                    With years of experience in woodwork and construction, our passion lies in designing spaces that reflect comfort, elegance, and natural charm.
                </p>

                {seeMore && (
                    <>
                    <p className='next-para'>
                    Every home we build is a testament to skilled craftsmanship, quality materials, and a deep respect for nature. 
                    Whether you're dreaming of a cozy wooden cottage or a contemporary timber-framed home, we bring your vision to life with attention to detail and personalized service.

                    We don’t just build houses — we build warm, lasting homes you’ll cherish for generations.
                    </p>
                    </>
                )}

                {!seeMore && (
                    <a className='read-more' onClick={handleReadMore}>Read More <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                  </svg></a>
                )}
                
            </div>
        </section>

        <div className='about-right-section'>
            <img className='about-image-verticle' src="/assets/images/about-verticle.jpg" alt="" />
            <img className='about-image-horizontal' src="/assets/images/about-horizontal.jpg" alt="" />
        </div>
    </main>
  )
}

export default About