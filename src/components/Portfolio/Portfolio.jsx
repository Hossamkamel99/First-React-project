import React from 'react'
import house from '../../assets/images/poert1.png'
import cake from '../../assets/images/port2.png'
import tent from '../../assets/images/port3.png'
import { Helmet } from "react-helmet";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className='portfolio my-5 vh-100 d-flex align-items-center justify-content-center'>
        <div className="text-center">
          <div className='my-5'>
            <h2 className='pt-5'>PORTFOLIO  COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center pt-3'>
              <div className='line me-3 bg-dark'></div>
              <i className="fa-solid fa-star" ></i>
              <div className='line ms-3 bg-dark'></div>
            </div>
            <div className='py-3 container'>


              <div className='row gx-5 justify-content-evenly mb-5'>
                <div className="col-md-4 card position-relative">
                  <img src={house} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white
                  position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              
                <div className="col-md-4 card position-relative">
                  <img src={cake} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
              </div>
                
                <div className="col-md-4  card position-relative">
                  <img src={tent} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              
              </div>
              <div className='row g-5 justify-content-evenly'>
                <div className="col-md-4 card position-relative">
                  <img src={house} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white
                  position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              
                <div className="col-md-4 card position-relative">
                  <img src={cake} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
              </div>
                
                <div className="col-md-4  card position-relative">
                  <img src={tent} className='w-100 rounded' />
                  <div className='layer m-auto rounded text-center text-white position-absolute fa-6x d-flex justify-content-center align-items-center'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
