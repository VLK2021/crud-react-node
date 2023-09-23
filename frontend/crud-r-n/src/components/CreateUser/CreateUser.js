import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import './CreateUserStyle.css';
import {useNavigate} from "react-router-dom";


const CreateUser = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const navigate = useNavigate();

    const submit = async (data) => {
        await userService.createUser(data);
        reset();
        navigate(-1);
    }

    const back = () => {
        navigate(-1);
    }


    return (
        <div className={'createUser flex'}>
            <div className={'createUser-back-block'}>
                <button onClick={back}>back</button>
            </div>

            <form onSubmit={handleSubmit(submit)} className={'createForm flex'}>
                <h1>Create user</h1>

                <label>Name
                    <input type="text" {...register('firstName',{
                        required: 'Field cannot be empty!',
                        minLength:{
                            value: 2,
                            message: 'The field must have more characters'
                        }
                        })}
                           placeholder={'write name...'}

                    />
                </label>
                <div className={'error'}>
                    {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
                </div>

                <label>City
                    <input type="text" {...register('city', {
                        required: 'Field cannot be empty!',
                        minLength:{
                            value: 2,
                            message: 'The field must have more characters'
                        }
                    })}
                           placeholder={'write city...'}
                    />
                </label>
                <div className={'error'}>
                    {errors?.city && <p>{errors?.city?.message || 'Error'}</p>}
                </div>

                <label>Email
                    <input type="text" {...register('email', {
                        required: 'Field cannot be empty!',
                    })}
                           placeholder={'write email...'}
                    />
                </label>
                <div className={'error'}>
                    {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                </div>

                <div className={'createUser-btn-block flex'}>
                    <button disabled={!isValid}>submit</button>
                </div>

            </form>
        </div>
    );
};

export {CreateUser};