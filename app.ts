import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

app.get(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      message: "Hello World!",
    });
  }
);

app.listen(port, (): void => {
  console.log(`Example app listening at http://localhost:${port}`)
});
