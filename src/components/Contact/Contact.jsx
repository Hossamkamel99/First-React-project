import React from "react";
import {Helmet} from "react-helmet";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className='contact vh-100'>
                <div className="text-center mx-auto mt-5 py-5 w-50">
                    <div className='my-5'>
                        <h2 className=''>CONTACT SECTION</h2>
                        <div className='d-flex align-items-center justify-content-center py-3'>
                            <div className='line me-3 bg-dark'></div>
                            <i className="fa-solid fa-star" ></i>
                            <div className='line ms-3 bg-dark'></div>
                        </div>
                    </div>
                    <div className="mx-auto pt-5">
                            <input id="inp" type="text" className="row col-md-12 m-auto border-0 border-bottom p-3 my-2" placeholder="userName"/>
                            <input id="inp" type="number" className="row col-md-12 m-auto border-0 border-bottom p-3 my-4" placeholder="userAge"/>
                            <input id="inp" type="email" className="row col-md-12 m-auto border-0 border-bottom p-3 my-4" placeholder="userEmail"/>
                            <input id="inp" type="password" className="row col-md-12 m-auto border-0 border-bottom p-3 my-4" placeholder="userPassword"/>
                            <button className="d-flex align-items-start btn btnsub text-white">Send Message</button>
                        </div>
                </div>
            </div>
        </>
    );
}
