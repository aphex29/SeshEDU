import React from 'react';
import './Team.css';
import Clara from '../images/clara.PNG'
import Nate from '../images/nate.jpg'
import Mark from '../images/mark.JPG'
import Ethan from '../images/ethan.jpeg'
import Raina from '../images/raina.jpeg'
import Nick from '../images/nick.png'
import Tom from '../images/thomas.jpeg'
import Chris from '../images/chris.PNG'
import Patrick from '../images/patrick.PNG'

function Team(props) {
    let members = [
        {
            name: 'Ethan',
            img: Ethan,
            job: 'Project Manager'
        },
        {
            name: 'Clara',
            img: Clara,
            job: 'Documentation Manager'
        },
        
        {
            name: 'Nate',
            img: Nate,
            job: 'Requirements Manager'
        },
        {
            name: 'Marek',
            img: Mark,
            job: 'Unix Systems Manager'
        },
        {
            name: 'Raina',
            img: Raina,
            job: 'Design Manager'
        },
        {
            name: 'Nick',
            img: Nick,
            job: 'Presentation Manager'
        },
        {
            name: 'Chris',
            img: Chris,
            job: 'Video/Media Manager'
        },
        {
            name: 'Patrick',
            img: Patrick,
            job: 'Collaboration Software Manager'
        },
        {
            name: 'Tom',
            img: Tom,
            job: 'Implementation Manager'
        }
    ]

    return (
        <main>
            <h2 id="teamHeader">Team</h2>
            <div className="team-members" >
                {
                    members.map((member) => {
                        return (<div className="member" key={member.name}>
                            <img src={member.img} alt={member.name} />
                            <h2>{member.name}</h2>
                            <p>{member.job}</p>
                        </div> )
                    })
                }    
            </div>
        </main>
    );
}

export default Team;