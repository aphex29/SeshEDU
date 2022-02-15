import React, { useState } from 'react';
import NewAccountForm from './NewAccountForm';
import axios from 'axios';

function NewAccountFormContainer() {
    // Add logic for objects, handling form, and axios communication w/ backend

    return (
        <div>
            <h2 id="createAccountHeader">Create Account</h2>

            <NewAccountForm />

        </div>
    );
}  

export default NewAccountFormContainer;