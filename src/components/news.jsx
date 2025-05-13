import React from 'react'
import NewsData from "./../../public/assets/data/news.json"
import './news.css'

const News = () => {
  return (
    <main className='my-5'>
        
        <div id='news-section' className="container">
        <div>
            <p className="news-title">NEWS</p>
            <h3 className="news-description">Insights and Innovation in Green Technology and Environmental Solutions</h3>
        </div>

        <div className='card-container'>
        {NewsData.map((news) => {
            return(
            <div key={news.id} className="card">
                <img src={news.image} alt="news-image" />
                <div className="card-content">
                    <div className="author">
                        <div className='author-image'>
                            <img src={news.authorImage} alt="" />
                        </div>
                        <div className='author-name'>{news.authorName}</div>
                    </div>
                    <hr />

                    <article>
                        <h5 className='article-heading'>{news.heading}</h5>
                        <p>{news.shortNews}</p>
                    </article>
                    <hr />
                    
                    <footer>
                        <p className="date">{news.date}</p>
                    </footer>
                </div>
            </div>
        )})}
        </div>

        </div>
    </main>
  )
}

export default News