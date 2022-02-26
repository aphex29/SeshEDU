import React, { useState } from 'react';
import axios from 'axios';
import Sessions from './Sessions';

function SessionsContainer(props) {
    // Add logic for objects, handling form, and axios communication w/ backend
    

    return (
        <div>
            <Sessions city={props.city} />

        </div>
    );
}

export default SessionsContainer;