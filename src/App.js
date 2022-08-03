import "./App.css";
import Couch from "./iconComponents/Couch";
import Bird from "./iconComponents/bird";
import Anime from "./component/video/anime.mp4";

function App() {
  return (
    <>
      <div>
        <video id="myVideo" autoPlay loop muted>
          <source src={Anime} type="video/mp4" />
        </video>
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Login</a>
            </li>
            <li className="nav-item">
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </nav>
        <Bird />
        <Couch />
      </div>
    </>
  );
}

export default App;
