const Skills = () => {
    const lang=['HTML','CSS','JavaScript','ReactJs','Redux','Git'];
  return (
    <div className="skillss" id="skil">
      <h1>SKILLS</h1>
      <div className="lang">
          {lang.map((skill)=>(
            <div className="box"><h6>{skill}</h6></div>
            ))}
      </div>
    </div>
  );
};

export default Skills;
