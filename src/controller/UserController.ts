import { Request, Response } from 'express';

export default new class UserController {

    public async getById(req:Request, res:Response): Promise<Response> {

        try {
                        
            return res.status(201).json({
                data: "teste",
                message: 'Users listed successfully',
                status: true
            })
            
        }catch( err:any ){

            return res.status(500).json({ 
                message : err.message,
                status: false 
            })
        }

    }

}