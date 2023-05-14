import './Services.css'

import Compli from './Compli/Compli'
import Spanph from '../aboutme/SpanPH/Spanph'

const Services = () => {

 
  const buttomServices= [
    {
      span: '2018 - 2019',
      p: "I got my bachelor's degree in my school and started my journey at a university ICTES",
    },
    {
      span: '2019 - 2020',
      p: "I started studying programming languages such as Python, C++, and C#, and I have a good knowledge of problem solving, data structures, and algorithms",
    },
  ]
  return (
    <div className='services' id='services'>
      
        <Compli />
      <div className="hWithp">
        <h2>EDUCATION</h2>
        <p className='p'>A Flutter developer that does all the job he needs to do at all times.</p>
      </div>
      <div className="buttom">
          {
            buttomServices.map((item)=>(
              <Spanph key={item.span} span={item.span} p={item.p} />
            ))
          }
      </div>

    </div>
  )
}

export default Services