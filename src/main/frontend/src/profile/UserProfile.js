import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import ProfileHeaderContainer from '../header/Container';
import EducationContainer from '../education/Container';
import SkillsContainer from '../skills/Container';
import HobbiesContainer from '../hobbies/Container';
import AvailabilityContainer from '../availability/Container';
import SessionsContainer from '../sessions/Container';
import Button from '../button/Button';

function UserProfile(props) { 
    const { userInfo } = props;


    return(
        
        <div id="main-box">
            <ProfileHeaderContainer userInfo={userInfo} />

            <div className="box">
                <EducationContainer userId={userInfo.id} />
            </div>
            
            <div className="box">
                <SkillsContainer userId={userInfo.id}  />

                <hr />

                <HobbiesContainer userId={userInfo.id}  />
            </div>
            
            <div className="box">
                <AvailabilityContainer userId={userInfo.id}  />
            </div>

            <div id="sessionButtons">
                <Button type="submit" value="Study Session" />

                <Button type="submit" value="Hangout Session" />

                <Button type="submit" value="Tutor Session" />
            </div>

            <div className="box" >
                <SessionsContainer userId={userInfo.id} />
            </div>
        </div>
    );
}

export default UserProfile;