import {Router} from "express";

import {userController} from "../controllers";



const router = Router();

router.get('/', userController.getAll);
router.post('/create', userController.createdUser);
router.delete('/:id', userController.deletedUser);
router.put('/:id', userController.updateUser);


export const userRouter = router;