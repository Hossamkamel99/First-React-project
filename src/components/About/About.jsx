import React from 'react'
import Star from '../Star/Star'
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className='about vh-100 d-flex align-items-center justify-content-center text-white'>
        <div className="text-center">
          <div className='my-5'>
            <h2 className='fa-2x'>ABOUT COMPONENT</h2>
            <Star></Star>
            <div className='d-flex py-3 container'>
              <div className='row px-5'>
                <div className="col-md-6">
                  <p className='fa-1x text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                  <p className='fa-1x text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
