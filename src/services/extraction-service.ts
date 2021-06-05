import tesseract, { createWorker } from 'tesseract.js';
import config from '../config/config';

async function getWorker() {
    let worker = createWorker({
        langPath: config.baseDir + 'training-data',
        logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    return worker
}

export async function extractToText(file: string) {
    const worker = await getWorker();
    const { data: { text } } = await worker.recognize(file);
    return text;
}
