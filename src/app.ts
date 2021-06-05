import express from 'express';
import config from './config/config';
import routes from './api/index';
import cors from 'cors';

async function startServer() {
  const app = express();
  console.log("api prefix: " + config.api.prefix);
  app.use(config.api.prefix, routes());
  app.use(cors());

  app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
  });
}

startServer();