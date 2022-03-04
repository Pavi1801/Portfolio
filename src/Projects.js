import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Tic-Tac-Toe",
      body: "Here user can play according to thier chances and finally winning alert is poped which states whether the match is won by either of the player or match is made draw",
      gith:"https://github.com/Pavi1801/Tictactoe.git",
      launch:"https://pavi1801.github.io/Tictactoe/"
    },
    {
      id: 2,
      title: "Calculator",
      body: "Here user calculates the value using basic operators like add,sub,mul ,percentage finder,backarrow and final value is been displayed under display screen",
      gith:"https://github.com/Pavi1801/Calculator1.git",
      launch:"https://pavi1801.github.io/Calculator1/"
    },
    {
      id: 3,
      title: "To-Do List",
      body: "Here user can add the list of items he/she wants to do in a day also they can strikeout after completion of perticular task also can delete the completed task .",
      gith:"https://github.com/Pavi1801/ToDoList.git",
      launch:"https://pavi1801.github.io/ToDoList/"
    },
  ];
  
  return (
    <div className="project" id="proj">
      <h1>PROJECTS</h1>
      <div className="project-discription">
      {projectData.map((data)=>(
        <div className="project-1" key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <div className="languages">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
          </div>
          <div className="github-links">
            <a href={data.gith}>
              <FaGithub size={32} 
                onMouseOver={({target})=>target.style.color='#2978b5'}
                onMouseOut={({target})=>target.style.color='#444'}
              />
            </a>
            <a href={data.launch}>
              <MdLaunch size={32} 
                onMouseOver={({target})=>target.style.color='#2978b5'}
                onMouseOut={({target})=>target.style.color='#444'}
              />
            </a>
          </div>
        </div>
         ))}
      </div>
    </div>
  );
};

export default Projects;
