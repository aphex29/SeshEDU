import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import axios from 'axios';

function ProfileHeaderContainer() {
    // Add logic for objects, handling form, and axios communication w/ backend
    const [user, setUser] = useState({});

    useEffect(() => {
        /*
        /api/v1/get/availability

        NOTE: use props.userId to get info for user.

        params: id
        */
        const getUser = () => {
            let userMap = {id: 1, userId: 2, username: 'notmaxholt', name:'Max Holt', email: 'maxholt@faekemail.com'}
            setUser(userMap); 
        }

        getUser();
    }, []);


    return(
        <div>

            <ProfileHeader user={user} setUser={setUser} />
            
        </div>
    );
}

export default ProfileHeaderContainer;