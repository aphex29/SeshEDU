import React, { useState } from 'react';
import './Education.css';
import CoursesContainer from '../courses/Container';
import depaulLogo from '../images/depaul-logo.png';
import NewPopup from './popup_editing/NewPopup';
import EditPopup from './popup_editing/EditPopup';
import Button from '../button/Button';

function Education(props) {

    const [isEditing, setIsEditing] = useState(false);
    const handleEditButtonChange = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    const getEducationHTML = (educationMap) => {
        let educationInfo = []
        for (let key in educationMap) {
            let edu = educationMap[key];
            educationInfo.push(
                <li  key={edu.key} className="education-details">
                    <img className="school-logo" src={depaulLogo} alt="DePaul University Logo" />
                    <br />
                    <div><b>{edu.school}</b></div>
                    <br />
                    <div>{edu.degreeType}, {edu.major}</div>
                    <br />
                    <div className="school-years">{edu.startYear} - {edu.endYear}</div>
                    {isEditing && <EditPopup
                        setEducation={props.setEducation}
                        education={props.education}
                        currEducation={edu}  
                        
                        />}
                    <br />
                    <hr />
                    <br /> 
                </li> 
            )
        }
        educationInfo.sort((a, b) => {
            return a.endYear - b.endYear;
        })
        return educationInfo.reverse();
    }

    return(
        <div>

            <h2>Education</h2>

            <ul>
             {getEducationHTML(props.education)}
            </ul>
            

            <CoursesContainer />

            <br />
            {isEditing && <NewPopup 
            setEducation={props.setEducation}
            createEducation={props.createEducation}/>}
            
            <br />

            <Button value="EDIT" handleClick={handleEditButtonChange} />

        </div>
    );
}

export default Education;