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

    const createSkill = (newSkill) => {
        return async (e) => {
          e.preventDefault();
          if (newSkill.skill !== '') {
            let response = await axios.post('http://localhost:8080/api/v1/create/skill', newSkill)
            .catch(error => console.log(error));
            let skillResponse = response.data;
            console.log(response.data)
            setSkills((prev) => ({...prev, [skillResponse.id]: skillResponse}));
            }
          }
      }

      const deleteSkill = (skill) => {
        return async (e) => {
          e.preventDefault();
          let response = await axios.post('http://localhost:8080/api/v1/delete/skill', skill)
              .catch(error => console.log(error));
            let newSkills = {...skills};
            delete newSkills[skill.id];
            setSkills(newSkills);
        }
      }

    return (
        <div>
            <Skills 
                skills={skills}
                setSkills={setSkills}
                createSkill={createSkill}
                deleteSkill={deleteSkill}/>
        </div>
    );
}

export default SkillsContainer;