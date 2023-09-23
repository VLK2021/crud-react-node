import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import './UserStyle.css';
import {getAllUsers, userActions} from "../../store";
import {userService} from "../../services";


const User = ({user}) => {
    const {id, firstName, email, city} = user;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const put = () => {
        dispatch(userActions.setUserForUpdate(user))
        navigate(`/user/${id}`)
    }

    const dell = async () => {
        await userService.deleteById(id);
        dispatch(getAllUsers())
    }


    return (
        <div className={'user flex'}>
            <div className={'user-firstName'}>{firstName}</div>
            <div className={'user-email'}>{email}</div>
            <div className={'user-city'}>{city}</div>

            <div className={'user-btn-block flex'}>
                <button className={'flex put'} onClick={put}>
                    put
                </button>

                <button className={'flex del'} onClick={dell}>
                    delete
                </button>
            </div>
        </div>
    );
};

export {User};