import React from 'react';
import './Hobbies.css';
import Button from '../button/Button';

function Hobbies(props) {

    const getHobbiesHTML = (hobbiesMap) => {
      let hobbies = []
      for (let key in hobbiesMap) {
        let hobby = hobbiesMap[key];
        hobbies.push(<li key={hobby.id}>{hobby.hobby}</li>)
      };
      return hobbies;
    }
    
    return (
      <div>
        <h2>Hobbies</h2>
        <ul>
          {getHobbiesHTML(props.hobbies)}
        </ul>
  
        <br />
        <Button value="EDIT" />
      </div>
    );
  }

export default Hobbies;