import React, { useState } from 'react';
import './Availability.css';
import Button from '../button/Button';
import EditPopup from './popup_editing/EditPopup';
import NewPopup from './popup_editing/NewPopup';

function Availability(props) {

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

    const [openPopup, setOpenPopup] = useState(false);
    const getAvailHTML = (availableMap) => {
        let availability = []
        for (let key in availableMap) {
            let avail = availableMap[key];
            availability.push(
                <div key={avail.key} className="available-date-card">
                    <div className="available-day-of-week">{new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(avail.date)}</div>
                    <br />
                    <div className="available-date">{new Intl.DateTimeFormat('en-US', {month: 'long'}).format(avail.date)} {avail.date.getDate()}, {avail.date.getFullYear()}</div>
                    <br />
                    <div className="available-time">{parseTime(avail.startTime)} - {parseTime(avail.endTime)}</div>
                    {isEditing && <EditPopup
                        availability={props.availability}
                        currAvailability={availableMap[key]} 
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                        setAvailability={props.setAvailability}
                        updateStartTime={props.updateStartTime}
                        updateEndTime={props.updateEndTime}
                        deletAvailability={props.deletAvailability}
                        />}
                </div>
            )
            
        }
        return availability;
    }


    return (
        <div>
            <h2>Availability</h2>

           {getAvailHTML(props.availability)}

           <br />

            {isEditing && <NewPopup 
            setAvailability={props.setAvailability}
            createAvailability={props.createAvailability}/>}

           <br />

           <Button handleClick={handleEditButtonChange} value={"EDIT"}/>
        </div>
    );
}

export default Availability;