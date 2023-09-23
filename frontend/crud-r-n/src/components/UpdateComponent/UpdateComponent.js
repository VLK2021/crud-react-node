import React from 'react';

import './UpdateComponentStyles.css';
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {userService} from "../../services";



const UpdateComponent = () => {
    const {register, handleSubmit, setValue, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const navigate = useNavigate();
    const {id} = useParams();

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
                    <input type="text" {...register('firstName',{
                        required: 'Field cannot be empty!',
                        minLength:{
                            value: 2,
                            message: 'The field must have more characters'
                        }
                    })}
                           placeholder={'update name...'}

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
                           placeholder={'update city...'}
                    />
                </label>
                <div className={'error'}>
                    {errors?.city && <p>{errors?.city?.message || 'Error'}</p>}
                </div>

                <label>Email
                    <input type="text" {...register('email', {
                        required: 'Field cannot be empty!',
                    })}
                           placeholder={'update email...'}
                    />
                </label>
                <div className={'error'}>
                    {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                </div>

                <div className={'updateUser-btn-block flex'}>
                    <button disabled={!isValid}>submit</button>
                </div>

            </form>
        </div>
    );
};

export {UpdateComponent};