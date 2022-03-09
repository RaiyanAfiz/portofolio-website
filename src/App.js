import './App.css';
import {useState} from 'react'
import Opening from './components/Opening'
import Projects from './components/Projects'

//Import Media
//1920 by 888
import pic1 from './media/GitProfile1.jpg';
import pic2 from './media/GitProfile2.jpg';
import pic3 from './media/GitProfile3.jpg';
import pic4 from './media/GitProfile3.jpg';
import pic5 from './media/GitProfile3.jpg';
import pic6 from './media/GitProfile3.jpg';

const App = () => {
  const [projs] = useState([
    {
        id: 1,
        Title: "Portofolio Website",
        Picture: pic1,
        Description: "The current website you are on. Follow the GitHub link to see the source code.",
        Skills: "React.js, JavaScript, CSS, HTML",
        Link: "https://github.com/RaiyanAfiz/portofolio-website"
    },
  
    {
        id: 2,
        Title: "CTF - Four Player Co-Op",
        Picture: pic2,
        Description: "A four player capture the flag game, with a high-fantasy theme.",
        Skills: "Unity, C#",
        Link: "https://github.com/sell50/GameDesignCourse"
    },
  
    {
        id: 3,
        Title: "City of Windsor - Open Data",
        Picture: pic3,
        Description: "A data management tool that allow the user to quickly navigate and find important information.",
        Skills: "HTML, CSS",
        Link: "https://github.com/sell50/City-of-Windsor-Open-Data"
    },

    {
      id: 4,
      Title: "Bookstore Website",
      Picture: pic4,
      Description: "A mock online book store website.",
      Skills: "PHP, HTML, CSS",
      Link: "https://github.com/RaiyanAfiz/Website"
    },

    {
      id: 5,
      Title: "Project Name",
      Picture: pic5,
      Description: "A LinkedIn inspired developer focused tool that is developer focused.",
      Skills: "React.js, MongoDB, JavaScript, CSS, HTML, Redux",
      Link: "https://github.com/bhagatr11/Reunity"
    },

    {
      id: 6,
      Title: "Java Tic-Tac-Toe",
      Picture: pic6,
      Description: "A terminal based java tic-tac-toe game",
      Skills: "Java",
      Link: "https://github.com/RaiyanAfiz/JavaTicTacToe"
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
