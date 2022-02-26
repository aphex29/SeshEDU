import React, { useState } from 'react';
import logo from './logo.svg';
import  {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './nav/NavBar'
import Home from './home/Home';
import Team from './team/Team';
import UserProfile from './profile/UserProfile';
import Footer from './footer/Footer';

function App() {
  // 
  const [username, setUsername] = useState('notmaxholt');
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="App">
      <Router>
            
          <NavBar isLoggedIn={isLoggedIn} username={username}/>
         

          <Routes>
            <Route exact path="/" element={<Home setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path={"/profile/" + username} element={<UserProfile />} />
          </Routes>

          <Footer isLoggedIn={false} username={username} />
        </Router>
    </div>
  );
}

export default App;
