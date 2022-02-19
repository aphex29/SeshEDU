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

    const getSkillsHTML = (skillsMap) => {
        let skills = []
        for (let key in skillsMap) {
            let skill = skillsMap[key];
            skills.push(<li key={skill.id}>{skill.skill}
            {isEditing &&<EditPopup
            setSkills={props.setSkills}
            currSkill={skill}/>} </li>)
        };
        return skills;
    }


    return (
        <div>
            <h2>Skills</h2>
            <ul id="skillsList">
                {getSkillsHTML(props.skills)}
            </ul>

            <br />
            {isEditing && <NewPopup 
            setSkills={props.setSkills}
            createSkill={props.createSkill}/>}
            <br />

            <Button value="EDIT" handleClick={handleEditButtonChange} />
        </div>
    );
}

export default Skills;