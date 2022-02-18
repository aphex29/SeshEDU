import React from 'react';
import ProfileHeaderContainer from '../header/Container';
import EducationContainer from '../education/Container';
import SkillsContainer from '../skills/Container';
import HobbiesContainer from '../hobbies/Container';
import AvailabilityContainer from '../availability/Container';
import SessionsContainer from '../sessions/Container';

function UserProfile() {
    return(
        <main>
            <h2>Profile</h2>

            <ProfileHeaderContainer />

            <EducationContainer />

            <SkillsContainer />

            <HobbiesContainer />

            <AvailabilityContainer />

            <SessionsContainer />
        </main>
    );
}

export default UserProfile;