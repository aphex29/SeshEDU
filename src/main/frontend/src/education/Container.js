import React, { useState, useEffect } from 'react';
import Education from './Education';
import { convertArrayToObject } from '../response/Helpers';
import axios from 'axios';

function EducationContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { userId } = props;
    const [education, setEducation] = useState({});

    useEffect(() => {
        const getEducation = async () => {
            let response = await axios.post('http://localhost:8080/api/v1/get/education', {userId: userId})
                .catch(error => console.log(error));
            let allEducation = convertArrayToObject(response.data, 'id');
            setEducation(allEducation || {});
        }
        
        getEducation()
    }, []);

    const createEducation = (newEducation) => {
        return async (e) => {
            newEducation = {...newEducation, ['userId']: userId}
            console.log(newEducation);
            e.preventDefault();
            let response = await axios.post('http://localhost:8080/api/v1/create/education', newEducation)
                .catch(error => console.log(error));
            let educationResponse = response.data;
            console.log(response.data)
            setEducation((prev) => ({...prev, [educationResponse.id]: educationResponse}));
        }
         
    } 

    const updateEducation = (updatedEducation) => {
        return async (e) => {
            e.preventDefault();
            let response = await axios.post('http://localhost:8080/api/v1/update/education', updatedEducation)
                .catch(error => console.log(error));
            let educationResponse = response.data;
            setEducation((prev) => ({...prev, [educationResponse.id]: educationResponse}));
        }
         
    } 

    const deleteEducation = (oldEducation) => {
        return async (e) => {
          e.preventDefault();
          let response = await axios.post('http://localhost:8080/api/v1/delete/education', oldEducation)
              .catch(error => console.log(error));
            let newEducation = {...education};
            delete newEducation[oldEducation.id];
            setEducation(newEducation);
        }
    }

    return (
        <div> 
            <Education 
            education={education} 
            updateEducation={updateEducation} 
            createEducation={createEducation}
            deleteEducation={deleteEducation}
            />
        </div>
    );
}

export default EducationContainer;