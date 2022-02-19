import React, { useState, useEffect } from 'react';
import Hobbies from './Hobbies';
import axios from 'axios';

function HobbiesContainer() {
    const [hobbies, setHobbies] = useState({});
  
    useEffect(() => {
      // will use axios here to grab data from backend
      const getHobbies = () => {
        let hobbies = {
          5: {id: 5, userId: 2, hobby: "hiking"},
          8: {id: 8, userId: 2, hobby: "cycling"}
        };
        setHobbies(hobbies);
      }
  
      getHobbies();
    }, [])
  
    return(
      <div>
        
        <Hobbies hobbies={hobbies}
          setHobbies={setHobbies}
           />
      </div>
    );
  }
  
  export default HobbiesContainer;