import {Column, Entity} from "typeorm";

import {CommonFields} from "./CommonFields";


export interface IUser {
    id: number;
    firstName: string;
    email: string;
    city: string;
}


@Entity('users', {database: 'crud'})
export class User extends CommonFields implements IUser{
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    city: string;
}