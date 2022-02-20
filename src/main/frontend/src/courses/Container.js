import React, { useState, useEffect } from 'react';
import Courses from './Courses';
import axios from 'axios';

function CoursesContainer() {
    // Add logic for objects, handling form, and axios communication w/ backend

/* const createCourse = async (e, newCourse) => {
    e.preventDefault();
    let response = await axios.post('http://localhost:808/api/v1/create/course', newCourse)
    .catch(error => console.log(error));
    let availCourse = response.data;
    setCourse((prev) => ({...prev, [courseReponse.id]: courseResponse}) )
}
*/

   const testData = [
        {
            id: 0,
            userId: 1,
            courseName: "Compiler Design"
        },
        {
            id: 1,
            userId: 1,
            courseName: "Capstone"
        }
    ]

    const [courses, setCourses] = useState(testData)
    const [name, setName] = useState("")

    useEffect(() => {
        // use this to first time fetch from axios and fill the courses with setCourse
    })

    const addCourse = (course) => {
        setCourses((previous) => [
            ...previous,
            course
        ])
    }
    
    const deleteCourse = (id) => {
        setCourses(courses.filter((course) => {
            return course.id !== id
        }))
    }

    const handleInput = (event) => {
        setName(event.target.value);
    }

    return ( 
        <div>
        </div>
    )
}


export default CoursesContainer;