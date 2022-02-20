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
    
    // parse time from Date object to float
    const convertTimeToFloats = (availability) => {
        let parsed = availability;
        for (let key in availability) {
            if (key === 'startTime' || key === 'endTime')  {
                let hours = availability[key].getHours();
                let minutes = availability[key].getMinutes() / 60;
                let time = hours + minutes;
                parsed = {...parsed, [key]:time};
            }
        }
        return parsed;
    }

    // Changes the date format into YYYY-MM-DD
    const parseDate = (date) => {
        let parsedDate = "" + date.getFullYear() + "-";
        let monthStartingAtOne = date.getMonth() + 1;
        if (monthStartingAtOne < 10) {
            parsedDate += "0" + monthStartingAtOne;
        } else {
            parsedDate += monthStartingAtOne;
        }

        let dayOfMonthStartingAtOne = date.getDate() + 1;
        if (dayOfMonthStartingAtOne < 10) {
            parsedDate += "-0" + dayOfMonthStartingAtOne;
        } else {
            parsedDate += "-" + dayOfMonthStartingAtOne;
        }

        // parsedDate += '-' + (date.getDate() + 1);
        return parsedDate;
    }

    /* 
    /api/v1/create/availability

    params: userId, date, startTime, endTime
    */
    const createAvailability = (newAvailability) => { 
        return async (e) => {
            e.preventDefault();
            let parsed = {...newAvailability};
            parsed.date = parseDate(newAvailability.date);
            parsed = convertTimeToFloats(parsed);
            let response = await axios.post('http://localhost:8080/api/v1/create/availability', parsed)
                .catch(error => console.log(error));
            let availResponse = response.data;
            availResponse.date = new Date(availResponse.date);
            setAvailability((prev) => ({...prev, [availResponse.id]: availResponse}))
        } 
    } 

    const updateAvailability = (newAvailability) => { 
        return async (e) => {
            e.preventDefault();
            let parsed = {...newAvailability};
            parsed.date = parseDate(newAvailability.date);
            parsed = convertTimeToFloats(parsed);
            let response = await axios.post('http://localhost:8080/api/v1/update/availability', parsed)
                .catch(error => console.log(error));
            let availResponse = response.data;
            availResponse.date = new Date(availResponse.date);
            setAvailability((prev) => ({...prev, [availResponse.id]: availResponse}))
        } 
    } 

    const deleteAvailability = (oldAvailability) => { 
        return async (e) => {
            e.preventDefault();
            let parsed = {...oldAvailability};
            parsed.date = parseDate(oldAvailability.date);
            parsed = convertTimeToFloats(parsed);
            let response = await axios.post('http://localhost:8080/api/v1/delete/availability', parsed)
                .catch(error => console.log(error));
            let newAvailability = {...availability};
            delete newAvailability[oldAvailability.id];
            setAvailability(newAvailability);
        } 
    } 

    /*
    /api/v1/update/availability/start-time

    params: id, newStartTime
    */
    const updateStartTime = async (e) => {
        
    }
    

    /*
    /api/v1/update/availability/end-time

    params: id, newEndTime
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
            <Availability 
                availability={availability} 
                createAvailability={createAvailability}
                deleteAvailability={deleteAvailability}
                updateAvailability={updateAvailability}/>
        </div>
    );
}


export default AvailabilityContainer;