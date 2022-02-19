import React, { useState } from 'react';
import './Hobbies.css';
import Button from '../button/Button';
import NewPopup from './popup_editing/NewPopup';
import EditPopup from './popup_editing/EditPopup';


function Hobbies(props) {

  const [isEditing, setIsEditing] = useState(false);
  const handleEditButtonChange = () => {
      if (isEditing) {
          setIsEditing(false);
      } else {
          setIsEditing(true);
      }
  }

    const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const getHobbiesHTML = (hobbiesMap) => {
      let hobbies = []
      for (let key in hobbiesMap) {
        let hobby = hobbiesMap[key];
        hobbies.push(<li key={hobby.id}>{capitalize(hobby.hobby)}
        {isEditing && <EditPopup
          setHobbies={props.setHobbies}
          currHobby={hobby}/>}
          </li>)
      };
      return hobbies;
    }
    
    return (
      <div>
        <h2>Hobbies</h2>
        <ul id="hobbiesList">
          {getHobbiesHTML(props.hobbies)}
        </ul>
  
       
        {isEditing && <NewPopup 
          setHobbies={props.setHobbies}
          createHobbies={props.createHobbies}/>}
       <br />

        {!isEditing && <Button value="EDIT" handleClick={handleEditButtonChange} />}
        {isEditing && <Button value="DONE" handleClick={handleEditButtonChange} />}

      </div>
    );
  }

export default Hobbies;