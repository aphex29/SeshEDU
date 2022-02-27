import React, { useState } from 'react';
import './Sessions.css';
import Button from '../button/Button';
import PortraitIcon from '@mui/icons-material/Portrait';

function Sessions(props) {
    const [location, setLocation] = useState({
        city: "",
        state: ""
    });
    const [isShowingMatches, setIsShowingMatches] = useState(false);

    const handleClick = () => {
        if (!isShowingMatches) {
            setIsShowingMatches(true)
        } else {
            setIsShowingMatches(false);
        }
    }

    const handleLocationChange = ({ target }) => {
        const { name, value } = target;
        setLocation((prev) => ({...prev, [name]: value}));
    }

    const alertBookedSession = () => {
        alert("Session booked!")
    }

    const showMatches = () => {
        return (
            <div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Molly Sol</b></p>
                    <div className="username">@heartandsol</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                    
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}   />
                    <p><b>Christopher Jenkins</b></p>
                    <div className="username">@chrisjenk</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px",color: "#1390d8" }}  />
                    <p><b>Byron Edwards</b></p>
                    <div className="username">@byronnnnnn</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p><b>Alex Rodriguez</b></p>
                    <div className="username">@rodeodrive22</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Jessica Simmons</b></p>
                    <div className="username">@justjess</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Larry Moore</b></p>
                    <div className="username">@morelarry_1</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p><b>Peter Welsh</b></p>
                    <div className="username">@peter_dabest</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>


                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Katy Alexander</b></p>
                    <div className="username">@katygo</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Mira Marshall</b></p>
                    <div className="username">@marshmarsh</div>
                    <br/>
                    <div>{location.city}</div>
                    <Button handleClick={alertBookedSession} value="Book Session" />
                </div>
            
            </div>
        )
    }

    

    return (
        <div>
            <div id="nearbyStudents">
                <h2>Nearby Students</h2>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Not Ethan</b></p>
                    <div className="username">@notEthan</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}   />
                    <p><b>Not Chris</b></p>
                    <div className="username">@notChris</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px",color: "#1390d8" }}  />
                    <p><b>Not Raina</b></p>
                    <div className="username">@notRaina</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p><b>Not Patrick</b></p>
                    <div className="username">@notPatrick</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Not Nate</b></p>
                    <div className="username">@notNate</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Not Clara</b></p>
                    <div className="username">@notClara</div>
                </div>

                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}} />
                    <p><b>Not Nick</b></p>
                    <div className="username">@notNick</div>
                </div>


                <div className="nearby-people">
                    <PortraitIcon style={{fontSize: "125px", color: "#1390d8"}}  />
                    <p><b>Not Marek</b></p>
                    <div className="username">@notMarek</div>
                </div>
            </div> 

            <hr />

            <h2>Matches</h2>

            <form id="cityForm">
                <input 
                    type="text"
                    id="txtCity"
                    placeholder="City"
                    name="city"
                    value={location.city}
                    onChange={handleLocationChange}
                    required />

                <input 
                    type="text"
                    id="txtState"
                    placeholder="State"
                    name="state"
                    value={location.state}
                    onChange={handleLocationChange}
                    required /> 
            </form>
            
            {!isShowingMatches && <Button type="button" handleClick={handleClick}  value="Find Available Matches" />}
            {isShowingMatches && <Button type="button" handleClick={handleClick}  value="Hide Available Matches" />}

            {isShowingMatches && showMatches()}
        </div>
    );
}

export default Sessions;