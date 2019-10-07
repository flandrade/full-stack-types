import { Response, Request } from "express";

/**
 * GET /api/users
 * List of users.
 */
export const getUsers = (req: Request, res: Response) => {
  res.json({});
};
