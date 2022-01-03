import './App.css';
import {useState} from 'react'
import Opening from './components/Opening';
import Projects from './components/Projects';

const App = () => {
  const [projs] = useState([
    {
        id: 1,
        Title: "Project Name",
        Picture: "Picture",
        Description: "The description",
        Skills: "Skills Used",
        Link: "Link to GitHub"
    },
  
    {
        id: 2,
        Title: "Project Name",
        Picture: "Picture",
        Description: "The description",
        Skills: "Skills Used",
        Link: "Link to GitHub"
    },
  
    {
        id: 3,
        Title: "Project Name",
        Picture: "Picture",
        Description: "The description",
        Skills: "Skills Used",
        Link: "Link to GitHub"
    }
  ])

  return (
    <div>
      <Opening/>
      <Projects projs={projs}/>
    </div>
  )
}

export default App
