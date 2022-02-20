import React, { useState } from 'react';
import './Skills.css';
import Button from '../button/Button';
import EditPopup from './popup_editing/EditPopUp';
import NewPopup from './popup_editing/NewPopup';

function Skills(props) {

const [isEditing, setIsEditing] = useState(false);
  const handleEditButtonChange = () => {
      if (isEditing) {
          setIsEditing(false);
      } else {
          setIsEditing(true);
      }
  }
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const getSkillsHTML = (skillsMap) => {
        let skills = []
        for (let key in skillsMap) {
            let skill = skillsMap[key];
            if (skill !== null) {
                skills.push(<li key={skill.id}>{capitalize(skill.skill)}
                {isEditing && <EditPopup
                currSkill={skill}
                deleteSkill={props.deleteSkill}/>} </li>)
            }
            
        };
        return skills;
    }


    return (
        <div>
            <h2>Skills</h2>
            <ul id="skillsList">
                {getSkillsHTML(props.skills)}
            </ul>

           
            {isEditing && <NewPopup 
                createSkill={props.createSkill}
                skills={props.skills}
                />}
                
            <br />

            {!isEditing && <Button value="EDIT" handleClick={handleEditButtonChange} />}
            {isEditing && <Button value="DONE" handleClick={handleEditButtonChange} />}
        </div>
    );
}

export default Skills;