import { Request, Response } from "express";
import { show } from '../service/user_service';

const users = async (req: Request, res: Response): Promise<Response> => {
  try {
    let response = await show();
    return res.status(200).send({
      status: 200,
      message: "success",
      data: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).send({
      status: 500,
      message: "internal server error",
    });
  }
};

export { users }