import React, { useEffect } from 'react'
import './main.scss'

//import icon
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

//improt image
import img from '../../Assets/noel(1).jpg'
import img2 from '../../Assets/noel(2).jpg'
import img3 from '../../Assets/noel(3).jpg'
import img4 from '../../Assets/noel(4).jpg'

//aos
import Aos from 'aos';
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: img,
        desTitle: 'Katinat',
        location: 'Hai Chau',
        grade: 'perfect',
        fees: '$30',
        description: 'Located in a very beautiful location, right at 09 Nguyen Van Linh - a busy and bustling blood street, near Dragon Bridge - a famous bridge in Da Nang, Katinat promises to give Da Nang young people great experiences. surprising and exciting experience.'
    },
    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Phe La',
        location: 'Hai Chau',
        grade: 'Very Good',
        fees: '$20',
        description: 'Located in a very beautiful location, right at 09 Nguyen Van Linh - a busy and bustling blood street, near Dragon Bridge - a famous bridge in Da Nang, Katinat promises to give Da Nang young people great experiences. surprising and exciting experience. '
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Phuc Long',
        location: 'Hai Chau',
        grade: '',
        fees: '$13',
        description: 'Located in a very beautiful location, right at 09 Nguyen Van Linh - a busy and bustling blood street, near Dragon Bridge - a famous bridge in Da Nang, Katinat promises to give Da Nang young people great experiences. surprising and exciting experience.'
    },
    {
        id: 4,
        imgSrc: img4,
        desTitle: 'High Land',
        location: 'Son Tra',
        grade: '',
        fees: '$10',
        description: 'Located in a very beautiful location, right at 09 Nguyen Van Linh - a busy and bustling blood street, near Dragon Bridge - a famous bridge in Da Nang, Katinat promises to give Da Nang young people great experiences. surprising and exciting experience.'
    }
]


const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visit destinations
                </h3>
            </div>


            <div className="secContent grid">

                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up"
                                className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">{desTitle}</h4>
                                    <span className='continent flex'>
                                        <CiLocationOn className="icon" />
                                        <span className='name'>{location}</span>
                                    </span>


                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small> </span>
                                        </div>

                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main