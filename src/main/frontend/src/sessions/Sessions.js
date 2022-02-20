import React from 'react';
import './Sessions.css';
import Button from '../button/Button';
import PortraitIcon from '@mui/icons-material/Portrait';

function Sessions(props) {
    return (
        <div>
            <div id="nearbyStudents">
                <h2>Nearby Students</h2>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p>Not Ethan</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}   />
                    <p>Not Thomas</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px",color: "#1390d8" }}  />
                    <p>Not Raina</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p>Not Patrick</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p>Not Clara</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p>Not Nick</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p>Not Nate</p>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p>Not Marek</p>
                </div>
            </div> 

            <Button value="Find Available Matches" />
        </div>
    );
}

export default Sessions;