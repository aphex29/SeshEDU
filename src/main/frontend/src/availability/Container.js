import React, { useState, useEffect } from 'react';
import Availability from './Availability';
import { convertArrayToObject } from '../response/Helpers';
import axios from 'axios';

function AvailabilityContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    const { userId } = props;
    const [availability, setAvailability] = useState({});

    useEffect(() => {
        const getAvailability = async () => {
            let response = await axios.post('http://localhost:8080/api/v1/get/availability/all', {userId: userId})
                .catch(error => console.log(error));
            if (response != null) {
                let allAvailability = convertArrayToObject(response.data, 'id');
                for (let key in allAvailability) {
                    allAvailability[key].date = "" + allAvailability[key].date + "T00:00-0800";
                    allAvailability[key].date = new Date(allAvailability[key].date)
                }
                setAvailability(allAvailability || {});
            }  
        }

        getAvailability();
    }, [userId]);
    
    // parse time from Date object to float for sending to backend
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

        let dayOfMonthStartingAtOne = date.getDate();
        if (dayOfMonthStartingAtOne < 10) {
            parsedDate += "-0" + dayOfMonthStartingAtOne;
        } else {
            parsedDate += "-" + dayOfMonthStartingAtOne;
        }
        return parsedDate;
    }

    /* 
    /api/v1/create/availability

    params: userId, date, startTime, endTime
    */
    const createAvailability = (newAvailability) => { 
        return async (e) => {
            e.preventDefault();
            let parsed = {...newAvailability, ['userId']: userId};
            parsed.date = parseDate(newAvailability.date);
            parsed = convertTimeToFloats(parsed);
            let response = await axios.post('http://localhost:8080/api/v1/create/availability', parsed)
                .catch(error => console.log(error));
            let availResponse = response.data;
            availResponse.date = "" + availResponse.date + "T00:00-0800"
            availResponse.date = new Date(availResponse.date)
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
            availResponse.date = "" + availResponse.date + "T00:00-0800"
            availResponse.date = new Date(availResponse.date)
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