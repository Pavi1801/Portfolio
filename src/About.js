import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
function About() {
    return (
        <div className="about-center">
            <h1>
                Hi, I am <span > Pavithra </span> <span>Yadavar</span>
            </h1>
            <h2>A Front End Engineer</h2>
            <p>
                To work in firm with a professional work driven environment where I can
                utilize and apply my knowledge, skills which would enable me as a fresh
                Front End Developer to grow while fulfilling organizational goals.
            </p>
            <div className="about-contact">
                <button >Resume</button>
                <a href="https://github.com/Pavi1801" >
                    <FaGithub size={32}
                    onMouseOver={({target})=>target.style.color='#2978b5'}
                    onMouseOut={({target})=>target.style.color='#444'}
                    /></a>
                <a href="https://www.linkedin.com/in/pavithra-yadavar-6a446516b">
                    <FaLinkedinIn size={32}
                    onMouseOver={({target})=>target.style.color='#2978b5'}
                    onMouseOut={({target})=>target.style.color='#444'}
                    /></a>
            </div>
        </div>
    );
}

export default About;
