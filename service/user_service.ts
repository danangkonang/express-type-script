import { Response } from "express";
const models = require('../db/models');

const show = async (): Promise<Response> =>  {
  const user = await models.user.findAll();
  return user;
};

const store = async (id: number): Promise<Response> =>  {
  const user = await models.user.findAll({
    where: id,
  });
  return user;
};

const update = async (): Promise<Response> =>  {
  const user = await models.user.findAll();
  return user;
};

const destroy = async (id: number): Promise<Response> =>  {
  const user = await models.user.findAll({
    where: id,
  });
  return user;
};

export { show, destroy, store, update }