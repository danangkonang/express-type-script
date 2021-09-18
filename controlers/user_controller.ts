import { Request, Response } from "express";
import { show } from '../service/user_service';

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    let response = await show();
    return res.status(200).send({
      message: "login...",
      data: response,
    });
  } catch (err) {
    return res.status(200).send({
      message: "login...",
    });
  }
};

export { login }