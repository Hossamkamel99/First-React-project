import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bottom text-white fa-2xs py-5">
                <div className='footer-content  d-flex py-5'>
                    <div className='location col-md-4 text-center'>
                        <h3>Location</h3>
                        <p className='py-2'>2215 John Daniel Drive</p>
                        <p>Clark,MO 65243</p>
                    </div>
                    <div className='icons col-md-4 text-center'>
                        <h3 className=''>AROUND THE WEB</h3>
                        <ul className='footericon list-unstyled fa-2x d-flex justify-content-center'>
                            <li className='p-1'><i className="bic p-2 circle fa-brands fa-facebook"></i></li>
                            <li className='p-1'><i className="bic p-2 circle fa-brands fa-twitter"></i></li >
                            <li className='p-1'><i className="bic p-2 circle fa-brands fa-linkedin-in"></i></li>
                            <li className='p-1'><i className="bic p-2 circle fa-solid fa-globe"></i></li>
                        </ul>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3>ABOUT FREELANCER</h3>
                        <h6 className='d-flex flex-column'>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
                    </div>
                </div>
            </footer>
            <footer className='text-center text-white bg-dark py-3'>
                <div>Copyright © Hossam kamel 2023</div>
            </footer>
        </>
    )
}