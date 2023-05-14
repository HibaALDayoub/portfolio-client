import './Topbar.css'
import { useState } from 'react'

const Topbar = () => {
    const [menuOpen , setMeuOpen] = useState(false)
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro'className='logo'>M<span>.</span></a>
                </div>
                <div className="right">
                    <div className="menu">
                        <ul className={"alllinks "  + (menuOpen && "openMenu")}>
                            <li onClick={()=> setMeuOpen(false)}>
                                <a href='#intro'>HOME</a>
                            </li>
                            <li onClick={()=> setMeuOpen(false)}>
                                <a href='#projects'>PROJECTS</a>
                            </li>
                            <li onClick={()=> setMeuOpen(false)}>
                                <a href='#services'>EDUCATIONS</a>
                            </li>
                            <li onClick={()=> setMeuOpen(false)}>
                                <a href='#about'>SKILLS</a>
                            </li>      
                            <li onClick={()=> setMeuOpen(false)}>
                                <a href='#testimonials'>TESTIMONIALS</a>
                            </li>
                        </ul>
                        <div className={"Bars " + (menuOpen && "open")} onClick={()=> setMeuOpen(!menuOpen)}>
                            
                            <span className="line1" ></span>
                            <span className="line2"></span>
                            <span className="line3"></span>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar