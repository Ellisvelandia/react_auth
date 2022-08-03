import "./App.css";
import Couch from "./iconComponents/Couch";
import Bird from "./iconComponents/bird";
import Anime from "./component/video/anime.mp4";
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogouButton";
import Profile from "./component/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div>
        <video id="myVideo" autoPlay loop muted>
          <source src={Anime} type="video/mp4" />
        </video>
        <main className="column">
          <h1>Auth0 Login</h1>
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              <Profile />
            </>
          )}
        </main>
        <Bird />
        <Couch />
      </div>
    </>
  );
}

export default App;
