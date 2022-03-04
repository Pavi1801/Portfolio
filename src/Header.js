import { MdModeNight } from "react-icons/md";
const Header = ({ theme, changeTheme }) => (
  <div className="header">
    <h1>
      <a href="/">PY.</a>
    </h1>
    <div className="links">
      <a href="#proj">Projects</a>
      <a href="#skil">Skills</a>
      <a href="#cont">Contact</a>
      <span
        onClick={() => {
          changeTheme(theme);
        }}
        className="toggle"
      >
        <MdModeNight
          size={26}
          onMouseOver={({ target }) => (target.style.color = "#2978b5")}
          onMouseOut={({ target }) => (target.style.color = "#444")}
        />
      </span>
    </div>
  </div>
);

export default Header;
