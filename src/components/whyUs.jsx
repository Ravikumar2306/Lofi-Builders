import { useState } from 'react'
import React from 'react'
import './whyUs.css'
import { useNavigate } from 'react-router-dom'

const WhyUs = () => {

    const [seeMore, setSeeMore] = useState(false);
    const navigate = useNavigate();

    const handleReadMore = () => {
        setSeeMore(true)
    }

    const handleBack = () => {
        navigate('/')
    }

  return (
    <main className='container-md my-5' id='whyUs-section'>
        <section className='whyUs-left-section'>
            <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
            <p className='manager-name'>Aarav Mehta</p>
            <p><i>manager</i></p>
            <div className='whyUs-content'>
                <h1>WHY US</h1>
                <p>We take pride in building strong, beautiful wooden homes that reflect nature's warmth and timeless design. 
                    Each project is carefully crafted to match your lifestyle, space needs, and personal taste, giving you a home that feels truly yours.
                </p>

                {seeMore && (
                    <>
                    <p className='next-para'>
                    Our team consists of skilled professionals with years of experience in wooden construction. From selecting the right wood to perfecting 
                    the final touches, we focus on quality, durability, and safety at every stage of the building process.
                    We also believe in honest work and clear communication. That’s why we offer transparent pricing, detailed planning, and on-time delivery. 
                    With our commitment to sustainability and customer satisfaction, we make sure your wooden home is built to last and loved for generations.
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

        <div className='whyUs-right-section'>
            <img className='manager-image-verticle' src="/assets/images/manager-verticle.jpg" alt="" />
            <img className='manager-image-horizontal' src="/assets/images/manager-horizontal.jpg" alt="" />
        </div>
    </main>
  )
}

export default WhyUs