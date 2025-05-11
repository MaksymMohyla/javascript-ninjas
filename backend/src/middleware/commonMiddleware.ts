import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";

import { ApiError } from "#errors";

class CommonMiddleware {
  public isBodyValid(schema: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log("Incoming body for validation:", req.body);
      try {
        req.body = await schema.validateAsync(req.body);
        next();
      } catch (e) {
        const err = e as Error;
        next(new ApiError(422, `Validation error: ${err.message}`));
        console.log("Validation Error:", err.message);
        console.log("Validating body:", req.body);
      }
    };
  }
}

export default new CommonMiddleware();
