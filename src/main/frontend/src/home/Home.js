import React from 'react';
import './Home.css';
import LoginFormContainer from '../account/login/Container';
import NewAccountFormContainer from '../account/new_account/Container';
import look from '../lookStep.png';
import plan from '../planStep.png';
import go from '../goStep.png';
import greenDesk from '../deskgreen.png';

function Home(props) {
    const { isLoggedIn, setIsLoggedIn, setUserInfo } = props;
    
    return(
        <main>
            <img id = "greenDesk" src = {greenDesk} alt = "green desk" /> 
            <div id="sloganDiv">
                 <p>WHERE THE ACADEMIC COMMUNITY MEETS</p>
            </div>

            <div id="detailDiv">
                <h1>How <span id="edu1">Sesh</span>EDU Works</h1>

                <div className='theme-card'>
                    <img id = "mapPic" src = {look} alt = "picture of map" />;
                    <h2>Look</h2>
                    <p>Look and search for other students nearby in your area with
                        same interests and/or studies</p>
                 </div>

                <div className="theme-card">
                    <img id = "planPic" src = {plan} alt="a person messaging"/>
                    <h2>Plan</h2>
                    <p>Plan to meet with others you connect with on SeshEDU at a
                        library, cafe, etc.</p>
                </div>

                <div className='theme-card'>
                    <img id = "studyPic" src = {go} alt="people studying"/>
                    <h2>Go</h2>
                    <p>Arrive and connect with other students! Meet, study, network
                        or hang out again!</p>
                </div>
                <div id="aboutDiv">
                    <h1>About Us</h1>

                    <p>Getting to know people in college is often hard enough without a pandemic.</p>

                    <h2>Purpose Of App</h2>

                    <p>The purpose of our app is to overcome the challenge of socializing in college</p>

                    <h2>Why We Created It</h2>

                    <p>We created this concept for our app to help students make friends through social
                        networking and meet with other individuals from neighboring colleges whether
                        they share the same major, interests, hobbies or career professions</p>

                    <p>With the rise of smartphone applications and its impact on human emotion,
                        GreenEDU was born out of this moment in technology. My specific research is
                        in areas of artificial intelligence models of human emotion, computational models
                        of personality, cognitive neuroscience and more. GreenEDU leads diversified individuals
                        of neighboring colleges, universities to come together and network, talk and share
                        aspects of each other's lives physically. With millions of students worldwide,
                        GreenEDU connects to find those in your community meant for you.</p>
                </div>
             </div>
             {!isLoggedIn &&
                <div id = "formAlign">
                    <div className='accountBox'>
                        <NewAccountFormContainer setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />
                    </div>

                    <div className='accountBox'>
                        <LoginFormContainer setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />
                    </div>
                </div>}
        </main>
    );
}

export default Home;