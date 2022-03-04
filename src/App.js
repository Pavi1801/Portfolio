import { useState } from "react";
import './index.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (currentTheme) => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div className={`App ${theme==="dark"?"dark":"light"}`}>
     <Header theme={theme} changeTheme={changeTheme}/>                                     
       <About/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
