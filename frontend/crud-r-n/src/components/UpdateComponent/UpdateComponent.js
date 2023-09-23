import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

import './UpdateComponentStyles.css';
import {userService} from "../../services";


const UpdateComponent = () => {
    const {userForUpdate} = useSelector(store => store.users);
    const {register, handleSubmit, reset} = useForm({mode: "onBlur"});

    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (userForUpdate) {
            reset(userForUpdate);
        }
    }, [userForUpdate, reset]);


    const submit = async (data) => {
        await userService.updateById(id, data);
        reset();
        navigate(-1);
    }

    const back = () => {
        navigate(-1);
    }


    return (
        <div className={'updateComponent flex'}>
            <div className={'updateUser-back-block'}>
                <button onClick={back}>back</button>
            </div>

            <form onSubmit={handleSubmit(submit)} className={'updateForm flex'}>
                <h1>Update user</h1>

                <label>Name
                    <input type="text" {...register('firstName')} placeholder={'update name...'}/>
                </label>

                <label>City
                    <input type="text" {...register('city')} placeholder={'update city...'}/>
                </label>

                <label>Email
                    <input type="text" {...register('email')} placeholder={'update email...'}/>
                </label>

                <div className={'updateUser-btn-block flex'}>
                    <button>submit</button>
                </div>

            </form>
        </div>
    );
};

export {UpdateComponent};