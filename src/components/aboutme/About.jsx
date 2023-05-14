import './about.css'
import Skills from './skiils/Skills'
import Spanph from './SpanPH/Spanph'

import { useEffect } from 'react'
// data
import { useDispatch } from 'react-redux'
import { getData } from '../../store/mSlice'
import { useSelector } from 'react-redux'

const About = () => {
  const { services } = useSelector((state) => state.data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData({ id: 1 }));
  }, [dispatch])

  const topAbout = [
    {
      span: '2020 - 2021',
      p: "I started BackEnd Development by learning PHP Pure and Mysql and created API to be used in mobile app development",
    },
    {
      span: services.profile_year,
      p: "I started learning the Flutter framework  and Dart programming language and combined my experience with filters and PHP to create a range of applications for customers and worked with a software team to increase my experience",
    },
  ]
  return (
    <div className='about' id='about'>
      <div className="top">
        {
          topAbout.map((item) => (
            <Spanph key={item.span} span={item.span} p={item.p} />
          ))
        }
      </div>
      <div className="buttom">
        <div className="left">

          {
            <img src={`https://jostore2000.000webhostapp.com/upload/projects/${services.profile_image} `} alt='' />

          }
        </div>
        <div className="right">
          <h2>SKILLS</h2>
          <p>This is all the skills listed below more will be added in due time. This is all the skills listed
            below more will be added in due time.
          </p>
          <div className="prog-holder">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About