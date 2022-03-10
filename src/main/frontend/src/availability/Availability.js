import React, { useState } from 'react';
import './Availability.css';
import Button from '../button/Button';
import EditPopup from './popup_editing/EditPopup';
import NewPopup from './popup_editing/NewPopup';

function Availability(props) {
    const { availability, createAvailability, deleteAvailability, updateAvailability} = props;

    const [isEditing, setIsEditing] = useState(false);
    const handleEditButtonChange = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    }

    // Convert from decimal to hour of day based on 12-hour clock
    const parseTime = (time) => {
        let hour = parseInt(time) % 12;
        let minute = "" + parseInt((time - parseInt(time)) * 60);
        if (minute < 10) minute = "0" + minute;
        if (hour === 0) hour = 12;
        if (time >= 0 && time < 12) {
            return <span>{"" + hour + ":" + minute + " AM"}</span>;
        } else {
            return <span>{"" + hour + ":" + minute + " PM"}</span>;
        }
    }

    const getAvailHTML = (availableMap) => {
        let availabilityList = []
        for (let key in availableMap) {
            let avail = availableMap[key];
            availabilityList.push(
                <div key={avail.id} className="available-date-card">
                    <div className="available-day-of-week">{new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(avail.date)}</div>
                    <br />
                    <div className="available-date">{new Intl.DateTimeFormat('en-US', {month: 'long'}).format(avail.date)} {avail.date.getDate()}, {avail.date.getFullYear()}</div>
                    <br />
                    <div className="available-time">{parseTime(avail.startTime)} - {parseTime(avail.endTime)}</div>
                    {isEditing && 
                    <EditPopup
                        availability={availability}
                        currAvailability={avail} 
                        deleteAvailability={deleteAvailability}
                        updateAvailability={updateAvailability}
                        />}
                </div>
            )
            
        }
        return availabilityList;
    }


    return (
        <div>
            <h2>Availability</h2>

           {getAvailHTML(availability)}

           <br />

            {isEditing && 
            <NewPopup 
                availability={availability}
                createAvailability={createAvailability}/>}
           <br />

           {!isEditing && <Button value="EDIT" handleClick={handleEditButtonChange} />}
            {isEditing && <Button value="DONE" handleClick={handleEditButtonChange} />}
        </div>
    );
}

export default Availability;