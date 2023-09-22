import React from 'react';
import {useNavigate} from "react-router-dom";

import './UserStyle.css';


const User = ({user}) => {
    const {id, firstName, email, city} = user;
    const navigate = useNavigate();


    const put = () => {
        navigate(`/user/${id}`)
    }



    return (
        <div className={'user flex'}>
            <div>{firstName}</div>
            <div>{email}</div>
            <div>{city}</div>

            <div className={'user-btn-block flex'}>
                <button className={'flex put'} onClick={put}>
                    put
                </button>

                <button className={'flex del'} onClick={() => null}>
                    delete
                </button>
            </div>
        </div>
    );
};

export {User};