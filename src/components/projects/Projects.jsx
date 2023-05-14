import './Projects.css'
// projects
import promote from '../../images/promote.png'
import write from '../../images/write.png'
import design from '../../images/design.png'
import develop from '../../images/develop.png'
import ProjectSLlice1 from './ProjectSlice1/ProjectSlice1'
import PhotoProject1 from './photoproj/PhotoProect1'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Projects = () => {
  const projects =[
    {
      icon: design,
      name: 'Design',
      description: 'Make mobile applications screens with different flutter widget'
    },
    {
      icon: develop,
      name: 'Develop',
      description: 'Develop android and ios mobile applications with flutter frame work'
    },
    {
      icon: write,
      name: 'Write',
      description: 'Write clean code with dart language & and use mvc design patern'
    },
    {
      icon: promote,
      name: 'Proplem Solving',
      description: 'Very good at solving proplem and find the best solution in less time possible'
    },
  ]
  const {services} = useSelector((state) => state.data)
  return (

    <>
    <div className='projects' id='projects'>
      <div className="top">
        <div className="top1">
          <h2>Better Coding,<br />Better Experinces</h2>
          {
            [services].map((item)=>(
              <Link key={3} to={item.cv_link}>Download cv</Link>
            ))
          }
        </div>
        <div className="buttom1">
          
          {
            projects.map((item)=>(
              <ProjectSLlice1 key={item.name} icon={item.icon} name={item.name} description={item.description}/>
            ))
          }
        </div>
      </div>
      <div className="buttom">
        <h2>My Projects :</h2>
      </div>
    </div>
    <div className="projectss">
      <PhotoProject1 />
    </div></>
  )
}

export default Projects