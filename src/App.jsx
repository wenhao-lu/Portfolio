import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ProjectLayout from './components/AppLayout';
import Project from './components/Project';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Work from './components/Work';
import Education from './components/Education';
/* 
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Project from './components/Project-v0';
import Work from './components/Work-v0';
import Contact from './components/Contact';
import Footer from './components/Footer';
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Project1 />} />

            <Route path="project" element={<ProjectLayout />}>
              <Route index element={<Project1 />} />
              <Route path="project1" element={<Project1 />} />
              <Route path="project2" element={<Project2 />} />
              <Route path="project3" element={<Project3 />} />
            </Route>

            <Route path="work" element={<Work />} />
            <Route path="education" element={<Education />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
