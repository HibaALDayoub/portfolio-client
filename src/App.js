import  './App.css'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import About from './components/aboutme/About'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials.jsx'




const App = () => {
  return (
    <div className='app'>
      <Topbar />
      <div className='section'>
        <Intro />
        <Projects />
        <Services />
        <About />
        <Testimonials />

        {/* <Form/> */}
      </div>
    </div>
  )
}

export default App














