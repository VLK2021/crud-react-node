import React from 'react';

import './UpdateComponentStyles.css';
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";



const UpdateComponent = () => {
    const {register, handleSubmit, reset} = useForm();
    const {id} = useParams();


    return (
        <div className={'updateComponent'}>
            UpdateComponent {id}
        </div>
    );
};

export {UpdateComponent};