import './App.css'
import ProjectControlPanel from './components/project_control_panel/ProjectControlPanel'
import ProjectView from './components/project_view/ProjectView'

function App() {
  return (
    <div className='app-wrapper'>
      <h1 className='main-title'>TODO Manager</h1>
      <div className="project-wrapper">
        <ProjectControlPanel/>
        <ProjectView/>
      </div>
    </div>
  )
}

export default App
