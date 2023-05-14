import  './Skills.css'
import { useSelector } from 'react-redux'

const Skills = () => {
    const {data} = useSelector((state) => state.data)
    return (       
        <>
            {
                data.map((it , idU)=>(          
                    <div className="prog" key={idU}>
                        <span style={{width: `${it.skill_percent}% `}}>{it.skill_name}</span>
                        <hr style={{ width: `calc(100% - ${it.skill_percent}%)`}}/>
                        <p> {it.skill_percent}%</p>
                    </div>
                ))
            }
        </>
    )
        }
export default Skills



