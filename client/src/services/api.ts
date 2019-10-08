import { GetUsers } from "../types/api"

export const getUsers: GetUsers = function() {
  const url = "http://localhost:3001/users";
  return fetch(url)
    .then(res => res.json());
};
