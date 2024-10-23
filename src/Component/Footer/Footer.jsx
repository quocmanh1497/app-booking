import React, { useEffect } from 'react'
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { TbBrandBooking } from "react-icons/tb";
import { FaInstagramSquare, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

//aos
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container flex">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep in touch</small>
                        <h2>BooKing</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fader-up" className='btn flex' type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>

                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <TbBrandBooking className="icon" />BOOK.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Stay here, I'll be back tomorrow
                            I only carry my longing for you further
                            The wait is long and short
                            I only add memories of trips
                            Then there will be times when I will cry like the wind's shoulder
                            Like the shadow of a cloud drifting hesitantly

                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <FaTwitter className='icon' />
                            <FaYoutube className="icon" />
                            <FaInstagramSquare className="icon" />
                            <FaFacebook className="icon" />


                        </div>
                    </div>


                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>

                        {/* Group two */}
                        <div data-aos="fade-up" className="linkGroup ">
                            <span className='groupTitle'>
                                PARTNERS
                            </span>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>


                    </div>

                    <div className="footerDiv flex">
                        <smalL>BEST BOOKING WEBSITE</smalL>
                        <small>COPYRIGHTS RESERVED--2024</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer