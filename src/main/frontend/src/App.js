import React from 'react';
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
  return (
    <div className="App">
      <Router>
            
          <NavBar isLoggedIn={true}/>
         

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/profile" element={<UserProfile />} />
          </Routes>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
