import { Response, Request } from "express";
import { User, GetUsers } from "../types/api";

/**
 * GET /api/users
 * List of users.
 */
export const getUsersReq = (req: Request, res: Response) => {
  res.json(getUsersFn());
};

const getUsersFn: GetUsers = function() {
  const users: User[] =
  [{
    age: 15,
    id: 10,
    name: "Tess",
    status: "available"
  }, {
    age: 33,
    id: 8,
    name: "Sam",
    status: "non-available"
  }];
  return Promise.resolve(users);
};
