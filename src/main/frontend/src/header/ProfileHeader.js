import React from 'react';
import './ProfileHeader.css';
import backgroundPic from '../images/desk1.png';
import profilePic from '../images/profile-pic-max.png';

function ProfileHeader(props) {
    const { user, setUser } = props;

    return(
        <div id="profileDetails">

            <img id="backgroundPic" src={backgroundPic} alt="background" />

            <br /> 

            <img id="profilePic" src={profilePic} alt="user profile image" />

            <h1 id="name">{user.name}</h1>

            <p className="username">@{user.username}</p>
        </div> 
    );
}

export default ProfileHeader;