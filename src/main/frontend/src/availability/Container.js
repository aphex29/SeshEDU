import React, { useState, useEffect } from 'react';
import Availability from './Availability';
import axios from 'axios';

function AvailabilityContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const [availability, setAvailability] = useState({});

    useEffect(() => {
        /*
        /api/v1/get/availability

        NOTE: use props.userId to get info for user.

        params: id
        */
        const getAvailability = () => {
            let availabilityMap = {
                1: {id: 1, userId: 2, date: new Date(2022, 2, 16), startTime: 12.75, endTime:14.50},
                3: {id: 3, userId: 2, date: new Date(2022, 2, 17), startTime: 10.25, endTime:11.25}
            }
            setAvailability(availabilityMap); 
        }

        getAvailability();
    }, []);
    

    /* 
    /api/v1/create/availability

    params: userId, date, startTime, endTime
    */
    const [newAvailability, setNewAvailability] = useState({
        userId: props.userId,
        date: '',
        startTime: '',
        endTime: ''
    })
    const addAvailability = async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/create/availability', newAvailability)
        .catch(error => console.log(error));
        let availResponse = response.data;
        setAvailability((prev) => ({...prev, [availResponse.id]: availResponse}))
    }

    /*
    /api/v1/update/availability/start-time

    params: id, newStartTime
    */
    const updateStartTime = async (e) => {
        
    }
    

    /*
    /api/v1/update/availability/end-time

    params: id, newStartTime
    */
    const updateEndTime = async (e) => {
        
    }

    /*
    /api/v1/delete/availability

    params: id
    */
    const deletAvailability = async(e) => {

    }

    /* /api/v1/get/available-matches

    params: userId
    */
    const getAvailableMatches = async (e) => {
        
    }

    return (
        <div>
            <Availability availability={availability} />

        </div>
    );
}


export default AvailabilityContainer;