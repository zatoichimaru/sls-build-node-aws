import './config'
import Express, { Request, Response, json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import userRouter from './router/user'


class App {
    public app: Express.Application;
    public port: string;
  
    public constructor() {
        this.app = Express()
        this.middlewares()
        this.port = process.env.APP_PORT

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}.`)
        });

    }

    private middlewares(): void {
        this.app.use(json());
        this.app.use(cors());
        this.app.use(helmet());
        this.routes();
    }

    private routes(): void  {

    
        this.app.use('/user', userRouter);
        this.app.use((req:Request, res:Response) => {
            res.status(404).json({ error: 'NOT FOUND' });
        })
    }

}

export default new App().app;