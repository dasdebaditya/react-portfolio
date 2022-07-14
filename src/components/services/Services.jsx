import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article>
          <div className="services_head">
            <h3>Web Developement</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Much more pocket friendly.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mordern designs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Efficient Codebase.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>User-Friendly Interface.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Modifying sessions as per client's choice.</p>
            </li>
          </ul>

        </article>


        <article>
          <div className="services_head">
            <h3>App Developement</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Much more pocket friendly.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mordern designs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Efficient Codebase.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>User-Friendly Interface.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Modifying sessions as per client's choice.</p>
            </li>
          </ul>

        </article>


        <article>
          <div className="services_head">
            <h3>Electrical Planning</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Worth the money you pay!</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Safety is top most priority</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Easily understandable plans</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Environment Friendly designs</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fast Delivery</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services