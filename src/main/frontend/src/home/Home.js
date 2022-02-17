import React from 'react';
import './Home.css';
import LoginFormContainer from '../account/login/Container';
import NewAccountFormContainer from '../account/new_account/Container';

function Home() {
    
    return(
        <main>
                <h2>Home</h2>
                
                <div className='accountBox'>
                <NewAccountFormContainer />
                </div>

                <div className='accountBox'>
                <LoginFormContainer />
                </div>
        </main>
    );
}

export default Home;