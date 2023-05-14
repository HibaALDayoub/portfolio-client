import './Compli.css'

import { useSelector } from 'react-redux'

const Compli = () => {
    const {services} = useSelector((state) => state.data)
    return (
        <>
            {
                [services].map((item , uid)=>(
                    
                    <ul key={uid}>
                        <li>
                            <h2>{item.profile_client}</h2>
                            <p>client</p>
                        </li>
                        <li>
                            <h2>{item.profile_project}+</h2>
                            <p>projects</p>
                        </li>
                        <li>
                            <h2>{item.profile_awards}</h2>
                            <p>Awards</p>
                        </li>
                        <li>
                            <h2>{item.profile_experience}</h2>
                            <p>Years Experience</p>
                        </li>
                    </ul>
                ))
            }
        </>
    )
}

export default Compli
