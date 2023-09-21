import {Request, Response} from 'express';

import {IUser} from "../entity";
import {userService} from "../services";
import {UpdateResult} from "typeorm";


class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getAll();
        return res.json(users);
    }

    public async createdUser(req: Request, res: Response): Promise<Response<IUser[]>> {
        const newUser = await userService.createUser(req.body);
        return res.json(newUser);
    }

    public async deletedUser(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const { id } = req.params;
        const deletedUser = await userService.deleteUser(+id);
        return res.json(deletedUser);
    }

    public async updateUser(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const { firstName, email, city } = req.body;
        const { id } = req.params;
        const updatedUser = await userService.updateUser(+id, firstName, email, city);
        return res.json(updatedUser);
    }

}

export const userController = new  UserController();