import './testimonials.css'

import im1 from '../../images/IMG_20230426_170209_992.png'
import im2 from '../../images/IMG_20230426_170223_407.png'
import im3 from '../../images/IMG_20230426_170225_561.png'
import im4 from '../../images/IMG_20230426_170226_946.png'
import im5 from '../../images/IMG_20230426_170229_311.png'

import quoto from '../../images/quote.png'
import zain from '../../images/zain.png'
import ali from '../../images/ali.png'

import './icons/Icon.css'
import { Link } from 'react-router-dom'


import ProjectSLlice from  '../projects/projectslice/ProjectSLlice'
import  '../projects/projectslice/ProjectSLlice.css'

import Comp1 from './comptest/Comp1'
import Icon from './icons/Icon'
import { useSelector } from 'react-redux'


const Testimonials = () => {
    const testimonial2 =[
        {
            img: quoto,
            description: 'This is a testimonial text from Zain Alabdin Salameh. Mohammed is a hardworking developer, committed to his work and fast learner I was pleased to work with him again.',
            img2: zain,
            name:'ZAIN ALABDIN SALAMEH',
            description2:'Flutter & Back End'
        },
        {
            img: quoto,
            description: 'This is a testimonial text from Ali Khadoor. Mohamed is a great developer who developed the design I made on Adobe XD and turned it into interfaces on a real mobile.',
            img2: ali,
            name:'ALI KHADOOR',
            description2:'UI/UX Designer'
        },
    ]
    const {services} = useSelector((state) => state.data)
    return (
        <div className='testimonials' id='testimonials'>
            <ul>
                <li>
                    <img src={im1} alt=''/>
                </li>
                <li>
                    <img src={im2} alt=''/>
                </li>
                <li>
                    <img src={im3} alt=''/>
                </li>
                <li>
                    <img src={im4} alt=''/>
                </li>
                <li>
                    <img src={im5} alt=''/>
                </li>
            </ul>
                <div className="testpara">
                <h1>Testimonials</h1>
                <p>Great people i have dealt with and learned from them <Link to={services.profile_contact}>click here
                    to contect us</Link>
                </p>
                </div>
                <div className="parent">
                    {
                        testimonial2.map((item)=>(
                            <Comp1 key={item.name} img={item.img} description={item.description} img2={item.img2} name={item.name} description2={item.description2}/>
                        ))
                    }
                </div>
                <div className="buttom">
                    <ProjectSLlice />
                </div>
                <div className="f-icons">
                    <Icon />
                </div>
        </div>
    )
}

export default Testimonials