import React, { useState, useEffect } from 'react';
import Education from './Education';
import axios from 'axios';

function EducationContainer() {
    // Add logic for objects, handling form, and axios communication w/ backend
    const [education, setEducation] = useState({
        1: {id: 1, userId: 2, school: 'DePaul University', degreeType:'Bachelor of Science (BS)', major: 'Computer Science',  startYear: 2017, endYear: 2021},
        2: {id: 2, userId: 2, school: 'DePaul University', degreeType:'Master of Science (MS)', major: 'Computer Science',  startYear: 2021, endYear: 2025}
    });

    // useEffect(() => {
    //     /*
    //     /api/v1/get/availability

    //     NOTE: use props.userId to get info for user.

    //     params: id
    //     */
    //     const getEducation = () => {
    //         let educationMap = {
    //             1: {id: 1, userId: 2, school: 'DePaul University', degreeType:'Bachelor of Science (BS)', major: 'Computer Science',  startYear: 2017, endYear: 2021},
    //             2: {id: 2, userId: 2, school: 'DePaul University', degreeType:'Master of Science (MS)', major: 'Computer Science',  startYear: 2021, endYear: 2025}
    //         }
            
            
    //     }

    //     getEducation();
    // }, [education]);


    const deleteEducation = (id) => {
        setEducation((prev) => ({...prev, [id]:undefined}))
    }


    return (
        <div>
            <Education 
            education={education} 
            setEducation={setEducation} 
            />
        </div>
    );
}

export default EducationContainer;