import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/AVT1.jpg'

const Testimonial = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar1" />
          </div>
          <h5>Javier De La Garza</h5>
          <small>"Debaditya has a great optimism and creative way to fix obstacles. He easily adapts and contibutes with new ideas towards reaching the milestones. It was great working with him!"</small>
          
        </article>
      </div>
    </section>
  )
}

export default Testimonial