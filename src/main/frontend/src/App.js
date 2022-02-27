import React, { useState, useEffect } from 'react';
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
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className="App">
      <Router>
            
          <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={userInfo.username}/>
         

          <Routes>
            <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path={"/profile/" + userInfo.username} element={<UserProfile userInfo={userInfo}  />} />
          </Routes>

          <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={userInfo.username} />
        </Router>
    </div>
  );
}

export default App;
