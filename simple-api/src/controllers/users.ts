import { Response, Request } from "express";
import * as myApi from "simple-types";

/**
 * GET /api/users
 * List of users.
 */
export const getUsersReq = (req: Request, res: Response) => {
  res.json(getUsers());
};

/**
 * GET /api/user
 * A user.
 */
export const getUserReq = (req: Request, res: Response) => {
  res.json(getUser(15));
};

const users: myApi.User[] =
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

const getUsers: myApi.getUsers = function() {
  return users;
};

const getUser: myApi.getUser = function(id: number) {
  return users[1];
};
