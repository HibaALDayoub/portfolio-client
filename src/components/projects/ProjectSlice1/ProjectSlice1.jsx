import React from 'react'
import '../projectslice/ProjectSLlice.css'

const ProjectSlice1 = ({icon,name,description}) => {
    return (
        <>
            <div className="text">
                <div className="imgH3">
                    <img src={icon} alt='' />
                    <h3>{name}</h3>
                </div>
                <p>{description}</p>
            </div>
        </>
    )
}
export default ProjectSlice1