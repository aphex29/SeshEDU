import React from 'react';
import './UserProfile.css';
import ProfileHeaderContainer from '../header/Container';
import EducationContainer from '../education/Container';
import SkillsContainer from '../skills/Container';
import HobbiesContainer from '../hobbies/Container';
import AvailabilityContainer from '../availability/Container';
import SessionsContainer from '../sessions/Container';
import Button from '../button/Button';

function UserProfile() { 
    return(
        <div id="main-box">
            <ProfileHeaderContainer />

            <div className="box">
                <EducationContainer />
            </div>
            
            <div className="box">
                <SkillsContainer />

                <HobbiesContainer />
            </div>
            
            <div className="box">
                <AvailabilityContainer />
            </div>

            <div id="sessionButtons">
                <Button type="submit" value="Study Session" />

                <Button type="submit" value="Hangout Session" />

                <Button type="submit" value="Tutor Session" />
            </div>

            <div className="box">
                <SessionsContainer />
            </div>
        </div>
    );
}

export default UserProfile;