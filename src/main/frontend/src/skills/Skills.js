import React from 'react';
import './Skills.css';
import Button from '../button/Button';

function Skills(props) {

    const getSkillsHTML = (skillsMap) => {
        let skills = []
        for (let key in skillsMap) {
            let skill = skillsMap[key];
            skills.push(<li key={skill.id}>{skill.skill}</li>)
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
            <Button value="EDIT" />
        </div>
    );
}

export default Skills;