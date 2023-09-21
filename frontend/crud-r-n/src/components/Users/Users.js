import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getAllUsers} from "../../store";
import './UsersStyle.css';
import {User} from "../User/User";


const Users = () => {
    const {usersArr} = useSelector(store => store.users);
    console.log(usersArr);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getAllUsers());
    }, []);


    return (
        <div className={'users'}>
            <div className={'btn-create'}>
                <button onClick={() => navigate('user/create')}>create user</button>
            </div>

            <h1>users</h1>
            <ul>
                <li>name</li>
                <li>email</li>
                <li>city</li>
            </ul>

            <hr/>

            {
                usersArr && usersArr.map(obj => <User key={obj.id} user={obj}/>)
            }
        </div>
    );
};

export {Users};