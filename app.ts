import express, { Application } from 'express';
import router from './router/index';
const app: Application = express();
const port = 3000;

app.use(router)

app.listen(port, (): void => {
  console.log(`Example app listening at http://localhost:${port}`)
});
