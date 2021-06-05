import { Request, Response, Router } from 'express';
import conversion from './routes/conversion';

export default () => {
    const appRouter = Router();
    conversion(appRouter);

    appRouter.get('', (req: Request, res: Response) => {
        return res.status(200).send("hello world");
    })

    return appRouter; 
}