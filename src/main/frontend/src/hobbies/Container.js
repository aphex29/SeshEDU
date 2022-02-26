import React, { useState, useEffect } from 'react';
import Hobbies from './Hobbies';
import { convertArrayToObject } from '../response/Helpers';
import axios from 'axios';

function HobbiesContainer(props) {
    const { userId } = props;
    const [hobbies, setHobbies] = useState({});
  
    useEffect(() => {
      const getHobbies = async () => {
        let response = await axios.post('http://localhost:8080/api/v1/get/hobby/all', {userId: userId})
          .catch(error => console.log(error));
        let allHobbies = convertArrayToObject(response.data, 'id')
        setHobbies(allHobbies || {});
      }
      
      getHobbies();
    }, [])

    const createHobby = (newHobby) => {
      return async (e) => {
        e.preventDefault();
        if (newHobby.hobby !== '') {
          newHobby = {...newHobby, ['userId']:userId}
          let response = await axios.post('http://localhost:8080/api/v1/create/hobby', newHobby)
            .catch(error => console.log(error));
          let hobbyResponse = response.data;
          setHobbies((prev) => ({...prev, [hobbyResponse.id]: hobbyResponse}));
        }
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