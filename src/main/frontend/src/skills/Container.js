import React, { useEffect, useState } from 'react';
import Skills from './Skills';
import { convertArrayToObject } from '../response/Helpers';
import axios from 'axios';

function SkillsContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { userId } = props;
    const [skills, setSkills] = useState({});

    useEffect(() => {
      const getSkills = async () => {
        let response = await axios.post('http://localhost:8080/api/v1/get/skill/all', {userId: userId})
            .catch(error => console.log(error));
        let allSkills = convertArrayToObject(response.data, 'id');
        setSkills(allSkills || {});
      }

        getSkills();
    }, [])

    const createSkill = (newSkill) => {
        return async (e) => {
          e.preventDefault();
          if (newSkill.skill !== '') {
            newSkill = {...newSkill, ['userId']: userId};
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