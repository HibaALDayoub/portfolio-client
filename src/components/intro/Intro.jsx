import './intro.css'
import {init} from 'ityped';
import { useEffect , useRef} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Intro = () => {
  const txtRef = useRef();
  useEffect(()=>{
    init(txtRef.current, {
      showCursor: false,
      backDelay:  1500,
      backSpeed:  60,
      strings: ["Flutter developer" ,'A Mobile Application Developer' ],
    })
  },[])
  const {services} = useSelector((state) => state.data)
  return (
    <div className='intro' id='intro'>

      <div className="left">
        <div className="wrapper">
          <h3>Flutter Developer</h3>
          <h1>Mhamad </h1>
          <h1>Ibrahem</h1>
          <span className='span' ref={txtRef}></span><h4>,based in Tartous</h4>
          <h4>Need a full custom Mobile application?<span>Got a project?Let's talk</span></h4>
          <div className="btn">

          <div className="inner"></div>
          <Link to={services.profile_contact}>GET STARTED</Link>
          </div>
        </div>
      </div>
      <div className="right">
        {
          <img src={`https://jostore2000.000webhostapp.com/upload/projects/${services.profile_image} `}alt='' />
        }
          
      </div>
    </div>
  )
}

export default Intro