import React, { useState } from 'react';
import './ProfileHeader.css';
import backgroundPic from '../images/desk1.png';
import profilePic from '../images/profile-pic-max.png';
import PortraitIcon from '@mui/icons-material/Portrait';

function ProfileHeader(props) {
    
    const { userInfo } = props;
    
    const checkName = () => {
        return userInfo.name.toLowerCase() === "max holt";
    }

    const [isMax, setIsMax] = useState(checkName())

    

    return(
        <div id="profileDetails">

            <img id="backgroundPic" src={backgroundPic} alt="background" />

            <br /> 

            {isMax && <img id="profilePic" src={profilePic} alt="user profile image" />}

            {!isMax && <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />}

            <h1 id="name">{userInfo.name}</h1>

            <p className="username">@{userInfo.username}</p>
        </div> 
    );
}

export default ProfileHeader;