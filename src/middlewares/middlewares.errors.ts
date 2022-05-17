import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const error = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  const errorJoi = Joi.isError(err);
  console.log(err);

  if (errorJoi) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
};

export default error;