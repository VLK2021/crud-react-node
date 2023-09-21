import {getManager, UpdateResult} from "typeorm";

import {IUser, User} from "../entity";


class UserService {
    public async getAll(): Promise<IUser[]> {
        return getManager().getRepository(User).find();
    }

    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async deleteUser(id: number): Promise<UpdateResult> {
        return getManager().getRepository(User).softDelete({id});
    }

    public async updateUser(id: number, firstName: string, email: string, city: string): Promise<UpdateResult> {
        return getManager().getRepository(User).update({id}, {firstName, email, city})
    }


}

export const userService = new UserService();