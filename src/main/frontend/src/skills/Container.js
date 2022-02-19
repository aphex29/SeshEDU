import React, { useEffect, useState } from 'react';
import Skills from './Skills';
import axios from 'axios';

function SkillsContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const [skills, setSkills] = useState({});

    useEffect(() => {
        const getSkills = () => {
            let skills = {
                5: {id: 5, userId: 2, skill: "java"},
                8: {id: 8, userId: 2, skill: "python"}
            };
            setSkills(skills);
        }

        getSkills();
    }, [])

    return (
        <div>
            <Skills skills={skills}
            setSkills={setSkills}/>
        </div>
    );
}

export default SkillsContainer;