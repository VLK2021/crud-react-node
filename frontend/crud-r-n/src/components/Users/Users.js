import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getAllUsers} from "../../store";
import './UsersStyle.css';
import {User} from "../User/User";


const Users = () => {
    const {usersArr} = useSelector(store => store.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getAllUsers());
    }, []);


    return (
        <div className={'users flex'}>
            <div className={'btn-create'}>
                <button onClick={() => navigate('user/create')}>create user</button>
            </div>

            <h1>users</h1>

            <div className={'users-block'}>{
                usersArr &&
                usersArr.map(obj => <User key={obj.id} user={obj}/>)
            }</div>
        </div>
    );
};

export {Users};