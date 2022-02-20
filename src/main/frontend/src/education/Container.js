import React, { useState, useEffect } from 'react';
import Education from './Education';
import axios from 'axios';

function EducationContainer() {
    // Add logic for objects, handling form, and axios communication w/ backend
    const [userId, setUserId] = useState(1);
    const [education, setEducation] = useState({});

    useEffect(() => {
        /*
        /api/v1/get/availability

        NOTE: use props.userId to get info for user.

        params: id
        */
        const getEducation = () => {
            let educationMap = {
                1: {id: 1, userId: 3, school: 'DePaul University', degreeType:'Bachelor of Science (BS)', major: 'Computer Science',  startYear: 2018, endYear: 2022}
            }
            setEducation(educationMap);
            // setEducation(educationMap);
            // return async (e) => {
            //     e.preventDefault();
            //     let response = await axios.post('http://localhost:8080/api/v1/create/education', userId)
            //         .catch(error => console.log(error));
            //     let educationResponse = response.data;
            //     console.log(response.data)
            //     setEducation((prev) => ({...prev, [educationResponse.id]: educationResponse}));
            // }
        }

        getEducation();
    }, []);

    const createEducation = (newEducation) => {
        return async (e) => {
            console.log(education);
            e.preventDefault();
            let response = await axios.post('http://localhost:8080/api/v1/create/education', newEducation)
                .catch(error => console.log(error));
            let educationResponse = response.data;
            console.log(response.data)
            setEducation((prev) => ({...prev, [educationResponse.id]: educationResponse}));
        }
         
    } 


    const updateEducation = (newEducation) => {
        return async (e) => {
            console.log(education);
            e.preventDefault();
            let response = await axios.post('http://localhost:8080/api/v1/update/education', newEducation)
                .catch(error => console.log(error));
            let educationResponse = response.data;
            console.log(response.data)
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