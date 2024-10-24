
import React, { useState } from 'react';
import './navbar.scss'
import { TbBrandBooking } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar ')
    //Function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    //Function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }


    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1>
                            <TbBrandBooking className="icon" />
                            Booking.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Stays
                            </a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Flight
                            </a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Airport taxis
                            </a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Car rentals
                            </a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>News
                            </a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLink'>Contact
                            </a>
                        </li>

                        <button className='btn'>
                            <a href='#'>BOOK NOW</a>
                        </button>

                    </ul>

                    <div onClick={removeNavbar}
                        className='closeNavbar'>
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>



                {/*  */}
                <div onClick={showNav}
                    className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    )
}


export default Navbar