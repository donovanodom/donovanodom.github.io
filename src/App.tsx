import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Algorithms from "./components/algorithms/Algorithms"
import NavBar from "./components/navbar/NavBar"
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import WriteUps from './components/write-ups/WriteUps';
import AlgorithmDetails from './components/algorithms/AlgorithmDetails';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {

  return ( 
    <Router basename={import.meta.env.BASE_URL}> 
        <NavBar/>
        <div className="md:px-28 md:py-16 px-4 py-2 md:mt-14 mt-20">
          <Routes>
              <Route path='/' element={<AboutMe/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/projects/:slug' element={<ProjectDetails/>} />
              <Route path='/algorithms' element={<Algorithms/>} />
              <Route path='/algorithms/:slug' element={<AlgorithmDetails/>} />
              <Route path='/write-ups' element={<WriteUps/>} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
