import React, { useState } from 'react'
import FAQSection from './../../public/assets/data/faq.json'
import './FAQ.css'

const FAQ = () => {

    const [openAnswer, setOpenAnswer] = useState(null);

    const toggleClick = (index) => {
        setOpenAnswer(openAnswer === index ? null : index)
    }


  return (
    <main id='faqSection' className='my-5'>
        <section className="container faq-container">
            <div className='faq-title'>
                <p className="question-title">QUESTIONS</p>
                <h1 className="FAQ">Frequently asked questions</h1>
            </div>

            {FAQSection.map((faqData, index) => {
                return(
            <div key={index} className='questionAnswer'>
                <div className='question-section' onClick={()=> toggleClick(index)}>
                    <button className='question' >{faqData.question}</button>
                    <button className='plusButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`bi ${openAnswer === index ? 'cross-icon' : 'bi-plus'}`} viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </button> 
                </div>

                <p className={`answer ${openAnswer === index ? 'open' : ''}`}>{faqData.answer}</p>
                <hr />
            </div>
            )})}

                <footer>
                    <p className='help-center'>Visit our <a href="">Help center</a> for more information.</p>
                </footer>
        </section>
    </main>
  )
}

export default FAQ