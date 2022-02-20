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

    const createHobby = (newHobby) => {
      return async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/create/hobby', newHobby)
            .catch(error => console.log(error));
        let hobbyResponse = response.data;
        console.log(response.data)
        setHobbies((prev) => ({...prev, [hobbyResponse.id]: hobbyResponse}));
      }
    }

    const deleteHobby = (hobby) => {
      return async (e) => {
        e.preventDefault();
        let response = await axios.post('http://localhost:8080/api/v1/delete/hobby', hobby)
            .catch(error => console.log(error));
          let newHobbies = {...hobbies};
          delete newHobbies[hobby.id];
          setHobbies(newHobbies);
      }
    }
  
    return(
      <div>
        
        <Hobbies 
          setHobbies={setHobbies}
          hobbies={hobbies}
          createHobby={createHobby}
          deleteHobby={deleteHobby}
           />
      </div>
    );
  }
  
  export default HobbiesContainer;