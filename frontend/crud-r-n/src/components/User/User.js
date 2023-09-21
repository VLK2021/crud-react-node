import React from 'react';

import './UserStyle.css';


const User = ({user}) => {
    const {id, firstName, email, city} = user;


    return (
        <div className={'user'}>
            <div>{firstName}</div>
            <div>{email}</div>
            <div>{city}</div>
        </div>
    );
};

export {User};