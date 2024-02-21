import { ErrorRequestHandler, RequestHandler } from "express";
import { logger } from "./logger";

const LOG_OWNER = "middleware";

export const unknownEndpoint: RequestHandler = (req, res) => {
  res.status(404).send({ error: `uknonwn endpoint` });
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  logger.error(LOG_OWNER, error.message);
  const errMessage = error.message.split(":");
  const statusCode = parseInt(errMessage[0]);

  const message =
    errMessage.length > 1 ? errMessage.slice(1).join(":") : errMessage[0];

  res.status(statusCode || 500).json({
    status: false,
    message,
  });
};
