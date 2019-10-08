import * as myApi from "simple-types"

export type User = myApi.User

export type Status = myApi.Status

export type getUsers = () => Promise<User[]>;

export const getUsers: getUsers = function() {
  const url = "http://localhost:3001/users";
  return fetch(url)
    .then(res => res.json());
};
