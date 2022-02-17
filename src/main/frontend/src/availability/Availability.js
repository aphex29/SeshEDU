import React from 'react';
import './Availability.css';
import Button from '../button/Button';

function Availability(props) {

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
            <Button value="EDIT" />
        </div>
    );
}

export default Availability;