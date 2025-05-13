import React from 'react'
import './project.css'
import ProjectData from './../../public/assets/data/project.json'

const ProjectSection = () => {
  return (
    <main className='container d-flex flex-column my-5' id='main-container'>

      {ProjectData.map((project, index) => (
      <div key={index} className={`main-section d-flex justify-content-center py-5 ${index !== ProjectData.length - 1 ? 'border-bottom' : ''}`}>
      <section className='left-section' key={index}>
        <div className="top">
          <p className="project-number">Project {project.id}</p>
          <h3 className="project-name">{project.projectName}</h3>
          <p className="year">{project.year}</p>
        </div>

        <div className="middle my-5">
          <p>{project.summary}</p>
        </div>

        <div className="bottom d-flex gap-5">
          <div className='first-column d-flex flex-column'>
            <p className="bottom-title mb-1">Location</p>
            <p className="bottom-data m-0">{project.location}</p>
          </div>

          <div className='second-column d-flex flex-column'>
            <p className="bottom-title mb-1">Size</p>
            <p className="bottom-data m-0">{project.size}</p>
          </div>

          <div className='third-column d-flex flex-column'>
            <p className="bottom-title mb-1">Meterials</p>

            <p className="bottom-data m-0">{project.materials.join(', ')}</p>

          </div>
        </div>
      </section>

      <section className='right-section'>
        <div className='house-images'>
        <img src={project.image} alt={project.projectName} />
        </div>
      </section>
      </div>
      ))}

    </main>
  )
}

export default ProjectSection