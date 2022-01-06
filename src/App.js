import './App.css';
import {useState} from 'react'
import Opening from './components/Opening';
import Projects from './components/Projects';

//Import Media
import pic1 from './media/GitProfile1.jpg';
import pic2 from './media/GitProfile2.jpg';
import pic3 from './media/GitProfile3.jpg';

const App = () => {
  const [projs] = useState([
    {
        id: 1,
        Title: "Project Name",
        Picture: pic1,
        Description: "The description",
        Skills: "Skills Used",
        Link: "Link to GitHub"
    },
  
    {
        id: 2,
        Title: "Project Name",
        Picture: pic2,
        Description: "The description",
        Skills: "Skills Used",
        Link: "Link to GitHub"
    },
  
    {
        id: 3,
        Title: "Project Name",
        Picture: pic3,
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
