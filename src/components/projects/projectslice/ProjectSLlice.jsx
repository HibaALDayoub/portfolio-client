import './ProjectSLlice.css'
import { useSelector } from 'react-redux'
import address from '../../../images/mappin.png'
import phone from '../../../images/phone.png'
import email from '../../../images/email.png'
import whataspp from '../../../images/whatsapp.png'
const ProjectSLlice = () => {
    const {services } = useSelector((state) => state.data)
    const data =[
    [
        address,"Address",services.profile_address
    ],
    [
        phone,'Phone',services.profile_number
    ],
    [
        email,'Email',services.profile_email
    ],
    [
        whataspp,'whataspp',services.profile_whats_num
    ]
    ];

    return (
        <>
        {
                data.map((it,id)=>(
                    <>
                        <div className="text">
                            <div className="imgH3">
                                <img src={data[id][0]} alt='' />
                                <h3>{data[id][1]}</h3>
                            </div>
                            <p>{data[id][2]}</p>
                        </div>
                    </>
                ))}
        </>
    )
}

export default ProjectSLlice
