import { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import {extractToText} from '../../services/extraction-service';

import config from '../../config/config';

const router = Router();

export default (appRouter: Router) => {
    appRouter.use('/convert', router);
    const uploadPath = path.resolve(config.baseDir, 'upload');
    const upload = multer({ dest: uploadPath });

    router.post('/text-extraction', upload.single('input'), async (req: Request, res: Response) => {
        if(req.file.filename == null){
            return res.status(400).send("No file was provided");
        }
        const filePath = path.resolve(uploadPath, req.file.filename);
        const text = await extractToText(filePath);
        return res.send(text);
    })


}