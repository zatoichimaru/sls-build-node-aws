import { Router, Request, Response } from 'express';
import UserController from '../controller/UserController';

const router = Router();

router.get('/',
    (req:Request, res:Response) => {
        return UserController.getById(req, res);
    });

export default router;