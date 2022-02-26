import React, { useState } from 'react';
import './Education.css';
import CoursesContainer from '../courses/Container';
import depaulLogo from '../images/depaul-logo.png';
import NewPopup from './popup_editing/NewPopup';
import EditPopup from './popup_editing/EditPopup';
import Button from '../button/Button';

function Education(props) {
    const { education, createEducation, deleteEducation, updateEducation } = props;

    const [isEditing, setIsEditing] = useState(false);
    const handleEditButtonChange = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }


    const getEducationHTML = (educationMap) => {
        if (educationMap === {}) return <div></div>;
        let educationInfo = []
        for (let key in educationMap) {
            let edu = educationMap[key];
            educationInfo.push(
                <div  key={edu.id} className="education-details">
                    <img className="school-logo" src={depaulLogo} alt="DePaul University Logo" />
                    <br />
                    <div><b>{edu.school}</b></div>
                    <br />
                    <div>{edu.degreeType}, {edu.major}</div>
                    <br />
                    <div className="school-years">{edu.startYear} - {edu.endYear}</div>
                    {isEditing && <EditPopup
                        education={education}
                        currEducation={edu}  
                        deleteEducation={deleteEducation}
                        updateEducation={updateEducation}
                        
                        />}
                    <br />
                    <hr />
                    <br /> 
                </div> 
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
             {getEducationHTML(education)}
            </ul>
            

            

            <br />
            {isEditing && 
            <NewPopup 
                creatEducation={createEducation}
                education={education}
            />}
            
            <br />

            {!isEditing && <Button value="EDIT" handleClick={handleEditButtonChange} />}
            {isEditing && <Button value="DONE" handleClick={handleEditButtonChange} />}

            <hr />

            <CoursesContainer />

        </div>
    );
}

export default Education;