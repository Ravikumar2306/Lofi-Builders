import React from 'react'
import './focus-area.css'
import { PiWavesLight, PiWindLight, PiSunHorizon } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";

const FocusArea = () => {
  return (
    <main id='focus-area-section' className='mb-5'>
        <div className='container'>
        <div>
            <p className="focus-area">FOCUS AREAS</p>
            <h3 className="focus-description">We partner with innovative businessess to
                fast-track a sustainable future.
            </h3>
        </div>

        <section>
            <div className="grid">
                
                <div className="grid-box grid-box1">
                    <div className='grid-content'>
                    <PiWavesLight size={50} />
                        <h4 className="gridBox-title">Hydropower</h4>
                        <p className="gridBox-description">Hydropower uses flowing or falling water (like from rivers or dams) 
                            to turn turbines and generate electricity. It's renewable, reliable, and widely 
                            used but can affect ecosystems and water flow.</p>
                        <button className='learn-more' type='button'>Learn More <FiArrowUpRight /></button>
                    </div>
                </div>

                <div className="grid-box grid-box2">
                    <div className='grid-content'>
                    <PiWindLight size={50} />
                        <h4 className="gridBox-title">Wind Parks</h4>
                        <p className="gridBox-description">Wind parks (or wind farms) use large turbines powered by wind to 
                            generate electricity. They are clean and renewable but depend on wind availability 
                            and require open space.</p>
                        <button className='learn-more' type='button'>Learn More <FiArrowUpRight /></button>
                    </div>
                </div>

                <div className="grid-box grid-box3">
                    <div className='grid-content'>
                    <SlEnergy size={50} />
                        <h4 className="gridBox-title">Batteries</h4>
                        <p className="gridBox-description">Batteries store electrical energy for later use. They're essential 
                            for balancing supply and demand, especially with solar and wind energy, 
                            which aren't always available.</p>
                        <button className='learn-more' type='button'>Learn More <FiArrowUpRight /></button>
                    </div>
                </div>

                <div className="grid-box grid-box4">
                    <div className='grid-content'>
                    <PiSunHorizon size={50} />
                        <h4 className="gridBox-title"> Solar Energy</h4>
                        <p className="gridBox-description">Solar energy captures sunlight using panels and converts
                             it into electricity. It’s eco-friendly and sustainable, but efficiency depends 
                             on sunlight and space for installation.</p>
                        <button className='learn-more' type='button'>Learn More <FiArrowUpRight /></button>
                    </div>
                </div>
            
            </div>
        </section>
        </div>
    </main>
  )
}

export default FocusArea