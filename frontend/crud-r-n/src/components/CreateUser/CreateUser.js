import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import './CreateUserStyle.css';
import {useNavigate} from "react-router-dom";


const CreateUser = () => {
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();

    const submit = async (data) => {
        await userService.createUser(data);
        reset();
        navigate(-1);
    }


    return (
        <div className={'createUser'}>

            <form onSubmit={handleSubmit(submit)} className={'createForm flex'}>
                <h1>Update user</h1>

                <label>Name<input type="text" {...register('firstName')}/></label>

                <label>City<input type="text" {...register('city')}/></label>

                <label>Email<input type="text" {...register('email')}/></label>

                <div>
                    <button>submit</button>
                </div>

            </form>
        </div>
    );
};

export {CreateUser};