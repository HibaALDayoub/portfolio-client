import './Icon.css'
import { useSelector } from 'react-redux';


import { Link } from 'react-router-dom'

const Icon = () => {
    const {links} = useSelector((state) => state.data)
    return (
        <>
            {
                links.map((it ,index)=>(
                    <Link to={it.link_web} key={index}>
                        <img alt='' src={`https://jostore2000.000webhostapp.com/upload/projects/${it.link_name}`} />
                    </Link>
                ))
            }
        </>
    )
}

export default Icon