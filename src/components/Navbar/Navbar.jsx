import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-white fixed-top">
                <div className='container-fluid'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="nav-item">
                            <Link className="nav-link fa-2x m-3" to="/Home">START FRAMEWORK </Link>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 pe-5 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link text-white navlink rounded" to="/About">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white navlink rounded" to="/Portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white navlink rounded" to="/Contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}