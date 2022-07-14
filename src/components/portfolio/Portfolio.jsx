import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/demo.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tesla Website Clone</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://tesla-clone-debaditya.herokuapp.com/" className="btn btn-primary">Live Demo</a>
        
          </div>
          </article>

          <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tesla Website Clone</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://tesla-clone-debaditya.herokuapp.com/" className="btn btn-primary">Live Demo</a>
        
          </div>
          </article>

          <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tesla Website Clone</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://tesla-clone-debaditya.herokuapp.com/" className="btn btn-primary">Live Demo</a>
        
          </div>
          </article>

          
      </div>
    </section>
  )
}

export default Portfolio